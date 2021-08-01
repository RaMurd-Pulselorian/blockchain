var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const {
    v1: uuidv1,
    v4: uuidv4,
} = require('uuid');
const rp = require('request-promise');

const port = process.argv[2];

const nodeAddress = uuidv1().split("-").join("");

const bitcoin = new Blockchain();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/blockchain', function (req, res) {
    res.send(bitcoin);
});

app.post('/transaction', function (req, res) {
    const newTransaction = req.body;
    const blockIndex = bitcoin.addTransactionToPendingTransactions(newTransaction);

    res.json({ note: `Transaction will be added in block ${blockIndex}.` })
});

app.post('/transaction/broadcast', function (req, res) {
    const newTransaction = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    bitcoin.addTransactionToPendingTransactions(newTransaction);

    const requestPromises = [];
    bitcoin.networkNodes.forEach(netNode => {
        const requestOptions = {
            uri: netNode + '/transaction',
            method: 'POST',
            body: newTransaction,
            json: true
        }

        requestPromises.push(rp(requestOptions));
    });

    Promise.all(requestPromises).then(data => {
        res.json({ note: 'Transaction created and broadcast successfully.' })
    })
});

app.get('/mine', function (req, res) {
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock["hash"];
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock["index"] + 1
    };
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockhash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    // bitcoin.createNewTransaction(12.5, "00", nodeAddress);
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockhash);

    const requestPromises = [];
    bitcoin.networkNodes.forEach(netNodeUrl => {
        const requestOptions = {
            uri: netNodeUrl + '/receive-new-block',
            method: 'POST',
            body: { newBlock: newBlock },
            json: true
        };

        requestPromises.push(rp(requestOptions));
    });

    Promise.all(requestPromises).then(data => {
        const requestOptions = {
            uri: bitcoin.currentNodeUrl + '/transaction/broadcast',
            method: 'POST',
            body: {
                amount: 12.5,
                sender: "00",
                recepient: nodeAddress
            },
            json: true
        };

        return rp(requestOptions);
    }).then(data => {
        res.json({
            note: "New block mined & broadcast successfully",
            block: newBlock
        });
    })
});


app.post('/receive-new-block', function (req, res) {
    const newBlock = req.body.newBlock;
    const lastBlock = bitcoin.getLastBlock();
    const correctHash = lastBlock.hash === newBlock.previousBlockHash;
    const correctIndex = lastBlock['index'] + 1 === newBlock['index'];

    if (correctHash && correctIndex) {
        bitcoin.chain.push(newBlock);
        bitcoin.pendingTransactions = [];
        res.json({
            note: "New block received and accepted",
            newBlock: newBlock
        });
    } else {
        res.json({
            note: "New block rejected",
            newBlock: newBlock
        });
    }
});

// register a node and broadcast it to the network
app.post('/register-and-broadcast-node', function (req, res) {
    console.log("Running /register-and-broadcast-node");
    const newNodeUrl = req.body.newNodeUrl;
    if (bitcoin.networkNodes.indexOf(newNodeUrl) === -1 && bitcoin.currentNodeUrl !== newNodeUrl) {
        bitcoin.networkNodes.push(newNodeUrl);
    }

    const regNodesPromises = [];
    bitcoin.networkNodes.forEach(netNode => {
        const requestOptions = {
            uri: netNode + '/register-node',
            method: 'POST',
            body: { newNodeUrl: newNodeUrl },
            json: true
        };

        regNodesPromises.push(rp(requestOptions));
    })

    Promise.all(regNodesPromises).then(data => {
        // let allNetNodes = [];
        // for(var i of bitcoin.networkNodes) {
        //     allNetNodes.push(i);
        // }
        // allNetNodes.push(bitcoin.currentNodeUrl);

        const bulkRegisterOption = {
            uri: newNodeUrl + '/register-nodes-bulk',
            method: 'POST',
            body: { allNetworkNodes: [...bitcoin.networkNodes, bitcoin.currentNodeUrl] },
            //body: { allNetworkNodes: allNetNodes },
            json: true
        };

        return rp(bulkRegisterOption);
    }).then(data => {
        res.json({ note: 'New node registered with network successfully.' });
    })
});

// register a node with the network
app.post('/register-node', function (req, res) {
    console.log("Running /register-node -- " + req.body.newNodeUrl + " on " + bitcoin.currentNodeUrl);
    const newNodeUrl = req.body.newNodeUrl;
    if (bitcoin.networkNodes.indexOf(newNodeUrl) === -1 && bitcoin.currentNodeUrl !== newNodeUrl) {
        bitcoin.networkNodes.push(newNodeUrl);
    }
    res.json({ note: 'New node registered successfully.' });
});

// register multiple nodes at once
app.post('/register-nodes-bulk', function (req, res) {
    console.log("Running /register-nodes-bulk -- " + req.body.allNetworkNodes + " on " + bitcoin.currentNodeUrl);
    const allNetworkNodes = req.body.allNetworkNodes;

    allNetworkNodes.forEach(newNodeUrl => {
        if (bitcoin.networkNodes.indexOf(newNodeUrl) === -1 && bitcoin.currentNodeUrl !== newNodeUrl) {
            bitcoin.networkNodes.push(newNodeUrl);
        }
    })

    res.json({ note: 'All nodes bulk-registered successfully.' });
});

app.get('/consensus', function (req, res) {
    const requestPromises = [];
    bitcoin.networkNodes.forEach(networkNodeUrl => {
        const requestOptions = {
            uri: networkNodeUrl + '/blockchain',
            method: 'GET',
            json: true
        };

        requestPromises.push(rp(requestOptions));
    });

    Promise.all(requestPromises).then(blockchains => {
        const currentChainLength = bitcoin.chain.length;
        var maxChainLength = currentChainLength;
        var newLongestBlockchain = null;
        var newPendingTransactions = null;

        blockchains.forEach(blockchain => {
            if (blockchain.chain.length > maxChainLength) {
                maxChainLength = blockchain.chain.length;
                newLongestBlockchain = blockchain.chain;
                newPendingTransactions = blockchain.pendingTransactions;
            }
        });

        if (!newLongestBlockchain || (newLongestBlockchain && !bitcoin.chainIsValid(newLongestBlockchain))) {
            res.json({
                note: 'Current change has not been replaced.',
                chain: bitcoin.chain
            });
        } else {
            bitcoin.chain = newLongestBlockchain;
            bitcoin.pendingTransactions = newPendingTransactions;

            res.json({ 
                note: 'This chain has been replaced.',
                chain: bitcoin.chain
            })
        }
    });
});

app.get('/block/:blockHash', function(req, res) {

});

app.get('/transaction/:transactionId', function(req, res) {

});

app.get('/address/:address', function(req, res) {

});

app.listen(port, function () {
    console.log('Listening at port ' + port + ' ...')
});
var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');
const port = process.argv[2];

const nodeAddress = uuidv1().split("-").join("");

const bitcoin = new Blockchain();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/blockchain', function(req, res){
    res.send(bitcoin);
})

app.post('/transaction', function(req, res){
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({note: `Transaction will be added in block ${blockIndex}.`});
})

app.get('/mine', function(req, res) {
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock["hash"];
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock["index"] + 1
    };
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockhash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    bitcoin.createNewTransaction(12.5, "00", nodeAddress);
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockhash);
    res.json({
        note: "New block mined successfully",
        block: newBlock
    })
})

app.listen(port, function(){
    console.log('Listening at port ' + port + ' ...')
});
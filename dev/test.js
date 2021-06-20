const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// bitcoin.createNewBlock(424256, '0HFUEKRLHERJE', 'EHROEHRO2B');

// bitcoin.createNewTransaction(100, 'SAJID432JKDFSJKD1JDF', 'ADIL9JDGKSJF84JKBFD');

// bitcoin.createNewBlock(4764323, '9HJFJKFS9JHFKD7', '0HFUEKRLHERJE');

// bitcoin.createNewTransaction(54, 'SAJID432JKDFSJKD1JDF', 'ADIL9JDGKSJF84JKBFD');
// bitcoin.createNewTransaction(43, 'SAJID432JKDFSJKD1JDF', 'ADIL9JDGKSJF84JKBFD');
// bitcoin.createNewTransaction(86, 'SAJID432JKDFSJKD1JDF', 'ADIL9JDGKSJF84JKBFD');

// bitcoin.createNewBlock(564342, '8HJDFHJD82HJJ', '9HJFJKFS9JHFKD7');


// const previousBlockHash = '8HKKB9NKJBJ2HJD'
// const currentBlockData = [
//     { amount: 211, sender: '8JHKD2HJDFS24JGKD', recipient: '5JDF0JDHGJD3GJK0'},
//     { amount: 20, sender: '6JHKD2HJDFS24JGKD', recipient: '6JDF0JDHGJD3GJK0'},
//     { amount: 23, sender: '8JHKD2HJDFS24JGKD', recipient: '5JDF0JDHGJD3GJK0'},
//     { amount: 45, sender: '6JHKD2HJDFS24JGKD', recipient: '6JDF0JDHGJD3GJK0'}
// ];
// // const nonce = 243;

// const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
// console.log(nonce);

// const hash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce)

// //console.log(bitcoin.chain[bitcoin.chain.length - 1]);
// console.log(hash);

// const bitcoin = new Blockchain();

console.log(bitcoin);
const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
      {
        "index": 1,
        "timestamp": 1625401849063,
        "transactions": [],
        "nonce": 7,
        "hash": "0",
        "previousBlockHash": "0"
      },
      {
        "index": 2,
        "timestamp": 1625401866716,
        "transactions": [],
        "nonce": 18140,
        "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
        "previousBlockHash": "0"
      },
      {
        "index": 3,
        "timestamp": 1625401870041,
        "transactions": [
          {
            "transactionId": "b45b0710dcc311eb8ffe337b09b0e5a7",
            "amount": 12.5,
            "sender": "00"
          }
        ],
        "nonce": 60429,
        "hash": "0000666d4f6caf509ce709f103cfab655b4b01ce72179a25d615c17121af49dd",
        "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
      },
      {
        "index": 4,
        "timestamp": 1625401991670,
        "transactions": [
          {
            "transactionId": "b6517fe0dcc311eb8ffe337b09b0e5a7",
            "amount": 12.5,
            "sender": "00"
          },
          {
            "transactionId": "cdd2cd90dcc311eb8ffe337b09b0e5a7",
            "amount": 10,
            "sender": "9DFS4JDFJ6JFDJSL2",
            "recipient": "18SFDJHFKFHK2JK214"
          },
          {
            "transactionId": "d9f64160dcc311eb8ffe337b09b0e5a7",
            "amount": 20,
            "sender": "7DFS4JDFJ6JFDJSL2",
            "recipient": "518SFDJHFKFHK2JK214"
          },
          {
            "transactionId": "dfeeba70dcc311eb8ffe337b09b0e5a7",
            "amount": 30,
            "sender": "7DFS4FAFJ6JFDJSL2",
            "recipient": "318SFDJHFKFHK2JK214"
          },
          {
            "transactionId": "f4859260dcc311eb8ffe337b09b0e5a7",
            "amount": 40,
            "sender": "7DFS4FAFJ6JFDJSL2",
            "recipient": "318SFDJHFKFHK2JK214"
          },
          {
            "transactionId": "f5fdda80dcc311eb8ffe337b09b0e5a7",
            "amount": 50,
            "sender": "7DFS4FAFJ6JFDJSL2",
            "recipient": "318SFDJHFKFHK2JK214"
          },
          {
            "transactionId": "f828f7e0dcc311eb8ffe337b09b0e5a7",
            "amount": 60,
            "sender": "7DFS4FAFJ6JFDJSL2",
            "recipient": "318SFDJHFKFHK2JK214"
          },
          {
            "transactionId": "fa1bc730dcc311eb8ffe337b09b0e5a7",
            "amount": 70,
            "sender": "7DFS4FAFJ6JFDJSL2",
            "recipient": "318SFDJHFKFHK2JK214"
          }
        ],
        "nonce": 192753,
        "hash": "00009a1dd764e5a81fdd50a1d845ab0ffeda1988ca6dc4964da031e3f77b2ddf",
        "previousBlockHash": "0000666d4f6caf509ce709f103cfab655b4b01ce72179a25d615c17121af49dd"
      },
      {
        "index": 5,
        "timestamp": 1625401997081,
        "transactions": [
          {
            "transactionId": "fed04e90dcc311eb8ffe337b09b0e5a7",
            "amount": 12.5,
            "sender": "00"
          }
        ],
        "nonce": 2830,
        "hash": "0000d9cdabb50a3453e3309295ee5a0b0b39bc1b4c16c339a8fd40e78a0abcba",
        "previousBlockHash": "00009a1dd764e5a81fdd50a1d845ab0ffeda1988ca6dc4964da031e3f77b2ddf"
      },
      {
        "index": 6,
        "timestamp": 1625401998869,
        "transactions": [
          {
            "transactionId": "0209f5c0dcc411eb8ffe337b09b0e5a7",
            "amount": 12.5,
            "sender": "00"
          }
        ],
        "nonce": 91453,
        "hash": "0000049993d1eb109cf054dbea670d3f29ccf62e42721c136aa56ab70f951a0e",
        "previousBlockHash": "0000d9cdabb50a3453e3309295ee5a0b0b39bc1b4c16c339a8fd40e78a0abcba"
      }
    ],
    "pendingTransactions": [
      {
        "transactionId": "031aa270dcc411eb8ffe337b09b0e5a7",
        "amount": 12.5,
        "sender": "00"
      }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
  };

console.log("Valid: ",bitcoin.chainIsValid(bc1.chain));
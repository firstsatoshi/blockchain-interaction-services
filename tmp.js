
const Web3 = require('web3');
const bitcoin = require('bitcoinjs-lib');
const blockchainInfo = require('blockchain.info');

const { networks } = require('../../config');
const { abi } = require('../../ABI');

const testnet = true;
const unspentTxs = blockchainInfo.blockexplorer.getUnspentOutputs('tb1phjsyw73de6ap8nfjzg4erxmdw7lzlfgvm447v82fytn78nm0mwnshjz6r3', { testnet});


console.log(unspentTxs);
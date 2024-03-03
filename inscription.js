require('dotenv').config(); 
const Web3 = require('web3');
const fs = require('fs'); 

async function main() {
    try {
        
        const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ZKSYNC_TESTNET));
        console.log('Web3 đã được khởi tạo.');

        
        const jsonData = JSON.parse(fs.readFileSync('./abis/inscription.json', 'utf8'));
        console.log('Dữ liệu từ tệp JSON đã được đọc.');

        
        const transaction = {
            to: process.env.WALLET_DB2, 
            value: web3.utils.toWei('0', 'ether'), 
            data: web3.utils.utf8ToHex(JSON.stringify(jsonData)), 
            gas: 200000, 
            gasPrice: web3.utils.toWei('50', 'gwei'), 
            nonce: await web3.eth.getTransactionCount(process.env.WALLET_DB2) 
        };
        console.log('Giao dịch đã được tạo.');

        
        const signedTransaction = await web3.eth.accounts.signTransaction(transaction, process.env.PRIVATE_KEY);
        console.log('Giao dịch đã được ký.');

        
        const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
        console.log('Giao dịch đã được gửi:', receipt.transactionHash);
    } catch (error) {
        console.error('Error:', error);
    }
}


main();

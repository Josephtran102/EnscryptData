const crypto = require('crypto');
 
const algorithm = 'aes-256-cbc';
 
function encrypt(text) {
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);

    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    
    return { 
        iv: iv.toString('hex'),
        encryptedData: encrypted.toString('hex'),
        key: key.toString('hex') // Log key as hex string
    };
}
 
var encrypted = encrypt("YOUR Data need enscrypt"); // Input Data
console.log("Encrypted Text: " + encrypted.encryptedData);
console.log("Key: " + encrypted.key); // Log key
console.log("IV: " + encrypted.iv); // Log iv



// const fs = require('fs');
// const path = require('path');
// const crypto = require('crypto');

// const algorithm = 'aes-256-cbc';

// function encryptFile(filePath) {
//     // Read .json file
//     const rawData = fs.readFileSync(filePath);
//     const jsonData = JSON.stringify(JSON.parse(rawData));

//     // Creat key pair
//     const key = crypto.randomBytes(32);
//     const iv = crypto.randomBytes(16);

//     let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
//     let encrypted = cipher.update(jsonData);
//     encrypted = Buffer.concat([encrypted, cipher.final()]);
    
//     return { 
//         iv: iv.toString('hex'),
//         encryptedData: encrypted.toString('hex'),
//         key: key.toString('hex') // Log key as hex string
//     };
// }

// 
// const filePath = path.join(__dirname, 'example.json');

// 
// const encryptedResult = encryptFile(filePath);

// console.log("Encrypted Text: " + encryptedResult.encryptedData);
// console.log("Key: " + encryptedResult.key); // Log key
// console.log("IV: " + encryptedResult.iv); // Log iv

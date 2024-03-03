const crypto = require('crypto');

const algorithm = 'aes-256-cbc';

// Hàm giải mã
function decrypt(encryptedData, iv, key) {
    let ivBuffer = Buffer.from(iv, 'hex');
    let encryptedText = Buffer.from(encryptedData, 'hex');
    let keyBuffer = Buffer.from(key, 'hex');

    let decipher = crypto.createDecipheriv(algorithm, keyBuffer, ivBuffer);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
}

// Dữ liệu đã được mã hóa và key đã được tạo ra từ quá trình mã hóa trước đó
let encryptedData = 'enscrypt data';
let key = 'key created';
let iv = 'iv created';

let decryptedText = decrypt(encryptedData, iv, key);
console.log("Decrypted Text: " + decryptedText);

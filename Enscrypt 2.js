///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sjcl = require("sjcl");
const readlineSync = require("readline-sync");
const fs = require('fs');
require('dotenv').config(); 

function encryptMessage(message, password) {
    const bitArrayMessage = sjcl.codec.utf8String.toBits(message);
    const bitArrayKey = sjcl.codec.utf8String.toBits(password);
    const encryptedMessage = sjcl.encrypt(bitArrayKey, bitArrayMessage);
    return encryptedMessage;
  }
  
  // Nhập thông điệp và mật khẩu để mã hóa
  const plaintext = process.env.DATA_ENSCRYPT;
  const passwordForEncryption = readlineSync.question("Nhập mật khẩu để mã hóa: ", {
    hideEchoBack: true
  });
  
  // Mã hóa thông điệp và lưu vào biến để sử dụng sau này
  const encryptedMessage = encryptMessage(plaintext, passwordForEncryption);
  
  // Ghi thông điệp đã mã hóa vào file JSON
  fs.writeFileSync('./abis/encryptedMessage.json', JSON.stringify(encryptedMessage, null, 2));
  
  console.log("Thông điệp đã được mã hóa và lưu trữ trong file 'encryptedMessage.json'");
  // console.log("Thông điệp đã được mã hóa:", encryptedMessage);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// // Hàm giải mã thông điệp
// function decryptMessage(encryptedMessage, password) {
//   const bitArrayKey = sjcl.codec.utf8String.toBits(password);
//   const decryptedMessage = sjcl.decrypt(bitArrayKey, encryptedMessage);
//   return decryptedMessage;
// }

// try {
//   // Đọc nội dung từ file JSON chứa thông điệp đã mã hóa
//   const fileContent = fs.readFileSync('./abis/encryptedMessage.json', 'utf8');

//   // Chuyển đổi nội dung từ chuỗi JSON sang đối tượng JavaScript
//   const encryptedMessageToDecrypt = JSON.parse(fileContent);

//   // Nhập mật khẩu để giải mã
//   const passwordForDecryption = readlineSync.question("Nhập mật khẩu để giải mã: ", {
//     hideEchoBack: true
//   });

//   // Giải mã thông điệp từ thông điệp đã lưu trữ
//   const decryptedMessage = decryptMessage(encryptedMessageToDecrypt, passwordForDecryption);
//   // Ghi thông điệp đã giải mã vào file JSON
//   fs.writeFileSync('./abis/secret.txt', JSON.stringify(decryptedMessage, null, 2));
//   // console.log("Thông điệp giải mã lưu trữ trong file 'secret.txt'");
//   console.log("Thông điệp giải mã:", decryptedMessage);
// } catch (error) {
//   console.error("Lỗi khi giải mã:", error.message);
// }

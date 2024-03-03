const dataString = 'Data input';
const dataHex = Buffer.from(dataString, 'utf8').toString('hex');
console.log(dataHex);


const hexString = '0x16eed45172ed36bab4005a1ddbbedfaa245e1f0e923c0b7f24ec730878c9746';
const text = Buffer.from(hexString, 'hex').toString('utf8');
console.log(text);

// const data = '{"p":"brc-20","op":"deploy","tick":"ordi","max":"21000000","lim":"1000"}';
// const hexData = Buffer.from(JSON.stringify(data)).toString('hex');
// console.log(hexData);

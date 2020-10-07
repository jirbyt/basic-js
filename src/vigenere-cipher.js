const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  typeOfMachine;

constructor(typeOfMachine){
this.typeOfMachine = typeOfMachine;
}

encrypt(message, key) {
 

let arrMess = message.toUpperCase().split('').map(item => item.charCodeAt() - 65);
let arrKey =  key.toUpperCase().split('').map(item => item.charCodeAt() - 65);

let indexOfSpace = [];
for(let i=0; i<arrMess.length; i++){
arrMess[i]>=0 && arrMess[i]<26 ? indexOfSpace[i]='' : indexOfSpace[i]=i;  
}
indexOfSpace = indexOfSpace.filter(item => item !== '');

arrMess = arrMess.filter(item => item>=0&&item<26);

for(let i=0; i<arrMess.length; i++){
arrKey = arrKey.concat(arrKey);
if (arrKey.length>arrMess.length)  break; 
}
arrKey=arrKey.splice(0, arrMess.length)


let result = [];
for(let i=0; i<arrMess.length; i++){
result[i]=arrMess[i]+arrKey[i]
}

result = result.map(item => item<26 ? String.fromCharCode(item+65):String.fromCharCode(item+39))

for(let i=0; i<indexOfSpace.length; i++){
result.splice(indexOfSpace[i], 0, message.split('')[indexOfSpace[i]] )
}


this.typeOfMachine ===false ? result = result.reverse().join('') :  result = result.join('');
return result
}

decrypt(message, key) {
 

let arrMess = message.toUpperCase().split('').map(item => item.charCodeAt() - 65);
let arrKey =  key.toUpperCase().split('').map(item => item.charCodeAt() - 65);

let indexOfSpace = [];
for(let i=0; i<arrMess.length; i++){
arrMess[i]>=0 && arrMess[i]<26 ? indexOfSpace[i]='' : indexOfSpace[i]=i;
}

indexOfSpace = indexOfSpace.filter(item => item !== '');

arrMess = arrMess.filter(item => item>=0&&item<26);

for(let i=0; i<arrMess.length; i++){
arrKey = arrKey.concat(arrKey);
if (arrKey.length>arrMess.length)  break; 
}
arrKey=arrKey.splice(0, arrMess.length)

let result = [];
for(let i=0; i<arrMess.length; i++){
result[i]=arrMess[i]-arrKey[i]
}

result = result.map(item => item>=0 ? String.fromCharCode(item+65):String.fromCharCode(item+91))

for(let i=0; i<indexOfSpace.length; i++){
result.splice(indexOfSpace[i], 0, message.split('')[indexOfSpace[i]] )
}

this.typeOfMachine ===false ? result = result.reverse().join('') :  result = result.join('');
return result
}
}

module.exports = VigenereCipheringMachine;

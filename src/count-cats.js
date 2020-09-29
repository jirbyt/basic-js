const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
let cats=0;
let i;
let j;
let arr={};
for(i=0; i< matrix.length; i++){
arr=matrix[i];
for(j=0; j<arr.length; j++){
if(arr[j]==="^^"){
cats+=1;
}
}
}
return cats;
};

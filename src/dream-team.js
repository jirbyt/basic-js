const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
if (!Array.isArray(members)){
	return false
}
else {
let dreamTeam="";
let arr=[];
for(let i=0; i<members.length; i++){
if(typeof members[i] === 'string'){
arr[i] =members[i].match(/[A-Za-z]/);
}
}

return arr.join('').toUpperCase().split('').sort().join('');
}
};

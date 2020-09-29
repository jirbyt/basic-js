const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 let i=0;
let dreamTeam="";
for(i; i<members.length; i++){
if(typeof members[i] === typeof 'string'){
dreamTeam +=" "+members[i]
}
}

let passworDT = dreamTeam.match(/[A-Z]/g).sort().join("");

return passworDT;
};

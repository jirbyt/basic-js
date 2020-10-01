const CustomError = require("../extensions/custom-error");

class ChainMaker  {
 
strNew ='';
arr = [];

getLength() {

this.arr.push('( '+this.arr.length+' )');
this.strNew=this.arr[this.arr.length-1];
return this;
}


addLink(value) {
if (typeof value === 'undefined'){
this.arr.push('( '+" "+' )');
this.strNew=this.arr.join('~~');
}
else if(!value && typeof value === 'object'){
this.arr.push('( '+"null"+' )');
this.strNew=this.arr.join('~~');
}

else {
this.arr.push('( '+value+' )');
this.strNew=value;
}
return this;
} 

reverseChain() {

this.arr = this.arr.reverse();
this.strNew=this.arr.join('~~');
return this;
} 

removeLink(position) {

this.arr.splice(position-1,1);
this.strNew=this.arr.join('~~');
return this;
} 

finishChain() {

return this.strNew=this.arr.join('~~');
}

}
const chainMaker = new ChainMaker();
module.exports = chainMaker;

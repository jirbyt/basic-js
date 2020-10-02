const CustomError = require("../extensions/custom-error");

const chainMaker = {

arr : [],

getLength() {
this.arr.push('( '+this.arr.length+' )');
return this
},

addLink(value) {
	if (typeof value === 'undefined'){
		this.arr.push('( '+" "+' )');
	}
	else if(!value && typeof value === 'object'){
		this.arr.push('( '+"null"+' )');
	}
	else {
		this.arr.push('( '+value+' )');
	}
	return this;
	
}, 

reverseChain() {
	this.arr.reverse();
	return this;
	
}, 

removeLink(position) {
	if(position>0 && position < this.arr.length+1 && typeof position === 'number' && (Math.trunc(position)-position)>=0 ){
		this.arr.splice(position-1,1);
		return this;
		
		}
	else {
	this.arr=[];
	throw new Error();
	return this;
	}
}, 

finishChain() {
	let res = this.arr.join('~~');
	this.arr=[];
	return res;
	}
};
module.exports = chainMaker;

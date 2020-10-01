const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
let a = arr; 
if (Array.isArray(a) === true || !a && typeof a ==='object'){
for(let i=0; i<arr.length; i++){
if(a[i]=="--discard-next" && a[i+1] !== undefined){
a.splice(i, 2);
}

else if(a[i]=="--discard-prev" && a[i-1] !== undefined){
a.splice(i-1, 2);

}

else if(a[i]=="--double-next" && a[i+1] !== undefined){
a[i]=a[i+1];

}

else if(a[i]=="--double-prev" && a[i-1] !== undefined){
a[i]=a[i-1]

}

else if(a[i]=="--discard-next"  || a[i]=="--discard-prev" || a[i]=="--double-next" 	|| a[i]=="--double-prev")
a.splice(i, 1);
}
return a

}
else 
return 'Error'
};

const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
let a = arr; 
if (typeof a == 'object'){
for(let i=0; i<arr.length; i++){
if(a[i]=="--discard-next"){
a.splice(i+1, 1);
a.splice(i, 1);
}

else if(a[i]=="--discard-prev"){
a.splice(i, 1);
a.splice(i-1, 1);

}

else if(a[i]=="--double-next"){
a[i+1]=a[i+1]*2;
a.splice(i, 1);
}

else if(a[i]=="--double-prev"){
a[i-1]=a[i-1]*2;
a.splice(i, 1);
}

}
return a

}
else 
return "Error"
};

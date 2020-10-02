const CustomError = require("../extensions/custom-error");

module.exports = function transform(arrOrg) {
	if (Array.isArray(arrOrg) !== true){
		 throw new Error();
	}
	else{
		let a = [];
		let arr=[];
		for(let i=0; i<arrOrg.length; i++){
			arr[i]=	arrOrg[i];
		}
		for(let i=0; i<arr.length; i++){
			
				if(arr[i]==="--discard-next"){

				a[i-1] =arr[i-1];
				delete arr[i+1];
				delete a[i+1]
				}

				else if(arr[i]==="--discard-prev"){
				delete a[i-1];
				a[i+1] =arr[i+1];
				delete arr[i-1];
				}

				else if(arr[i]==="--double-next"){
				arr[i]=arr[i+1];
				a[i]=arr[i+1];
				a[i+1]=arr[i+1];
				a[i-1]=arr[i-1];
				}

				else if(arr[i]==="--double-prev"){
				arr[i]=arr[i-1];
				a[i-1]=arr[i-1];
				a[i]= arr[i-1];
				a[i+1]= arr[i+1];
				}
			
			else {
			a[i] =arr[i];
			}
		}
return a.filter(item => item !== undefined)
	}
};
const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
let result =str+'',
resultEnd =''
separatorNew = '',
additionSeparatorNew='',
additionNew=''; 

if (typeof str !==undefined){

options['separator']===undefined ? separatorNew = '+' : separatorNew= options['separator'];
options['additionSeparator']===undefined ? additionSeparatorNew = '|' : additionSeparatorNew= options['additionSeparator'];
options['addition']===undefined ? additionNew = '' : additionNew= options['addition'];
if (additionNew !=='' ){
let i = options['additionRepeatTimes'];
do{result+=additionNew;
i>1 ?   result+=additionSeparatorNew: result+='';
i--;
}
while(i>0);
}


if (options['repeatTimes']>1){
let i = options['repeatTimes'];
do{resultEnd+=result;
i>1 ?   resultEnd+=separatorNew: resultEnd+='';
i--;
}
while(i>0);
}
else {resultEnd=result;}



}

else  throw new Error();

return resultEnd
};
  
const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
if (typeof date !== 'undefined' || !date && typeof date === 'object'){ 
if( Array.isArray(date) === true){
return 'Error';
}


else{ 

let month = date.getUTCMonth();

let monthes = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 
'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

if (month === 0 || month < 12){
return monthes [month]
}
 
else
return "Error"
}
}

else
return "Unable to determine the time of year!"
};



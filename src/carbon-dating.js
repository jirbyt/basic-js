const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
if(typeof sampleActivity === 'string' && parseFloat(sampleActivity)>=1 && parseFloat(sampleActivity)<15) {
let k = 0.693/HALF_LIFE_PERIOD;
let t = Math.ceil(Math.abs(Math.log(sampleActivity/MODERN_ACTIVITY)/k));
return t;
}
else{
return false;
}
};

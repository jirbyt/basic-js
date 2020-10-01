const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
let max=1;
for(let j=0; j<arr.length; j++){
 max = Math.max(max, Array.isArray(arr[j]) ? 1 + this.calculateDepth(arr[j]):0);
};
return max;


  }
};
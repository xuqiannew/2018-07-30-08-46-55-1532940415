module.exports = function main(a) {
  // Write your code here
  let arr = a.split('');
  return sum = arr.reduce(function(prev , cur , index , array){
    return parseInt(prev) + parseInt(cur) ;
   });
 
};
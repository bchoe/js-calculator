/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = (function(){
  var module={};

  var _memory= 0;
  var _total= 0;



  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

   module.load= function(x){
    _total=x;
    return _total;
   };

  /**
   * Return the value of `total`
   * @return { Number }
   */

   module.getTotal= function(){
    return _total;
   };


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   module.add= function(x){
    _total=x+_total;
   };

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   module.subtract= function(x){
    _total=_total-x;
   };


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   module.multiply= function(x){
    _total=x*_total;
   };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   module.divide=function(x){
    _total=_total/x;

   };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   module.recallMemory=function(){
    return _memory;
   };

  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

   return module;
});

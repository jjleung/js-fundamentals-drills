/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
var sumArrays = function(arr1, arr2){
  var result = 0;
  for(var i = 0; i < arr1.length; i++){
    result+= arr1[i];
  }
  for(var j = 0; j < arr2.length; j++){
    result+= arr2[j];
  }
  return result;
}

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(str){
  return str.length;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */
var arrayLength = function(arr){
  return arr.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arr){
  var result = 0;
  for(var i = 0; i < arr.length; i++){
    result+= arr[i];
  }
  return result;
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function(arr){
  
  var outArr = [];
  for(var i = 0; i < arr.length; i++){
    outArr.push(arr[i].length);
  }
  return outArr;
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function(arr){

  var result = 0;
  for(var i = 0; i < arr.length; i++){
    result+= arr[i].length;
  }
  return result;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(obj){
  return Object.values(obj);
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(obj){
  return Object.entries(obj).length;
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = function(num){

  var outArr = [];
  for (var i = 0; i < num; i++){
    outArr.push(0);
  }
  return outArr;
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(arr){
  arr.pop();
  return arr;
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(str){
  return str.split("");
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(arr){
  return arr[arr.length-1].length;
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(arr){

  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 10){
      sum+= arr[i];
    }
  }
  return sum;
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(arr){

  var count = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length > 10){
      count++;
    }
  }
  return count; 
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(arr){
  let prod = 1;
  for(let i = 0; i < arr.length; i++){
    prod = prod*arr[i];
  }
  return prod;
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj){
  return Object.keys(obj);
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sum+= arr[i];
    }
  }
  return sum;
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length <= 3){
      count++
    }
  }
  return count;
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(arr){
  return arr.length;
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(obj){
  return Object.keys(obj);
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(obj){
  return Object.values(obj);
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(key, value){
  let obj = {};
  obj[key] = value;
  return obj;
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = function(value, key){
  let obj = {};
  obj[key] = value;
  return obj;
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(arr){
  let obj = {};
  obj[arr[0]] = arr[1];
  return obj;
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr){
  let obj = {};
  obj[arr[1]] = arr[0];
  return obj;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    obj[arr[i]] = 0;
  }
  return obj;
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(obj){
  return Object.values(obj);
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj){
  return Object.keys(obj);
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj){
  let keys = Object.keys(obj);
  let vals = Object.values(obj);
  let outArr = []
  for(let i = 0; i < keys.length; i++){
    let temp = [];
    temp[0] = keys[i];
    temp[1] = vals[i];
    outArr.push(temp);
  }
  return outArr;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    obj[arr[i]] = false;
  }

  return obj;
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(kees, vals){
  let obj = {};
  for(let i = 0; i < kees.length; i++){
    obj[kees[i]] = vals[i];
  }
  return obj;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(obj1, obj2){
  let arr = [];
  let kees1 = Object.keys(obj1);
  let vals1 = Object.values(obj1);
  for(let i = 0; i < kees1.length; i++){
    let temp = [];
    temp[0] = kees1[i];
    temp[1] = vals1[i];
    arr.push(temp);
  }
  let kees2 = Object.keys(obj2);
  let vals2 = Object.values(obj2);
  for(let j = 0; j < kees2.length; j++){
    let temp = [];
    temp[0] = kees2[j];
    temp[1] = vals2[j];
    arr.push(temp);
  }

  return arr;
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    obj[arr[i]] = true;
  }
  return obj;
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length >= 5){
      obj[arr[i]] = true;
    }else{
      obj[arr[i]] = false;
    }
  }
  return obj;
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    obj[arr[i]] = true;
  }
  return obj;
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function(str){
  let splitString = str.split("");
  let obj = {};
  for(let i = 0; i < splitString.length; i++){
    obj[splitString[i]] = true;
  }
  return obj;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    obj[arr[i]] = arr[i].length;
  }
  return obj;
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap = function(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]]){
      obj[arr[i]]++;
    }else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject = function(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
}


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: getKeys,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
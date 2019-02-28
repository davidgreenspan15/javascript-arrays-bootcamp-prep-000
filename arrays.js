
var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray = [element, array[0]]
  return newArray}


function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
  
function addElementToEndOfArray(array, element) {
 var newArray2 = [array[0], element]
  return newArray2
  }
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){

  return array[2]}
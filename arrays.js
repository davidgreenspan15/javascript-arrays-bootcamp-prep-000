
var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray = [element, array[0]]
  return newArray}


function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift (element)
  return array
}
  
function addElementToBeginningOfArray(array, element) {
  var newArray = [array[0],element]
  return newArray
  
}
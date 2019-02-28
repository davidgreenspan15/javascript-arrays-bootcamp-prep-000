
var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray = [element, array[0]]
  return newArray}


function destructivelyAddElementToBeginningOfArray(array, element){
  var temp2 = [`${array}`]
temp2.unshift(`${element}`)
return temp2
}
  

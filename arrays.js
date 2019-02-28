
var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]
var temp = array

function addElementToBeginningOfArray (array,element){
temp.unshift(element)
temp.shift()
    return temp }


function destructivelyAddElementToBeginningOfArray(array, element){
  var temp = [array,element]
  temp.shift(element)
return temp
}
  

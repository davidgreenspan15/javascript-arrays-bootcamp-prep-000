
var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray (array,element){
var temp = [array]
temp.unshift(element)
    return temp }


function destructivelyAddElementToBeginningOfArray(array, element){
  var temp = [array,element]
  temp.shift(element)
return temp
}
  

// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let myArray = [3, 5, 7, 9];

// Task 1:  Remove the last two items from the array, and add them to 
//          the start (one at a time) → [7,9,3,5]
// 
// Task 2:  Remove first item of current array, then at the start add 
//          a random amount (between 1-3) of zeros to the array beginning
//          → one possible result:  [0,0,9,3,5]      
//           
// Task 3:  Find and remove the 9 from the array
//          → one possible result:  [0,0,3,5]
//
// Use a print to console to verify each task's success.


let array = [3, 5, 7, 9];
let shallowCopy;
let deepCopy;

function setup() {
  // solve the tasks here

  //Task 1
  let lastItem = array.pop();
  let secondLast = array.pop();

  array.unshift(secondLast);
  array.unshift(lastItem);
  print(' Array - ' + array);
  
  //Task 2
  array.shift();
  let n = random(0,3);
  for (let i = 0; i < array.length; i++){
    array.unshift(0);
  }
  print(' Array - ' + array);
  shallowCopy = array;
  deepCopy = structuredClone(array);
  


  //Task 3
  for( let i = 0; i < array.length; i++){
    if(array[i] === 9){
      array.splice(i, 1);
    }
  }
  print('Array - ' + array);
  print(shallowCopy);
  print(deepCopy);
}


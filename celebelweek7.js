// 1. 
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());        
console.log(myColor.join(','));    
console.log(myColor.join('+'));     
console.log('\n');

// 2. 
let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let freq = {};
let maxItem = '';
let maxCount = 0;

for (let item of arr1) {
  freq[item] = (freq[item] || 0) + 1;
  if (freq[item] > maxCount) {
    maxCount = freq[item];
    maxItem = item;
  }
}
console.log(`${maxItem} ( ${maxCount} times )`);
console.log('\n');

// 3.
function truncateString(str, num) {
  return str.slice(0, num);
}
console.log(truncateString("Robin Singh", 4)); 
console.log('\n');

// 4. 
function capitalizeWords(str) {
  return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
}
console.log(capitalizeWords('js string exercises')); 
console.log('\n');

// 5. 
function arrBetween(a, b, arr) {
  return arr.filter(num => num > a && num < b);
}
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));    
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])); 
console.log(arrBetween(7, 32, [1, 2, 3, 78]));        
console.log('\n');

// 6. 
function findIndex(arr, target) {
  return arr.indexOf(target);
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));          
console.log(findIndex(["a", "g", "y", "d"], "d"));                          
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

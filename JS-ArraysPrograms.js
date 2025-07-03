
// Q-1 Find duplicates
//Method-1 using for loop===========================
let arr1 = [1,4,2,3,5,3,6,5,7]
for(let i = 0; i < arr1.length; i++)
{
    for(let j= i+1; j<arr1.length; j++)
    {
   
        if(arr1[i] == arr1[j])
        {
          console.log(arr1[i])
        }
    }
}
//Method-2 =======================================
let arr = [1, 4, 2, 3, 5, 3, 6, 5, 7];
let duplicates = {};
let result = "";

// Count occurrences
for (let i = 0; i < arr.length; i++) {
  let val = arr[i];
  duplicates[val] = (duplicates[val] || 0) + 1;
}

// Print duplicates
for (let key in duplicates) {
  if (duplicates[key] > 1) {
    console.log(`Value ${key} appears ${duplicates[key]} times`);
  }
}
// inbuilt using filter================================
let arr = [1, 4, 2, 3, 5, 3, 6, 5, 7];

let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

// Remove repeated duplicates using Set
let uniqueDuplicates = [...new Set(duplicates)];

console.log(uniqueDuplicates); // Output: [3, 5]

//==============Print zero in start or end in array===========
let arr = [1,3,0,2,0,4,0,3,4,5,0,2,1]
let nonZero = arr.filter((num)=>num!== 0)
//console.log(nonZero)
let zero = arr.filter((num)=>num === 0)
//console.log(zero)
let result = zero.concat(nonZero)
console.log(result)
//==============================================================

let arr = [7,3,5,4,2,1,8]
// let arrLength = arr.length
// console.log(arrLength)
//======Add in begin/end of array=============
// arr.push(6)
// arr.unshift(0)
// console.log(arr)
//======Remove in begin/end of array=============
// arr.pop(8)
// arr.shift(7)
//arr.splice(1,0,6)
//let arr1 = arr.reverse()
//console.log(arr1)
// let sortedArr = arr.sort((a,b)=>a-b)
// console.log(sortedArr)
//console.log(arr.includes(1))
let frequency = {};
let even = 0;
let odd = 0;
for(let i = 0; i < arr.length; i++)
{
    let ele = arr[i]
     if(ele % 2 == 0)
    {
        even++
      
    }
    else
    {
        odd++
    }
}



  console.log("Total even no. in array",even)
  console.log("Total odd no. in array", odd)






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






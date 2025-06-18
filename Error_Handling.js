// console.log(a);
// let a = 5; // ReferenceError: Cannot access 'a' before initialization
// This code will throw a ReferenceError because 'a' is used before it is declared.
// try{
//     console.log(a);
// }
// catch (error) {
//     console.error("Error caught: ", [error.name, error.message].join(' - '));
// }
// The error is caught and logged to the console.
// The code above demonstrates how to handle errors gracefully using try-catch.



let num = 10; // Example number that is out of range
if (num < 1 || num > 10) {
    throw new Error("Number out of range! Please enter a number between 1 and 10.");
}
else {
    console.log("Number is within the range."); 
// This code will throw an error if the number is not between 1 and 10.
}

//print prime number from 1 to 100 using try and catch
// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// try {
//     for (let i = 1; i <= 100; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }catch (error) {
//     console.error("Error caught: ", [error.name, error.message].join(' - '));
// }
//other methods to print prime numbers using for loop
// for (let i = 1; i <= 100; i++) {
//     let isPrime = true;      
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {   
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime && i > 1) {
//         console.log(i); // Print the prime number    
//     }
// }


//===========================Try Catch =============================================//
//Code Line1==========================
setTimeout(()=>{
try
{
console.log("I am starting TRY")
test;
console.log("I am ending TRY")
}
catch(error)
{
    console.log(error.message)
} 
},4000)
//Code Line2===========================
setTimeout(()=>{
    try
    {
     let a = 2;
     let b = 3;
     let c = a + b;
     console.log(c)
    }
catch(error)
{
   console.log(error.message) 
}
},2000)
//Code Line 3================================
try
{
let str = "santosh"
let reverse = ""
let strLength = str.length
console.log(strLength)
let str1 = str.split("")

for(let i = str1.length-1; i >=0; i--)
{
    reverse = reverse + str1[i]
}
console.log(reverse)
}
catch(error)
{
    console.log(error.message)
}


//=======================ERROR HANDLING===========================

setTimeout(()=>{
    try
    {
     let str = "I am learning phase of java script" 
     let str1 = str.split(" ")
     let wordReverse = ""
     for(let i = 0 ; i<=str1.length; i++)
     {
         let word = str1[i]
         if(word == "phase")
         {
            str1[i] = str1[i].split("").reverse().join("")
         }
     }
     let result = str1.join(" ")
     console.log(result)
    }
    catch(error)
    {
        if(error instanceof ReferenceError)
        {
       console.log(ReferenceError)
        }
        else if(error instanceof SyntaxError)
        {
             console.log(SyntaxError)
        }
        else if(error instanceof TypeError)
        {
             console.log(TypeError)
        }
        else
        {
            console.log("Unknown Error")
        }
    }
    finally
    {
        console.log("Trying to reverse Finally!!!")
    }
},1000)


//===================Chaining==================
function task(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

// Chaining promises
task('Task 1 completed', 1000)
    .then(() => task('Task 2 completed', 2000))
    .then(() => task('Task 3 completed', 1000));

//=============Next=====================================
function fetchUser(userId) {
    return Promise.resolve({ id: userId, name: "GFG" });
}

function fetchOrders(user) {
    return Promise.resolve([{ orderId: 1, userId: user.id }]);
}

fetchUser(101)
    .then((user) => {
        console.log(`User: ${user.name}`);
        return fetchOrders(user);
    })
    .then((orders) => {
        console.log(`Orders: ${orders.length}`);
    })
    .catch((error) => console.error(error));
//====================Next======================

Promise.resolve(5)
    .then((num) => {
        console.log(`Value: ${num}`);
        throw new Error("Something went wrong!");
    })
    .then((num) => {
        console.log(`This won't run`);
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`);
    });
//=============================================

//create a promise which resolve after 2 second
//Promise creation
// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Resolved after 2 seconds")
//     },2000)
// }).then((result)=>{
//     console.log(result)
// })
//=============================================================
// new Promise((resolve, reject)=>{
//     let num = 'a';
//     if(num>=0)
//     {
//         resolve("Integer Number")
//     }
//     else if(num<0)
//     {
//         reject("Negative Number")
//     }
//     else
//     {
//         reject("Not a number")
//     }
// })
// .then((result)=>{
//     console.log(result)
    
// })
// .catch((err)=>
// {
//     console.error(err)
// })
// .catch((err1)=>{
//     console.error(err1)
// })
//========================================================
// let str = new Promise((resolve, reject)=>{
//     resolve("santosh")
   
//         reject(new Error ("Error found"))
   
// })
// str.then((name)=>name.toUpperCase())
// .then((upper)=>console.log("Changed into upperCase: ", upper))
// .catch((err)=>console.log(err, "Error"))
//====================Promise Rejection========================
// new Promise((resolve,reject)=>{
//     resolve = false;
//     if(resolve)
//     {
//         console.log("Data loaded")
//     }
//     else
//     {
//         reject("Data Loading Failed!!")
//     }
// })
// .then((status)=>console.log(status))
// .catch((err)=>console.log(err))
//===================Check Even/Odd======================
//Promise Creation
// new Promise((resolve, reject)=>{
//     let num = prompt("Enter any number: ")//It will return a string number
//     let num1 = Number(num)
//     setTimeout(()=>{
//       if(isNaN(num1))
//     {
//         reject("Not a number")
//     }
//     else if(num1 % 2===0)
//     {
//         resolve("Even Number")
//     }
//     else
//     {
//         resolve("odd number")
//     }  
//     },2000)
    
// })
// //Promise consuming
// .then((result)=>console.log(result))
// .catch((err)=>console.error(err))


//==============Promises=======================

function EvenOdd(value, delay)
{
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(value % 2 == 0)
        {
            resolve(value + " is Even Number")
        }
        else
        {
            reject(new Error ("Not a Even Number"))
        }
    },delay)
})
}
EvenOdd(4,1000)
.then((result)=>{
    console.log("Step1",result)
    EvenOdd(8,2000) // call back return
    .then((result)=>{
    console.log("Step2",result)
    EvenOdd(10,3000) // call back return
    .then((result)=>{
    console.log("Step3",result)
})
})
})
.catch((err)=>{
    console.error(err)
})

//===============async-await in JS=================================

let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise1 Resolved") 
    },1000);
})
let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise2 Resolved") 
    },2000);
})
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise3 Resolved") 
    },3000);
})
async function asyncFnc1()
{
    let result1 = await promise1
    let result2 = await promise2
    let result3 = await promise3
    console.log(result1)
     console.log(result2)
      console.log(result3)
    console.log("Hello")
}
asyncFnc1()
=================================================

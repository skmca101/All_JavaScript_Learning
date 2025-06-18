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

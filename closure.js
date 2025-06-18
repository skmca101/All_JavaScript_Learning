function outer()
{
let a = 5;
console.log(a)
function inner()
{
console.log(a) // a is from outer function
}
}

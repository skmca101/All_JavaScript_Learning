/**************List of String Program***********************//
Strings Program
1- Reverse a string with and without its rspective position
2- Find vowels and consonants
3- Reverse any specific character
4- Convert a string array into number array
5- swap two string variable without
6- Create an object array with employee keys and value and add/cut rs500 from all employee salary.
7- Find occurences of each character
8- Remove the duplicate characters 
9- Capitalize each letter of string.
10- Check two strings are Anagram or not
11- Fins the substring of strings
12- Count occurances of specific character

//**************List of String Program***********************/
Solutions:---------------------------

//Q-1 Reverse a string - i)from it's respective place  ii) Reverse complete string iii) Find vowels & consonents iv) reverse middle character

let str = "I am String";
//Inbuilt Method
let Reversed = str.split("").reverse().join()
console.log(Reversed)

//For loop
let str = "I am String";
let splitted = str.split(" ")
let reverse = ""
for(let i = splitted.length; i >0; i--)
{
	reverse = reverse + splitted[i]
}
console.log(reverse);

//while loop
let str = "I am String";
let splitted = str.split(" ");
let reverse1 = "";
let i=splitted.length-1;
while( i >=0)
{
	reverse1 = reverse1 + splitted[i]
}
console.log(reverse1);

//i)from it's respective place

let str = "I am String";
let splitted = str.split(" ");
reverse = "";
for(let i=0; splitted.length; i++)
{
	for(let j= splitted.length-1; j > 0; j++)
	{
		reverse = reverse + splitted[j]
	}
	console.log(reverse)
}
console.log(reverse);


//ii) Find vowels & consonents
let str = prompt("Enter any number to print vowels and consonants")
let vowels = "aeiouAEIOU"
let Vowelscount =0;
let Consonantscount =0;
for(let i= 0; i<str.length; i++)
{
	if(vowels.includes(str[i]))
	{
		Vowelscount++;
	}
}
console.log("Vowels are:", Vowelscount)
for(j = 0; j<str.length; j++)
{
	if(!vowels.includes(str[j]))
	{
		Consonantscount++;
	}
}
console.log("Consonants are:" , Consonantscount)

//iv) Fibbonacci in array
let FibNum = prompt("Enter number to print Fib Series");

let FibSeries = [0,1]
for(let i = 2; i<FibNum; i++)
{
FibSeries[i] = FibSeries[i-1] + FibSeries[i-2]	
}	
console.log(FibSeries)

//Fibbonacci Series using for loop using function
let fib1 = 0;
let fib2= 1;
let fibNum=6
function fibb()
{
    for(let i=0; i<fibNum; i++)
        {
            console.log(fib1);
            let next = fib1 + fib2;
            fib1 = fib2;
            fib2 = next;
        }
}
fibb();
//==================================================


//v) reverse middle character

let str = "I am String";
let str1 = str.split(" "); //["I", "am", "String"]
let rev = "";

	for(let j = str1.length-2; j>1; j--)
	{
		rev = rev + str1[j];
	}
	console.log(rev);

//In vs code - F5= for start debug and f10 for stepwise


//Find second Laargest in array.
let arr = [2,1,3,5,4,6];
largest = arr[0];
smallest = arr[0];
for(let i = 1; i < arr.length; i++)
{
	if(arr[i] > largest)
	{
		largest = arr[i]
	}
	else if(arr[i]<smallest)
	{
		smallest = arr[i]
	}

}
console.log("Largest is:" +largest)
console.log("Smallest is:" +smallest)


===================================


let arr = [2,1,3,5,4,6];
largest = arr[0];
smallest = arr[0];
let SecondLarge;
let secondSmall;

for(let i = 1; i < arr.length; i++)
{
	if(arr[i] > largest)
	{
		largest = arr[i]
	}
	else if(arr[i]<smallest)
	{
		smallest = arr[i]
	}
            
        
       
 
}
console.log("Largest is:" +largest)
console.log("Smallest is:" +smallest)

//Code for second Largest but not working
for(let j = 1; j < arr.length; j++)
            {
                if(arr[i]!== largest)
                {
                    SecondLarge = arr[i];
                }
                 else if(arr[i]!== smallest)
                      {
                        secondSmall = arr[i];
                      }
 
    
console.log("2nd Largest is:" +SecondLarge)
console.log("2nd smallest is:" +secondSmall)
//Get input from users

let num1= prompt("Enter 1st Number")
let num2= prompt("Enter 2nd Number")
let num3= prompt("Enter 3rd Number")
let num4= prompt("Enter 4th Number")
let All = [num1,num2,num3,num4]
let smallest = All[0];
let large = All[0];
let secondLarge;
let secondSmall;
// console.log(All)
for(let i=1; i<All.length; i++)
    {
      if(All[i] > large)
      {
          large = All[i]
      }
    //console.log(large);
        else if(All[i] < smallest)
        {
            smallest = All[i]
        }
		
		else if(All[i] !== large)
		{
			secondLarge = All[i]-1;
		}
		else if(All[i] !== smallest)
		{
			secondSmall = All[i]+1
		}
			

        else 
        {
            console.log("Iam inside Else block");
        }
        
    }
alert("The largest is:" +large)
alert("The smallest is :" +smallest)
alert("The Second largest is:" +secondLarge)
alert("The Second smallest is :" +secondSmall)

//Find any missing number from an array--------------------
let num = 5;
let arr = [1,3,4,5]
let actualSum = 0;
let exptdSum = 0;
for(let i=0; i<arr.length; i++)
{
	actualSum = actualSum + arr[i] //0+1, 0+1+3, 4+4, 8+5, 13+7
}
for(let j=1; j<=num; j++)
{
	exptdSum = exptdSum + j //1+2+3+4+5+6+7 =28
}


let missing = exptdSum-actualSum
console.log(missing)


//Find multiple missing number from an array--------------------
let arr = [1,3,5,7,9]
let ArrayNumLength = 9;
let MissingNumArray = [];//[2,4,6,8]
for(let i=1; i<=ArrayNumLength; i++)
{
	if(!arr.includes(i))
		MissingNumArray.push(i);
}
console.log(MissingNumArray);

//--------------------Uses of Filter Callback function in JS----------------

//Find duplicates number from an array--------------------

let arr = [1,2,3,4,5,3,4,5,1]
let repeated = arr.filter((ele,index)=>{
	return arr.indexOf(ele)!== index
	
})

console.log(repeated)
//---------Filter Understandings--------------------
const numbers = [10, 20, 30, 40, 50];

const filteredNumbers = numbers.filter((item, index) => {
  return item > 20 && index % 2 === 0;
});

console.log(filteredNumbers); // Output: [ 30, 50 ]


//-------Print count of any numbers from 1 to 100-------------
let count = 0;
for(let i = 1; i<100; i++)
{
	let newStr = i.toString();
	if(newStr.includes('9'))
	{
		count++;
	}
}
console.log(count)

//Enter any character find vowels & consonents
    let UserInput = prompt("Hi please enter any character")
    alert("For Confirmation! You have entered" +" " +UserInput)
    let vowels = 'aAeEiIoOuU';
    if(vowels.includes(UserInput))
       {
        alert("You have entered a vowels")
        }
    else if(!UserInput.includes(vowels))
            {
        alert("Hey you have enetered a consonants")
            }
        else
    {
        alert ("You have enetered nothing")
    }


//==================JS QuickTips=====================================
let a = [1,2,1,2,3,3,4,5,3,6]
let unique = [...new Set(a)] //spread operator
console.log(unique)
//====================================================================
let num = 12;
if(typeof num === 'number' && !isNaN(num))
{
console.log(num + 'is a number')
}

else

{
console.log(num + 'is not a number')
}

//==========================================================
let b =[1,2,3,false,NaN, '', 4,5, null]
let newarr = b.filter(Boolean)
console.log(newarr)


//=============================================================

let year = prompt("Enter year I will tell you it's leap or not");
if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0)
   {
    console.log(year + "is a leap year")

   }
else
{
     console.log(year + "is not a leap year")
}
//Output: 2024is a leap year


//===============================================================
//convert a string array to an integer array in JavaScript:

const stringArray = ["1", "2", "3", "4", "5"];

const integerArray = stringArray.map(Number);

console.log(integerArray); // Output: [1, 2, 3, 4, 5]

//===================================================================
//union of arrays
const a1 = [1, 2, 3];
const a2 = [3, 4, 5];
const union = [...new Set([...a1, ...a2])];
console.log(union); 
//===================================================================
//--------------swap variables without 3rd variable
let a = "ram";
let b = "sharan";
a = a.concat(b);
console.log(a)
b = a.substring(0,3);

a = a.substring(3)
console.log(a)
console.log(b)
//-------------------


//Objects Array
let employee = 
    [
        {
           "name" : "employee1",
            "salary" : 2000,
            "designation" : "Software Tester"
        },
        {
            "name" : "employee2",
            "salary" : 2500,
            "designation" : "Software Tester" 
        },
        {
            "name" : "employee3",
            "salary" : 3000,
            "designation" : "Software Tester" 
        }
        
    ];
//--------------------Using ForEach--------------	
employee.forEach((ele)=>{
//console.log(ele)
    ele.salary = ele.salary + 500;  
})
//------------------------------------------------


//--------------------Using For Loop--------------	
for(let i = 0; i< employee.length; i++)
{
	emplyee.salary = employee.salary(i) +300
}
//------------------------------------------------

//--------------------Using For of--------------	
for(let Inc of employee)
{
	Inc.salary = Inc.salary +100;
}
//------------------------------------------------
console.log(employee)

//---------setTimeout() and Try...Catch statement-------

    let smilingFaceCodePoint = String.fromCodePoint(128516);
setTimeout(()=>{
	console.log("Hacking the Sumit's Machine")
},1000)
try
    {
    console.log(credentials)
    }
catch(err)
    {
console.log("Please skip and execute", err)
   }

setTimeout(()=>{
	console.log("Fetching the Username & Password of Sumit's machine")
},2000)


setTimeout(()=>{
	console.log("Fetching....Please Wait!!!!")
},3000)

setTimeout(()=>{
	console.log("Completed Sumit's Machine Details hacked. Now you can access." +smilingFaceCodePoint);
},4000)




//--------------Add smileys face in JS--------

let smilingFaceCodePoint = String.fromCodePoint(128516);

//=======================Find Occurences in STRING===========
let str = "Welcome back in our portal";
let sortedStr = str.toLowerCase().split("").sort().join("")
console.log(sortedStr)
let NewObject = {};

for(let char of sortedStr)
{
    NewObject[char] = (NewObject[char] || 0) + 1
}
console.log(NewObject)
//==========================================================


//Q-1 Reverse any word from a string with its respective position

let str = "Hi everyone welcome in JS"
let newStr = str.split(" ")
console.log(newStr)
//Method1
let RevInbuiltMethod = str.replace("welcome","welcome".split("").reverse().join(""));
console.log(RevInbuiltMethod)

//Output - Hi everyone emoclew in JS

//Method2
for(let i=0; i<newStr.length; i++)
{
    if(newStr[i] == 'welcome')
    {
        newStr[i] =  newStr[i].split("").reverse().join("")
    }
  //newStr[i] =  newStr[i].split("").reverse().join("")
}
let result = newStr.join(" ")
console.log(result)
//Output - Hi everyone emoclew in JS

//Q. Print Vowels
let str = "Hi! everyone! your's welcome in JS"
let vowels = "aAeEiIoOuU";
let vowelsCount = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
};
for(let i = 0; i<str.length; i++)
{
    let allLowerChar = str[i].toLowerCase()
    if(vowels.includes(allLowerChar))
    {
        vowelsCount[allLowerChar]++
    }
}
console.log(vowelsCount)
//======================================
//=======Remove the dulicates character from string==========
let str = "Find the duplicate characters";
let str1 = str.toLowerCase().replace(/\s+/g,'')
console.log(str1) //findtheduplicatecharacters
let result = '';
for(let i = 0; i<str1.length; i++)
{
    let duplicate = false; //not seen add this--> result= findthe
    //console.log(duplicate)
    for(j = 0; j<result.length; j++)
    {
        if(str1[i] === result[j])
        duplicate = true;
    }
    if(!duplicate)
    {
        result = result + str1[i]
    }
}
console.log(result)
//==================capital each letter of string=============
let str = "Hi everyone I am automation engineer"
let str1 = str.toLowerCase().split(" ")

let ToCapitslEach = str1.map((word)=>
 word.charAt(0).toUpperCase()+ word.slice(1)).join(" ")

console.log(ToCapitslEach)

//==========Anagram==============
let str1 = prompt("enter first string : ")
let str2 = prompt("enter second string :")
let a = str1.replace(/\s+/g,'').toLowerCase()
let b = str2.replace(/\s+/g,'').toLowerCase();
if(a == b)
{
    console.log(`both are same : ${a} and ${b}`)
}
else if (a.length !== b.length)
{
    console.log(`both strings length are different so not possible ANAGRAM`)
}
else if(a.split('').sort().join('') === b.split('').sort().join(''))
{
   
   console.log(`${a} and ${b} String are Anagram`)
}
else
{
    console.log("not a string")
}
//===========Substring==========
function allSubstrings(str) {
  let substrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  return substrings;
}

console.log(allSubstrings("abc"));

//Without Function
let str = "abcd"
//let str2 = str.split("");
let subString = [];
for(let i = 0; i < str.length; i++)
{
  for(let j = i + 1; j<=str.length; j++)
  {
    subString.push(str.slice(i,j))
  }
}
console.log(subString)

//=========Count occurences of character==========
function countChar(str, char) {
  return str.split('').filter(c => c === char).length;
}

// Example
console.log(countChar("banana", "a")); // 3

































































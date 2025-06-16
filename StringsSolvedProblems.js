/* ========================Regular Expression and their Uses===================
1 - To remove space use RegExp i.e replace(/\s+/g, '')
2 - To remove special characters  use RegExp i.e replace([^a-zA-Z0-9\s, ''])

*/

//Q- Reverse string with its respective position
let str = "I am reversing with same index"
let str2 = str.split(" ")
let result = str2.map((word)=>word.split("").reverse().join("")).join(" ");
console.log(result)


//Q- reverse middle character of string
let str = "I am middle character to reverse"
let str2 = str.split(" ");
for(let i = 0; i<str2.length; i++)
{
    
    if(str2[i] == "middle") // if found word here
    {
      str2[i]= str2[i].split("").reverse().join("")
    }
}
let result = str2.join(" ")
console.log(result)


//Q- Find repeated chars from string
let str = "I am middle character to reverse"
let str2 = str.replace(/\s+/g,'').split("");
//console.log(str2)
let frequency = {};
for(let i =0; i<str2.length; i++)
    {
        let char = str2[i]
        frequency[char] = (frequency[char] ||0) + 1
    
}
for (let key in frequency) {
  if (frequency[key] > 1) {
    console.log(`${key}: ${frequency[key]}`);
  }
}


//Method-1
//Q- Find duplicates chars from string
let str = "I am finding the duplicates"
let str2 = str.replace(/\s+/g,'').split("")
let result = ""
for(let i = 0; i < str2.length; i++ )
{
    let LowerChar = str2[i].toLowerCase()
    let isDuplicate = false;
    for(j = 0; j<result.length; j++)
    {
        if(LowerChar.includes(result[j]))
        {
            isDuplicate = true;
        }
    }
    if(!isDuplicate)
    {
        result = result + LowerChar
    }
}

//Method-2

//Q- Find duplicates chars from string
let str = "I am finding the duplicates"
let str2 = str.toLowerCase().replace(/\s+/g,'').split("")
//console.log(str2)
let frequency = {};
let duplicate = ""
for(let i = 0; i<str2.length; i++)
{
    let char = str2[i]
    frequency[char] = (frequency[char] || 0) + 1
}
//console.log(frequency)
for(let keys in frequency)
{
    if(frequency[keys] > 1)
    {
        duplicate = duplicate + keys
    }
}
console.log(duplicate)

//Q- Remove duplicates chars from string
let str = "I am removing the duplicates"
let str2 = str.toLowerCase().replace(/\s+/g,'').split("")
let result = [...new Set(str2)].join("")
console.log(result)

//Q- Capitalize Each first chars from string
let str = "I am removing the duplicates"
let str2 = str.toLowerCase().split(" ")
//console.log(str2)
let result = str2.map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
console.log(result)

//Q- Find count of vowels and consonents from string
let str = "I am removing the duplicates"
let str2 = str.toLowerCase().replace(/\s+/g,'').split("")
console.log(str2.length)
let vowelsList = "aeiou"
let vowelsCount = 0;
let consonents = 0;
for(let i = 0; i<str2.length; i++)
{
    if(vowelsList.includes(str2[i]))
    {
        vowelsCount++
    }
    else
    {
        consonents++
    }
}
console.log(`The vowels count is: ${vowelsCount} and consonents are: ${consonents}`)
//Enter any character to find it's vowels or consonents
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

//Q. Print Vowels and consonants with characters
let str = "Hi! everyone! your's welcome in JS"
let str2 = str.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase();
let str3 = str2.replace(/\s+/g,'')
//console.log(str3)
let vowels = "aAeEiIoOuU";
let consonants = ""; 
let vowelsCount = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
};
for(let i = 0; i<str3.length; i++)
{
    let allLowerChar = str3[i].toLowerCase()
    if(vowels.includes(allLowerChar))
    {
        vowelsCount[allLowerChar]++
    }
    else
    {
      consonants= str3.replace(/[aeiou]/gi, '')
       
    }
}
console.log(vowelsCount)
console.log("The consonants are : " +consonants)

//Q- Find ASC and DESC order of characters from  string
let str = "I am removing the duplicates"
let str2 = str.toLowerCase().replace(/\s+/g,'').split("")
let str3 = str2.sort()
let desc = ""
let str4 = [...new Set(str3)]
//console.log(str4)
for(let i = str4.length-1; i>=0; i--)
{
    desc = desc + str4[i]
    
}
console.log(`string ascending without any duplication are :\n ${str4}`)
console.log(`string descending without any duplication are :n ${desc}`)

//Q- Capitalize second letter of string
let str = "I am sdet in cypress"
let str2 = str.split(" ")

let result =str2.map((word)=>word.charAt(0) + word.toLowerCase().charAt(1).toUpperCase() + word.slice(2)).join(" ")
console.log(result)

//Q- Find substring of string
//===========Substring====================
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

//Print if a string is an Anagram string
//==========Anagram===============================
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


//Q- Swap two string variable without using 3rd variable
let a = "ram";
let b = "sharan";
[a,b] = [b,a]
console.log(a,b)

//Q- remove characters except special character
let str = "remove!! special% characters    with spaces"
let str2 = str.replace(/[a-zA-Z0-9]/gi,'').trim()
console.log(str2)
//Output : !! %
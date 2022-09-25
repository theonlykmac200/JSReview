// Part One
// // A. Q + A
// How do we assign a value to a variable?
//      -using Let or Const and declaring the variable and adding the = operator and then giving it a value. var is possible to use but has challenges and is not the currently perferred 

// How do we change the value of a variable?
        // make sure you used let vs const so you can reassign it but it can be changed through a few differency ways.  You can change it be re-declaring it or changing it in the resulting actions of some other piece of code. 

// How do we assign an existing variable to a new variable?
        // declare the new variable and the assign the value of it as the existing variable. 
// Remind me, what are declare, assign, and define?
        // declare = let or const (var)
        //assign Taking idenifying variable using the assigment operator and a value
        // define = variables are defined identifiers by its entire statement.  ex: let name = "Queen Latifah"
// What is pseudocoding and why should you do it:
        //the idea of writing out the steps or instructions of what you are going to code before actually starting to code. It help because it allows you to think through the components of the code that you need and how the parts will fit together/
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    // I would think this is a pretty subjective question.  Personally I think it should be at leasta quarter to half of the time if you are doing it right.  Of course this also depends on the complexity of the built.  But understanding the scope will make the actual build much easier. 

// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
let firstVariable = "Hello World"
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
firstVariable = 25;
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariableto any string.
secondVariable = "coding is fun"
// What is the value of firstVariable?
console.log(secondVariable)

// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

const yourNameand = "Kelly McDonald"
console.log("Hello my name is " + yourNameand)


//C. Booleans

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
 let animal = "cow"
// Write code that will print out "mooooo" if the it is equal to cow
if (animal === "cow"){
    console.log("mooooo")
}else{
    console.log("Hey! You're not a cow.")
}
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
let ageOfTeen = 17
// Write code that will print out "Here are the keys!", if the age is 16 years or 
// older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (ageOfTeen >= 16) {
    console.log("Here are the Keys!")
}else if 
    (ageOfTeen < 16) {
        console.log("Sorry, you're too young.")
    }

    // II. Loops
    // Remember: USE letwhen you initialize your for loops!
    
    // This is GOOD: for(let i = 0; i < 100; i++)
    
    // This is NO GOOD: for(i = 0; i < 100; i++)
    
// A The Basics 

let crapes = 0
for (crapest = 0; crapes < 11; crapes +=1)
    console.log(crapes)

let hashbrowns = 10
for (hashbrowns = 10; hashbrowns < 401; hashbrowns +=1)
    console.log(hashbrowns)


let third = 12
for (third = 12; third < 4000; third +=3)
    console.log(third)

    // B. Get Even

let tomatoes = 1
for (tomatoes = 1; tomatoes < 101; tomatoes +=1)
    console.log(tomatoes)

let tom = 1
for (tom = 1; tom < 101; tom +=1) {
    if (tom % 2 == 0) {
        console.log(`${tom} <-- is an even number`);
    }else{
         console.log(tom)
    }
}

// **************come back to this one to see if you can make it into an interger.

//C Give ME Five 

for (let i = 1; i<=100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i + ` I found a ${i} High Five! Three is a crowd.`)
    } else if (i % 5 === 0) {
        console.log(i + ` I found a ${i} High Five!`)
    } else if (i % 3 === 0) {
        console.log(i +` I found a ${i} Three is a Crowd!`)
    }
    else 
        console.log(i)
}
// *************** come back and make this one an interger

// D. Savings Account 

let bankaccount = 0
for ( let i=1; i<= 10; ++i) {
        bankaccount += i;
    }
    console.log(bankaccount)


    let bonusbaby = 0
for ( let i=1; i<= 100; ++i) {
        bonusbaby += i * 2;
    }
    console.log(bonusbaby)

// PART THREE Arrays & Control Flow

// A. Talk About it:

// Q. What are the things in an array called?  
// A. elements

// Q. Do Arrays guarantee those things will be in order?
// A. Nope

// Q. What real-life thing could you model with an array?
 //A. a christmas gift list for my family members.

 // B. Easy Does it:
 
 let quotes = ["'My Life is My Message'- Mahatma Gandhi", "'Never Regret Anything That Made you Smile'-Mark Twain", "'Life isn't about finding yourself. Life is about creating yourself.'- George Bernard Shaw"]

 //C. Accessing Elements
 console.log(quotes)

 const randomThings = [1, 10, "Hello", true]

 console.log(randomThings[0]);

 randomThings[2] = "World"

 console.log(randomThings);

 // D. Change Values

 const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github",]

 console.log(ourClass[2]);
 
 ourClass[4] = "Octocat"

 console.log(ourClass);
 ourClass.push("Cloud City")
 console.log(ourClass)

// E. MIx it Up

const myArray = [5, 10, 500, 20]

myArray.push("Egon", "NancyDrew")
myArray.shift()
myArray.unshift("Bob Marley")
myArray.pop()
console.log(myArray)
myArray.reverse()
console.log(myArray)

// I'm not sure I did this right as I think that myArray.reverse() is different that myArray.prototype.reverse() or maybe its Array.prototype.reverse() I tried both of those and it returned errors but the documentation from mozilla makes me thing maybe I'm wrong. but if I'm correct than yes it flipped it around. 

// F. Biggie Smalls

let dogs = 4

if (dogs < 100) {
    console.log("little number")
}else{
    console.log("Big Number")
}

// G. Monkey in the Middle

let monkey = 7

if (monkey < 5) {
    console.log("little number")
}else if (monkey > 10) {
    console.log("Big Number")
} else
    console.log("monkey")

// H. What's in your Closet

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log("Kristyn is rocking that " + kristynsCloset[2] + " Today!")

  kristynsCloset.splice(6, 0, "raybans")
console.log(kristynsCloset)
kristynsCloset.splice(5, 1, "stained knit hat")
console.log(kristynsCloset)

console.log(`Thom is looking fierce in a  ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and a ${thomsCloset[2][1]}.`)

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset)


// Part IV Functions

// A. PrintGreeting

// Its a freebee :)

// B. printCool

let printCool = function(name) {
        console.log(`${name} is cool`);
    }
    printCool("Rachael");

//C. CalculateCube

let calculateCube = function(number) {
    console.log(number ** 3)
}
calculateCube(3)

// D. isVowel

let isVowel = function(letter) {
    
    if (letter.toLowerCase() === "a") {
        console.log(true)
    }else if (letter.toLowerCase() === "e"){
        console.log(true)
    }else if (letter.toLowerCase() === "i"){
            console.log(true)
        }else if(letter.toLowerCase() === "o"){
                console.log(true)
            }else if(letter.toLowerCase() === "u"){
                    console.log(true)
                }else if(letter.toLowerCase() === "y"){
                        console.log(true)
                    }else
                    console.log(false)

}
isVowel("a")
isVowel("c")
isVowel("Y")

// E. getTwoLengths


let getTwoLengths = function(length1, length2) {
        length =[length1.length, length2.length]
        console.log(length)
}

getTwoLengths("NancyDrew", "EncyclopediaBrown")


// F. getMultipleLengths

let getMultipleLengths = function(array) {
        let almostDone = [];
        for (let i = 0; i < array.length; i++) {
            almostDone.push(array[i].length);
        }
        return almostDone;
    }
    
    console.log(getMultipleLengths(["NancyDrew", "EncyclopediaBrown", "8", "best friends"]));

// G. maxofThree


let maxOfThree = function(numOne, numTwo, numThree) {
    let max = 0;
    if (numOne >= numTwo && numOne >= numThree) {
        max = numOne;
    } else if (numTwo >= numOne && numTwo >= numThree) {
        max = numTwo;
    } else if (numThree >= numOne && numThree >= numTwo) {
        max = numThree;
    }
    return max;
}
console.log(maxOfThree(6, 9, 1));
console.log(maxOfThree(6, 9, 9));
console.log(maxOfThree(3, 3, 3));
console.log(maxOfThree(75, 23, 0));

// H. printLongestWord

let printLongestWord = function(arrayOfWords) {
    let longest = arrayOfWords[0];
    for (let i =0; i < arrayOfWords.length; i++) {
        if(arrayOfWords[i].length > longest.length) {
            longest = arrayOfWords[i]
        }
    }
    return longest
}
console.log(printLongestWord(["NancyDrew", "EncyclopediaBrown", "8", "best friends", "administratorship"]));

// Part V Objects

// A. Make a user object

let user = {
    name: "Kelly McDonald",
    age: 42,
    email: "kelly@kyndoo.com",
    purchased: [],
};

//B update the user

user.email = "kelly@cipio.ai"
user.age++;
console.log(user.age)

//C. adding keys and values 
user.location = "Foster City"
console.log(user)

// D. shopaholic!
user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")

console.log(user)

console.log(user.purchased[2])

// E. Object -within -object

user.friend = {
    name: "Amy Mink",
    age: 42,
    location: "Palm Springs",
    purchased: [],

};

console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age =55;
console.log(user.friend.age)
user.friend.purchased.push("The One Ring")
console.log(user.friend)
user.friend.purchased.push("a latte")
console.log(user.friend.purchased[1])

// F. Loops

for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i])
}


for (let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i])
}

updateUser = function() {
    user.age++;
    user.name =user.name.toUpperCase()
}
updateUser()
console.log(user)

oldAndLoud = function(person) {
    user.age++;
    user.name =user.name.toUpperCase()
}

oldAndLoud(user)
console.log(user)
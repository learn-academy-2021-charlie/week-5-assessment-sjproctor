// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// Create a function - secretCoderRing
// Parameter - string
// String matching - aka regex, .replace


// a) Create a test with an expect statement using the variables provided.

describe("secretCoderRing", () => {
  it("takes in a string and returns a coded message", () => {
    var secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    var secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    var secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(secretCoderRing(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(secretCoderRing(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(secretCoderRing(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// b) Create the function that makes the test pass.

// With regex:
// const secretCoderRing = (string) => {
//   return string
//     .replace(/a/ig, 4)
//     .replace(/e/ig, 3)
//     .replace(/i/ig, 1)
//     .replace(/o/ig, 0)
// }

// With replaceAll:
// const secretCoderRing = (string) => {
//   return string.replaceAll("a", 4).replaceAll("A", 4).replaceAll("e", 3).replaceAll("E", 3).replaceAll("i", 1).replaceAll("I", 1).replaceAll("o", 0).replaceAll("O", 0)
// }

// With map:
const secretCoderRing = (string) => {
  return string.split("").map(value => {
    if(value === "a" || value === "A"){
      return 4
    } else if(value === "e" || value === "E"){
      return 3
    } else if(value === "i" || value === "I"){
      return 1
    } else if(value === "o" || value === "O") {
      return 0
    } else {
      return value
    }
  }).join("")
}


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// Function - aReturnStatement
// Parameter - array
// Iteration - filter
// IndexOf looking for a or A

// a) Create a test with an expect statement using the variable provided.

describe("aReturnStatement", () => {
  it("returns all the words that contain the letter a", () => {
    var arrayofwords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    // Expected output: ["Apple", "Banana", "Orange"]
    var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    // Expected output: ["Mango", "Apricot", "Peach"]
    expect(aReturnStatement(arrayofwords1)).toEqual(["Apple", "Banana", "Orange"])
    expect(aReturnStatement(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
  })
})

// b) Create the function that makes the test pass.

// IndexOf:
// const aReturnStatement = (array) => {
//   return array.filter(value => value.indexOf("a") !== -1 || value.indexOf("A") !== -1)
// }

// Includes:
// const aReturnStatement = (array) => {
//   return array.filter(value => value.includes("A") || value.includes("a"))
// }

// Regex:
const aReturnStatement = (array) => {
  return array.filter(value => value.match(/a/gi))
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// Function - fullHouse
// Parameter - array
// Created an empty object
// Iteration - for loop, conditional that updates the key if the value matches
// Conditional - how many key value pairs, if the value is 2 and 3

// a) Create a test with an expect statement using the variable provided.

describe("fullHouse", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
    var hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    var hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    var hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

// b) Create the function that makes the test pass.

// const fullHouse = (array) => {
//   let counts = {}
//   for(let i=0; i<array.length; i++){
//     if(counts[array[i]]){
//       counts[array[i]] += 1
//     } else {
//       counts[array[i]] = 1
//     }
//   }
//   if(Object.keys(counts).length === 2){
//     if(Object.values(counts).includes(3) && Object.values(counts).includes(2)){
//       return true
//     }
//   }
//   return false
// }

const fullHouse = (array) => {
  let count = {}
  array.forEach(value => {
    count[value] = (count[value] || 0) + 1
  })
  let values = Object.values(count)
  if((values[0] === 2 && values[1] === 3) || (values[1] === 2 && values[0] === 3)){
    return true
  } else {
    return false
  }
}

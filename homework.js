// Question 1

const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

// console.table(shopItems)
const shopping = (list) => {
    for (i=0; i < list.length; i++) {
        delete list[i].id
        console.table(list[i])
    }
}

console.log(shopping(shopItems))

// Question 2
const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// console.log(hwPerson.shakes instanceof Array)

// const peopleFoods = (obj) => {
//     for(let [k, v] of Object.entries(obj)) {
//         console.log(`${k}:${v}`)
//     }if(typeof k === typeof obj){
//         for(let [b,c] of Object.entries(obj)){
//             console.log(`${b}:${c}`)
//         }
//     }
    // for(let [w, v2] of Object.entries(obj.values)) {
    //     console.log(`${w} : ${v2}`)
    // }
    // clg
// } 

console.log(peopleFoods(hwPerson))

const iterateThroughList = function(anyList) {
    for (let key in anyList){
        console.log(`${key} contains:`)
        if (Array.isArray(anyList[key])){
            for (let example of anyList[key]){
                if (typeof example === "object"){
                    iterateThroughList(example)
                }
                else {
                    console.log(`       ${example}`)
                }
            }
        }
        else if (typeof anyList[key] === "object"){
            iterateThroughList(anyList[key])
        }
        else{
            console.log(`       ${anyList[key]}`)
        }
    }
}

iterateThroughList(hwPerson);

// Question 3
/* Create a Promised based function that will check a string to determine if it's length is greater than 10.

If the length is greater than 10 then resolve it and console log "Big word". 

If the length of the string is less than 10 then reject it and  console log "Small String" */

const checkIfGreaterThan10 = (str) => {
    return new Promise((resolve, reject) => {
        if(str.length > 10){
            resolve('Big word')
        } else {
            reject('Small String')
        }
    })
}

console.log(checkIfGreaterThan10('This String is a test'))

//Question 4
/* Create a base class of GameMember and 2 children classes of Dealer, Player

both dealer and player have:

hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers

hit() : ability to add  a random number [1-13] to their hand

When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)

When a Player hits they can hit as long as their total is under 21

Use the randomNumber function provided below to gernerate a random number 1-12 */

class GameMember{
    constructor(name, age){
        this.name = name
        this.age = age
        this.hand = []
    }

    hit() {
        for(c in this.hand){
            sum = this.hand.reduce(0, c)
           if (sum < 17) {
            this.hand.push(Math.random(13))
           }
        }
    }
}

class Dealer extends GameMember {
    constructor(name, age) {
        super(name, age, this.hand)
    }
    play() {
        this.hand.push(Math.random(13))
        this.hand.push(Math.random(13))

    }

    hit() {
        for(c in this.hand){
            sum = this.hand.reduce(0, c)
           if (sum < 17) {
            this.hand.push(Math.random(13))
           }
        }
    }
}
    
class Player extends GameMember {
    constructor(name, age) {
        super(name, age, this.hand)
    }

    play() {
        this.hand.push(Math.random(13))
        this.hand.push(Math.random(13))

    }

    hit() {
        
        for(c in this.hand){
            sum = this.hand.reduce(0, c)
           if (sum < 21) {
            this.hand.push(Math.random(13))
           }
        }
    }
}

// Question 5
/* Quest1: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// # Examples:

// # spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// # spinWords( "This is a test") => returns "This is a test"
// # spinWords( "This is another test" )=> returns "This is rehtona test" */
function spinWords(str){
    newStr = str.split(' ')
      emptyStr = []
      for (let s= 0; s < newStr.length; s++){
          if (newStr[s].length >= 5){
              emptyStr.push(newStr[s].split('').reverse().join(''))
          } else {
              emptyStr.push(newStr[s])
          }
      }
      return emptyStr.join(' ')
  }

  /* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */
function reverseWords(str) {
    // Go for it
    var newStr = str.split(' ')
    newArr = []
    for(let i = 0; i < newStr.length; i++) {
      newArr.push(newStr[i].split('').reverse().join(''))
    }
    return newArr.join(' ')
  }
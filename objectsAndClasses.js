const person = {
    firstname: "Jennifer",
    lastname: "Kash",
    favoriteColor: "blue",
}

person.hasCars = true
// console.log(person["hasCars"])


const {firstname: nickname, lastname: surname, favoriteColor: bestColor} = person


// console.log(nickname)
// console.log(surname)
// console.log(bestColor)

// console.log(person.firstname)
// console.log(person["lastname"])
// const color = "favoriteColor"

// console.log(person[color])

const meal = {
    appetizer: "bread-oil-brie",
    entree: "salmon",
    dessert: "flan",
    drink: "moscow mule",
}

// console.log("Before Deletion")
// console.log(meal)

// delete meal.entree 

// console.log("After Deletion")
// console.log(meal)




// for (plate in meal){
//     console.log(`The key is ${plate} and the value is ${meal[plate]}`)
// }



// let {dessert} = meal
// console.log(dessert)

// // let snack = "appetizer"
// // console.log(meal[snack])

// let {appetizer, entree} = meal 
// let {drink: beverage} = meal


// console.log(appetizer)
// console.log(entree)
// console.log(beverage)

class Dog {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }
    greeting() {
        console.log(`Hello, I am ${this.name} the ${this.breed} and I am ${this.age}`)
    }
}

class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel){
        super(name, breed, age)
        this.trainingLevel = trainingLevel
    }
    piddle(){
        console.log(`${this.name} has peed on the floor`)
    }
    levelUp(num) {
        this.trainingLevel += num
    }
}

let adamFriedland = new Puppy("adamFriedland", "bug", 3, 10)
console.log(adamFriedland)
adamFriedland.greeting()
adamFriedland.piddle()
adamFriedland.levelUp(6)
console.log(adamFriedland.trainingLevel)

let larryDavid = new Dog("larryDavid", "Jewish", 68)
let JerrySeinfeld = new Dog("Jerry", "comedian", 59)

// console.log(larryDavid.name)
// larryDavid.greeting()
// JerrySeinfeld.greeting()

for (attr in larryDavid) {
    console.log(larryDavid[attr])
}


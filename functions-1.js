let jonSnowHealth=100;

// string converter
// jonSnowHealth= 100 + ''
// console.log(jonSnowHealth)
jonSnowHealth= String(jonSnowHealth)
// console.log(jonSnowHealth)

let theWinnerIs= "jamie is the winner"

// saving to a lower case
let newwinner= theWinnerIs.toLowerCase().replace("jamie", "Jon Snow").toUpperCase();
console.log(newwinner)
console.log(theWinnerIs)

//convert-string-to-kebab-case <---- kebab case 
// convert to lower case

// newwinner=newwinner.toLowerCase().replaceAll(" ","-")
// let newWinnerLower = newWinner.toLowerCase()
// let newWinnerSplit = newWinnerLower.split(' ')
// let newWinnerKebab = newWinnerSplit.join('-')
// Minified by chaining commands

let newwinnerKebab=newwinner.toLowerCase().split(" ").join("-")

console.log(newwinner + `-----------` + newwinnerKebab)

// functions
// lets create a function that will check to see if jon is alive

function isJonAlive(){
    if(jonSnowHealth>0){
        console.log(`Jon is alive!`)
    }else {
        console.log(`RIP Jon Snow`)
    }

}

isJonAlive()

// lets create for attacking jon

function attackingJon(attack){
    jonSnowHealth-=attack
    isJonAlive()
    console.log(jonSnowHealth)

}



attackingJon(40)
attackingJon(30)
attackingJon(30)

// create a function that allows two people great each other

function greating(nameOne,nameTwo){
console.log(`${nameOne} and ${nameTwo} say hello to each other `)
}
greating('Dj','Hamzah')
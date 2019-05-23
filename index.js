
let dwarves = ["Doc", "Dopey", "Grumpy", "Bashful"]
function dwarfRollCall(dwarves) {
  let response = ""
  for (i = 0; i < dwarves.length; i++) {
  // response += (i+1 + "." + dwarves[i])
   response += `${i+1}.${dwarves[i]}`
  }
  return response
}
console.log(dwarfRollCall(dwarves))

let planeteerCalls = ["earth", "wind", "fire", "water", "heart"]
function summonCaptainPlanet(planeteerCalls){
  let updatedCall = []
  for (i = 0; i < planeteerCalls.length; i++) {
    updatedCall.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return updatedCall
}
console.log(summonCaptainPlanet(planeteerCalls))


function longPlaneteerCalls(words) {
  for (i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true
    }
  }
  return false
}
let veggies = ["carrot","watermelon","cheddar","gouda"]
let cheeses = ["cheddar", "gouda", "camembert"]

function findTheCheese (foods) {
  for (let j = 0; j <foods.length; j++) {
    for (let i = 0; i <cheeses.length; i++) {   
      if (foods[j] === cheeses[i]) {
        return foods[j]
      }   
    }   
  }
  return "no cheeses!"  
}    




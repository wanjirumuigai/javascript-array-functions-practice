const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
 const allNames = characters.map(item => item.name)
 console.log(allNames)
//2. Get array of all heights
const allHeight = characters.map(item => item.height)
console.log(allHeight)
//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map(item => [item.name, item.height])
console.log(nameAndHeight)
//4. Get array of all first names
const firstName = characters.map(function (item) {
    splitName = item.name.split(' ')
    return splitName[0]
})
console.log(firstName)

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce(function (acc,cur){
return acc + cur.mass
},0)
console.log(totalMass)

//2. Get total height of all characters
const totalHeight = characters.reduce((acc,cur)=>{
return acc + cur.height
},0)
console.log(totalHeight)
//3. Get total number of characters by eye color
const totalNumber = characters.reduce((acc,cur) => {
   const color = cur.eye_color
   if (acc[color]) {
    acc[color] ++;

   } else {
    acc[color]=1;
   }
   return acc
}, {})
console.log(totalNumber)
//4. Get total number of characters in all the character names
const totalNoCharacters = characters.reduce((acc,cur) => {
return acc + cur.name.length
},0)
console.log(totalNoCharacters)

//***FILTER***
//1. Get characters with mass greater than 100
const massGreaterThan = characters.filter(item => { return item.mass>100})
console.log(massGreaterThan);
// //2. Get characters with height less than 200
const height100Less = characters.filter(item => item.height <200 )
console.log(height100Less)
// //3. Get all male characters
const maleCharacters = characters.filter(male => male.gender ==='male')
console.log(maleCharacters)
// //4. Get all female characters
const femaleCharacters = characters.filter(female => female.gender ==='female')
console.log(femaleCharacters)

//***SORT***
//1. Sort by mass
const sortbyMass = characters.sort((a,b) => a.mass - b.mass)

console.log(sortbyMass)
//2. Sort by height
const sortbyHeight = characters.sort((a,b) => a.height - b.height)
console.log(sortbyHeight)
//3. Sort by name
const sortbyName = characters.sort((a,b) => {
    if (a.name < b.name) {
        return -1;
    } else {
        return 1;
    }
})
console.log(sortbyName)
//4. Sort by gender
const bygender = characters.sort((a,b) => {
    if (a.gender === 'female') return -1;
    return 1;
})
console.log(bygender)

//***EVERY***
//1. Does every character have blue eyes?

 const allBlueEyes = characters.every(item => item.eye_color ==='blue')
 console.log(allBlueEyes) 
//2. Does every character have mass more than 40?
const massMore40 = characters.every(item => item.mass > 40)
console.log(massMore40)
//3. Is every character shorter than 200?
const shorterThan200 = characters.every(item => item.height < 200)
console.log(shorterThan200)
//4. Is every character male?
const allMale = characters.every(item => item.gender === 'male')
console.log(allMale)

//***SOME***
//1. Is there at least one male character?
const atleastMaleChar = characters.some(item => item.gender==='male')
console.log(atleastMaleChar)
//2. Is there at least one character with blue eyes?
const atleastBlueEyes = characters.some(item => item.eye_color === 'blue')
console.log(atleastBlueEyes)
//3. Is there at least one character taller than 210?
const atleastTaller210 = characters.some(item => item.height > 210)
console.log(atleastTaller210)
//4. Is there at least one character that has mass less than 50?
const atleastMassLess50 = characters.some(item => item.mass<50)
console.log(atleastMassLess50)

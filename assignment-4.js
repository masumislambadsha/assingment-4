function totalFine(fare) {

if (fare === 0 || fare < 0 || typeof fare != 'number') {

return "Invalid"

}

const fine = fare + fare * (20 / 100) + 30
return fine

}
const total_Fine = totalFine(200)
console.log(total_Fine)

function onlyCharacter(str) {

if (typeof str != 'string') {

return "Invalid"

}

const characters = str.split(' ').join('').toUpperCase();

return characters

}
const only_Character = onlyCharacter("  h e llo wor   ld")
console.log(only_Character)

function bestTeam(player1, player2) {

const firstTeam = player1.foul+player1.cardY+player1.cardR

const secondTeam = player2.foul + player2.cardY + player2.cardR

if (typeof player1 != 'object' || typeof player2 != 'object') {

return "Invalid"

}

if (firstTeam < secondTeam) {

return player1.name

}

else if (firstTeam > secondTeam) {

return player2.name

}

else if (firstTeam === secondTeam) {

return 'Tie'

}

}
const best_Team = bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 })
console.log(best_Team)


function isSame(arr1, arr2) {

if (Array.isArray(arr1) != true || Array.isArray(arr2) == false) {

return "Invalid"

}

for (const item1 of arr1) {

for (const item2 of arr2) {

if (arr1[item1] === arr2[item2] && arr1.length == arr2.length) {

return true

}

else {

return false

}

}

}

}
const is_Same = isSame([1, 2, 3], [1, 2, 3])
console.log(is_Same)
 
function resultReport(marks) {

if (Array.isArray(marks) != true) {

return "Invalid"

}

let totalMark = 0

let passCount = 0

let failCount = 0

let subjects = marks.length

for (const mark of marks) {

totalMark += mark

if (mark >= 40) {

passCount++

}

else {

failCount++

}

}

let avgScore = Math.round(totalMark / subjects)

if (isNaN(avgScore)) {

avgScore = 0

}

const student = {

finalScore : avgScore ,

pass : passCount ,

fail : failCount

}

return student


}
const result_Report = resultReport([])
console.log(result_Report)


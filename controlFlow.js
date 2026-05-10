
const PI = 3.1415;
const plantRadius = 5;
const Area = PI *plantRadius*plantRadius; 

let minPlantSpace = 0.8;
const startingPlants = 20;

let plants1 = startingPlants;
plants1 = plants1 * 2;
    console.log('Plants Week 1: ', plants1)

plants2 = plants1 * 2;
    console.log('Plants Week 2: ', plants2)

plants3 = plants2 * 2;
    console.log('Plants Week 3: ', plants3)

const maxPlants = Area / minPlantSpace;
console.log('Capacity: ', maxPlants); 

const eightyPercentOfMax = maxPlants * 0.8
console.log('80% of Capacity: ', eightyPercentOfMax);



// Week 1

let percent1 = (plants1 / maxPlants);
console.log('% of Total Capacity: ', percent1);

 if (percent1 > 0.8){ 
    console.log("Action:Pruned");
 }
 else if (percent1 >= 0.5 && percent1 <= 0.8) {
    console.log("Action:Monitored");
 }
 else {
    console.log("Action:Planted");
}

//Week 2
let percent2 = (plants2 / maxPlants);
console.log('% of Total Capacity: ', percent2);

 if (percent2 > 0.8){ 
    console.log("Action:Pruned");
 }
 else if (percent2 => 0.5 || percent2 <= 0.8) {
    console.log("Action:Monitored");
 }

 else {
    ("Action:Planted");
}

// Week 3
let percent3 = (plants3 / maxPlants);
console.log('% of Total Capacity: ', percent3);

 if (percent3 > 0.8){ 
    console.log("Action:Pruned");
 }
 else if (percent3 => 0.5 || percent3 <= 0.8) {
    console.log("Action:Monitored");
 }

 else {
    ("Action:Planted");
}

console.log('Part 2: Thinking Bigger')

let startingMorePlants = 100; 
const weekOne = startingMorePlants * 2; 
const weekTwo = weekOne * 2; 
const weekThree = weekTwo * 2; 
const weekFour = weekThree * 2; 
const weekFive = weekFour * 2; 
const weekSix = weekFive * 2;
const weekSeven =  weekSix * 2;
const weekEight =  weekSeven * 2;
const weekNine =  weekEight * 2; 
const weekTen = weekNine * 2;
console.log('Plants Week 10: ', weekTen)

const requiredAreaSpace = weekTen * minPlantSpace;
console.log('Total Required Area: ', requiredAreaSpace)

const additionalSpaceRequired = requiredAreaSpace - eightyPercentOfMax;
console.log ('Additonal Space Required: ', additionalSpaceRequired)

const newRadius = Math.sqrt(requiredAreaSpace / PI);
console.log('New Radius: ', newRadius)

console.log ('Part 3: Errors in Judgement');

const requiredSpace = startingMorePlants * minPlantSpace;

if (requiredAreaSpace > Area); {
    throw new Error("Not Enough Space For Plants in the Garden.");
}
console.log("There is Enough Space for Plants.");

console.log("Modified .JS content")
console.log("Part 3 Modified")

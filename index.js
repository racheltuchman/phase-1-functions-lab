// Code your solution in this file!
let ft = 264
let HQ = 42

function distanceFromHqInBlocks (someValue) {
return Math.abs(someValue - HQ)
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(blocks) {
    let difference = distanceFromHqInBlocks(blocks);
    return difference * ft
}
distanceFromHqInFeet();


  
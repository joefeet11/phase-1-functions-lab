// Code your solution in this file!
function distanceFromHqInBlocks (block) {
    return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
   return distanceFromHqInBlocks(block)* 264;
}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start-destination))*264;
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination)<= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination)<=2000) {
        
        return (distanceTravelledInFeet(start,destination)-400)*0.02;

    } else if (distanceTravelledInFeet(start, destination)<= 2500){
        return 25;
    } else {
        return 'cannot travel that far'
    }
}
calculatesFarePrice(43,48)
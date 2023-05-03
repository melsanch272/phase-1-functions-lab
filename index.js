// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const headquaters = 42
    return Math.abs(someValue - headquaters)
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return ((destination - start)*264);
    } 
    else
        return ((start - destination)*264);
    
}

function calculatesFarePrice(start, destination) {
    const travel = distanceTravelledInFeet(start, destination);
    if ( travel< 400) {
        return 0
    }
    else if (travel> 400 && travel <= 2000) {
        return (travel-400)*.02
    }
    else if (travel > 2000 && travel <= 2500) {
        return 25
    }
    else if (travel > 2500) {
        return 'cannot travel that far'
    }

}
const drivers = ["Sally", "Bob", "Freddy", "Claudia"]

function returnFirstTwoDrivers(drivers){ 
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers){ 
    return drivers.slice(2,4);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a){
    return (function(fare){
        return fare * a;
    })
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
}
function produceDrivingRange(range) {
  return function(beginningLocation, endingLocation) {
    let beginning = parseInt(beginningLocation);
    let end = parseInt(endingLocation);
    let travelDistance = Math.abs(beginning - end);
    let difference = range - travelDistance;
    
    if(difference > 0){
      return `within range by ${difference}`;
    } else {
      return `${Math.abs(difference)} blocks out of range`;
    }
  };
}

function produceTipCalculator() {
  
}

function createDriver() {

}
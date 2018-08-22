function produceDrivingRange(range) {
  return function(beginningLocation, endingLocation) {
    let beginning = parseInt(beginningLocation)
    let end = parseInt(endingLocation)
    let travelDistance = Math.abs(beginning - end)
    let difference = travelDistance - range;
    
    if(difference > 0){
      return ""
    }
  }
}

function produceTipCalculator() {
  
}

function createDriver() {

}
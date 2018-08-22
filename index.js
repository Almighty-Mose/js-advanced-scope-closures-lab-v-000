function produceDrivingRange(range) {
  return function(beginningLocation, endingLocation) {
    let beginning = parseInt(beginningLocation)
    let end = parseInt(endingLocation)
    let distance = Math.abs(beginning - end)
    let difference = distance - range;
    if(distance <= range) {
      return ""
    }
  }
}

function produceTipCalculator() {
  
}

function createDriver() {

}
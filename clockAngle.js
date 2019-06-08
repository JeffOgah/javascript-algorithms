let minuteAngle, hourAngle, timeAngle;

function clockAngle(time) {
  let timeStr = String(time); 
  let timeHr = Number(timeStr.substring(0,1)); //extract hour
  let timeMin = Number(timeStr.substring(2,4)) //extract min

  if (timeMin > 0) {
    //angle between two minutes = 6 degrees
    minuteAngle = timeMin * 6; //to get angle from 12
  
    //angle between 2 hours = 30 degrees
    hourAngle = (timeHr * 30) + (timeMin/60 * 30); //get angle since hour hand is between 2 numbers
  
    timeAngle = Math.abs(minuteAngle - hourAngle);
  }
  else {
    timeAngle = hourAngle = timeHr * 30;
  }
 
  return timeAngle;
}

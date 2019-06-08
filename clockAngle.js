let minuteAngle, hourAngle, timeAngle;

function clockAngle(time) {
  let timeStr = String(time); 
  let timeHr = Number(timeStr.substring(0,1)); //extract hour
  let timeMin = Number(timeStr.substring(2,4)); //extract min

  //angle between two minutes = 6 degrees
  minuteAngle = timeMin * 6; //to get angle from 12

  //angle between 2 hours = 30 degrees
  //get hour angle from 12 and account for extra degree according to minute
  hourAngle = (timeHr * 30) + (timeMin/60 * 30);

  timeAngle = Math.abs(minuteAngle - hourAngle);
  
  return timeAngle;
}

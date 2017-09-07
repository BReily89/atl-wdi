// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function (timerValue) {
    let numericDisplay = document.getElementById("numeric-display");
    // set current value to display
    // assign timerValue
    numericDisplay.textContent = timerValue;
    // at 10 seconds, change color to red, increase size by 5% per second, round to 2 decimals
    if (timerValue <= 10) {
      numericDisplay.style.color = "red";

      // increase font size by 5% every second starting when switches to 10 and round to 2 decimals
      let newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2);

      // tell code to use new size
      numericDisplay.style.fontSize = newSize + "em";


    }
    drawProgressBars: function(numericDisplay) {
      drawProgressBars: function(timerValue) {
        // The progress bar is a rectangle (with class progress-bar) inside the element with id progress-bars. As the timer counts down from 100 to 0, the progress bar should expand its width from 0% to 100% of the width of its parent element, the progress-bars component. The function responsible for implementing this is drawProgressBars(timerValue).

        // calculate how much time has elapsed
        let timeElapsed = 100 - timerValue;
        // set width to change as time elapses
      }
   document.getElementsByClassName('progress-bar')[0].style.width = timeElapsed + "%";
      
    
    drawLitFuses: function(timerValue) {
     
     // extract both files to show corresponding amounts burnt, btoth positive and negative
     //
      document.getElementsByClassName('unburnt')[0].style.width = percentUnburnt*98 + '%';
      document.getElementsByClassName('burnt')[0].style.width = (1 - percentUnburnt)*98 + '%';
     var percentUnburnt = timerValue/100;
       var numFuses = document.getElementsByClassName('fuse').length; 
      for (var i = 0; i < numFuses; i++){
        document.getElementsByClassName('unburnt')[i].style.width = percentUnburnt*98 + '%';
         document.getElementsByClassName('burnt')[i].style.width = (1 - percentUnburnt)*98 + '%';
        }

        //with the variable created 100% each second tics down, the fuse burns and there will be a corresponding 'burnt space' on the other side
        //the div takes up 1% of space on either side so you'll need to account for 98% of the width instead of 100%
      },
    drawCrawlers: function(timerValue) {
      // Your Code Here
    }
  };

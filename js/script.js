/**
 * @author 
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

/**
 *
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal. 
 * Choose a heart-touching track! 🎵 ❤️
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */
$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Hi');
});

// Set the date we're counting down to
var countDownDate = new Date("Aug 10, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
   // document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 29th Nov, 2020!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Vinit Shahdeo', styles1, styles2);

console.log(
    `%cShaadi me zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)

 // Set the start time (August 7th, 12:30 PM)
 var startTime = new Date("August 7, 2024 12:30:00").getTime();

 function updateTimer() {
   var now = new Date().getTime();
   var timeElapsed = now - startTime;

   var days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
   var hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

   document.getElementById('days').innerText = days;
   document.getElementById('hours').innerText = hours;
   document.getElementById('minutes').innerText = minutes;
   document.getElementById('seconds').innerText = seconds;
 }

 setInterval(updateTimer, 1000);
 updateTimer(); // initial call to set the timer immediately

 //popup
 // script.js

// Show the pop-up
function showPopup() {
  const popup = document.getElementById('feedback-popup');
  const sound = document.getElementById('notification-sound');
  
  // Play notification sound
  sound.play();

  // Show the pop-up
  popup.style.display = 'flex';

  // Hide the pop-up after 5 seconds
  setTimeout(() => {
    popup.style.display = 'none';
  }, 2000);
}

// Share feedback on WhatsApp
document.getElementById('share-button').addEventListener('click', function() {
  const message = encodeURIComponent('I would like to share my feedback!');
  const whatsappUrl = `https://wa.me/919943093556?text=Your%20Message%20Here`;
  
  // Open WhatsApp
  window.open(whatsappUrl, '_blank');

  // Optionally, hide the pop-up if needed
  document.getElementById('feedback-popup').style.display = 'none';
});

// Display the pop-up when the page loads
window.onload = function() {
  showPopup();
};

//popup

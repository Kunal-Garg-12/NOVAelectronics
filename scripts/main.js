//Carousel interval change to 2.5s

const adsCarousel = document.querySelector('#carousel_intro_ads')
const carouselAds = new bootstrap.Carousel(adsCarousel, {
  interval: 2500,
  pause: false,
})

const audioCarousel = document.querySelector('#carousel_audio')
const carouselAudio = new bootstrap.Carousel(audioCarousel, {
  interval: 2500,
  pause: false,
})

function changepic(og, new_img, button, para){
  var pic = document.getElementById(og);
  pic.src = "images/main_page_images/Coupons/"+new_img;
  document.getElementById(button).disabled = true;
  document.getElementById(para).style.visibility = "visible";
}

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})



// Run myfunc every second
var myfunc = setInterval(function() {

var date = new Date();

var s = date.getSeconds();
var m = date.getMinutes();
var h = date.getHours();
// Calculating the days, hours, minutes and seconds left
var hours = 24-h;
var minutes = 60-m;
var seconds = 60-s;
    
// Result is output to the specific element
document.getElementById("hours").innerHTML = hours + "h " + minutes + "m " + seconds + "s "
    
// Display the message when countdown is over
}, 1000);


setInterval(function time(){
  var d = new Date();

  var days = 7 - d.getDay();
  var hours = 24 - d.getHours();
  var sec = 60 - d.getSeconds();
  var min = 60 - d.getMinutes();

  jQuery('#coupons p').html("Expires in: " + days+'d '+hours+'h '+min+'m '+sec+'s')

}, 1000);
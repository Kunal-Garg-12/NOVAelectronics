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

function changepic(og, new_img, button){
  var pic = document.getElementById(og);
  pic.src = "main_page_images/Coupons/"+new_img;
  document.getElementById(button).disabled = true;
}
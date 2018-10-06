const mq = window.matchMedia( "(min-width: 500px)" );

if (mq.matches) {
  $('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    mode: 'fade',
    loop: true,
    slideMove: 1,
    slideMargin: 0,
    auto: true,
    speed: 600,
    pause: 5000,
    pauseOnHover: true,
    thumbItem: 6,
    galleryMargin: 1,
    enableDrag: false,
    autoWidth:false,
    currentPagerPosition: 'left',
    onSliderLoad: function(el) {
      el.lightGallery({
        selector: '#lightSlider .lslide',
        mode: 'lg-fade',
        counter:true,
        html:true 
      });
    }
  });
 } else {
    $('#lightSlider').lightSlider({
      gallery: true,
      item: 1,
      mode: 'fade',
      loop: true,
      slideMove: 1,
      slideMargin: 0,
      auto: true,
      speed: 600,
      pause: 5000,
      pauseOnHover: true,
      thumbItem: 6,
      galleryMargin: 1,
      enableDrag: false,
      autoWidth:false,
      currentPagerPosition: 'left',
    });
  }



/*
  * Open the drawer when the menu ison is clicked.
  */
var menu = document.querySelector('#hamburger-menu');
var main = document.querySelector('#page-container');
var drawer = document.querySelector('#menu-bar');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});
main.addEventListener('click', function() {
  drawer.classList.remove('open');
});



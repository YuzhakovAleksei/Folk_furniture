const actionButton = document.querySelector('.action');
const actBlock = document.querySelector('.action__block');
if (actionButton){
  actionButton.addEventListener("click", function(e) {
    actBlock.classList.toggle('_active');
  });
}

// if (burger){
//     // Создаём событие click по иконке
//     burger.addEventListener("click", function(e) {
//       burger.classList.toggle('_active');
//       mobileMenu.classList.toggle('_active');
//     });
//   }

const swiperPages = new Swiper('.image-slider', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return 'фото <span class="' + currentClass + '"></span>' +
      ' из ' +
      '<span class="' + totalClass + '"></span>';    }
    },

  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  autoHeight: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: true,
  slidesPerColumn: 1,
  loopedSlides: 1,
  freeMode: false,
  speed: 300,

});


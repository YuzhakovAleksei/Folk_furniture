const actionButton = document.querySelector('.action');
const mobActionButton = document.querySelector('#mob_action');
const actBlock = document.querySelector('.action__block');
const burger = document.querySelector('.burger');

if (actionButton && mobActionButton){
  // console.log(1)
  actionButton.addEventListener("click", function(e) {
    actBlock.classList.toggle('_active');
    actionButton.classList.toggle('_active');
  });
  mobActionButton.addEventListener("click", function(e) {
    actBlock.classList.toggle('_active');
    mobActionButton.classList.toggle('_active');
  });
}

// if (mobActionButton){
//   mobActionButton.addEventListener("click", function(e) {
//     actBlock.classList.toggle('_active');
//   });
// }



// return

const return_btn = document.querySelector('.return');

window.addEventListener('scroll', eventScroll);

function eventScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    return_btn.classList.add('return_show');
  }
  if (scrolled < coords) {
    return_btn.classList.remove('return_show');
  }
};

// if (burger){
//     // Создаём событие click по иконке
//     burger.addEventListener("click", function(e) {
//       burger.classList.toggle('_active');
//       mobile Menu.classList.toggle('_active');
//     });


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


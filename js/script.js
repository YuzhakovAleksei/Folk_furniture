// Создаём объект iconMenu из класса .menu__icon (иконка бургер)
const actionButton = document.querySelector('.action');
const actBlock = document.querySelector('.action__block');
// const burger = document.querySelector('.burger');
// const mobileMenu = document.querySelector('.mobile-menu__container');
// Делаем проверку, есть ли такой класс
if (actionButton){
  // Создаём событие click по иконке
  actionButton.addEventListener("click", function(e) {
    actBlock.classList.toggle('_active');
    // console.log(actBlock)
    // создаём переключение, добавляем класс _active к .menu__body (nav)
    // arrow.classList.toggle('_active');
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
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    // el: '.swiper-pagination',
    // параметр el это класс обьекта куда будет размещаться пагинация
  //   el: '.pagination-place',
    el: '.swiper-pagination',

    // clickable: true,

    // динамические булеты
    // dynamicBullets: true,

    // выводит номер слайда на каждом буллете
    // renderBullet: function (index, className){
    //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    // }

    // показывает цифрами текущий/всего
    type: 'fraction',

    // показывает положение слайда прогрессбаром
  //   type: 'progressbar',

    // добавляет к fraction слова "фото", "из", вывод: "фото 1 из 12"
    renderFraction: function (currentClass, totalClass) {
      return 'фото <span class="' + currentClass + '"></span>' +
      ' из ' +
      '<span class="' + totalClass + '"></span>';    }
    },

  // Navigation arrows, тут можно указать любые классы не
  // только swiper-button-next/prev, можно выбрать другие классы объектов
  // которые будут исполнять роль стрелок вперёд-назад.
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },



  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',

  //   // возможность перетаскивать скролл
  //   draggable: false,
  // },

  // включение/отключение:
  // перетаскивания на ПК
  simulateTouch: true,

  // чувствительность свайпа, чем выше значение тем больше
  // перемещается слайдов за одно движение мыши
  touchRatio: 1,

  // угол срабатывания свайпа/претаскивание
  touchAngle: 45,

  // курсор перетаскивания
  grabCursor: true,

  // управление клавиатурой
  keyboard: {
    // включить/выключить
    enabled: true,

    // только когда слайдер в пределах вьюпорта
    onlyInViewport: true,

    //включить\выключить управление клавишами PageUp/PageDown
    pageUpDown: true,
  },

  // управление колесом мыши
  // mousewheel: {

  //   //чувствительность
  //   sensitivity: 1,

  //   // класс обьекта на котором будет срабатывать прокрутка мышью
  //   eventsTarget: ".pages__image-slider"
  // },

  // слайдер будет подстраиваться по высоту слайда true
  autoHeight: false,

  // показ количества слайдов за раз, можно указывать дробные числа.
  slidesPerView: 1,

  // расстояние между слайдами
  // spaceBetween: 200,

  // колличество слайдов пролистывает за раз
  slidesPerGroup: 1,

  // активный слайд по центру
  centeredSlides: true,

  // Начальный слайд, нумерация с 0.
  // initialSlide: 3,

  slidesPerColumn: 1,

  // для циклической прокрутки, ставит дубли, чтобы не было пустоты
  loopedSlides: 1,

  // слайдеры не фиксируются, можно прокручивать как ленту
  freeMode: false,

  // autoplay: {
  //   // задержка
  //   delay: 1000,

  //   // остановиться на последнем слайде
  //   stopOnLastSlide: true,

  //   disableOnInteraction: false,
  // },

  speed: 300,

  // // эффект, по умолчанию slide.
  // effect: 'fade',
  // // дополнение к fade
  // fadeEffect: {
  //   // параллельная смена прозрачности
  //   crossFade: false,
  // }

  // effect: 'flip',
  // // дополнение к flip
  // flipEffect: {
  //   // тень
  //   slideShadows: false,

  //   // показ только активного слайда
  //   limitRotation: false,
  // }

  // // эффект потока
  // effect: 'coverflow',
  // // дополнение к coverflow
  // coverFlowEffect: {
  //   rotate: 20,
  //   stretch: 50,
  //   slideShadows: true,
  // },

  // // адаптив брекпоинты
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   480: {
  //     slidesPerView: 2,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   }
  // },

});


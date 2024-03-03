$(function () {


   const deviceWidth = window.innerWidth;
   // открытие меню по клику на бургер /  скрытие по клику на ссылку
   if (deviceWidth < 992) {
      $('.menu').addClass('disable');
      $('.article-filters').addClass('disable');
      $('.header__filter-mobile').removeClass('disable');
      $('.menu__burger').removeClass('disable');
      $('.article-filters__btn').removeClass('disable');
      $('.menu__burger, .menu__item').on('click', function () {
         $('.header__inner').toggleClass('header--active');
         $('.menu').toggleClass('disable');

         $('main').toggleClass('disable');
      })
   };


   //В мобильной версии страницы каталога фильтры появляются при нажатии на кнопку
   $('.header__filter-mobile').on('click', function () {
      $('.article-filters').addClass('article-filters--mobile-active');
      $('.article-filters').removeClass('disable');
      $('.top').addClass('disable');
      $('.article').addClass('disable');
      $('.article-list').addClass('disable');
      $('.article-slider').addClass('disable');
   });

   //Поиск по фильтрам по нажатию на одну из кнопок
   function searchByFilter() {
      $('.article-filters').removeClass('article-filters--mobile-active');
      $('.article-filters').addClass('disable');
      $('.top').removeClass('disable');
      $('.article').removeClass('disable');
      $('.article-list').removeClass('disable');
      $('.article-slider').removeClass('disable');
   }
   $('.filter-search__btn').on('click', searchByFilter);
   $('.article-filters__btn').on('click', searchByFilter);



   //Кастомизация активного пункта меню
   $('.menu a').each(function () {
      var location = window.location.href;
      var link = this.href;
      if (location == link) {
         $('.menu a').removeClass('menu__link--active');
         $(this).addClass('menu__link--active');
      }
   });

   //Вывод сообщений при нажатии на кнопки
   function removeMessage() {
      document.querySelector('div').remove();
   };

   function subscribeMessage() {
      const message = document.createElement('div');
      message.innerHTML = "Вы успешно подписаны на блог";
      message.style.cssText = `
      background-color: #581e46ea;
      border: 1px solid #581e46;
      font-family: "Roboto Regular",sans-serif;
      font-weight: 400;
      font-size: 16px;
      text-transform: uppercase;
      color: #fff;
      position: fixed;
      text-align: center;
      padding: 20px;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 5;
      `
      $('.header').before(message);
      setTimeout(removeMessage, 2000);
   }
   function sendMessage() {
      const message = document.createElement('div');
      message.innerHTML = "Ваше сообщение успешно отправлено";
      message.style.cssText = `
      background-color: #581e46ea;
      border: 1px solid #581e46;
      font-family: "Roboto Regular",sans-serif;
      font-weight: 400;
      font-size: 16px;
      text-transform: uppercase;
      color: #fff;
      position: fixed;
      text-align: center;
      padding: 20px;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 5;
      `
      $('.header').before(message);
      setTimeout(removeMessage, 2000);
   }
   $('.footer__form-btn').on('click', subscribeMessage);
   $('.contact__btn').on('click', sendMessage);


   //Пагинация
   $('.pagination__link').on('click', function () {
      $('.pagination__link').removeClass('pagination__link--active');
      $(this).addClass('pagination__link--active');
   })

   //кастомизация слайдера на главной станице
   $('.pre-slider__inner').slick({
      autoplay: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
   });
   //кастомизация слайдера на главной станице
   $('.article-slider__inner').slick({
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 500,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }

      ]
   });
});
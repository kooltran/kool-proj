import 'owl.carousel';

export default class Homepage {
  constructor(globals) {
    this.$homeCarousel = $('.js-homepage-carousel');
    this.$prodCountDown = $('.js-prod-countdown');
    this.$prodDays = $('.js-prod-days');
    this.$prodHours = $('.js-prod-hours');
    this.$prodMins = $('.js-prod-mins');
    this.$prodSecs = $('.js-prod-secs');
    this.$prodCarousel = $('.js-prod-carousel');
    this.$window = globals.$window;
  }

  homeCarousel() {
    this.$homeCarousel.owlCarousel({
      items: 1,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });
  }

  productCarousel() {
    this.$prodCarousel.owlCarousel({
      nav: true,
      margin: 10,
      loop: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        1200: {
          items: 4,
        },
        1024: {
          items: 3,
        },
        768: {
          items: 2,
        },
        480: {
          items: 2,
        },
        320: {
          items: 2,
        },
      },
    });
  }

  productCountDown() {
    const countDownDate = new Date('Dec 15, 2017 11:30:00').getTime();
    const countDown = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      if (days < 10) {
        days = `0${days}`;
      }
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if (hours < 10) {
        hours = `0${hours}`;
      }
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      if (distance >= 0) {
        this.$prodDays.html(days);
        this.$prodHours.html(hours);
        this.$prodMins.html(minutes);
        this.$prodSecs.html(seconds);
      } else {
        clearInterval(countDown);
      }
    });
  }

  static init(globals) {
    const homepage = new Homepage(globals);

    homepage.homeCarousel();
    homepage.productCountDown();
    homepage.productCarousel();

    return homepage;
  }
}

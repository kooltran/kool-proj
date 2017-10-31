import 'owl.carousel';
import '../../../../node_modules/countdowntimer/dist/js/jQuery.countdownTimer';

export default class Homepage {
  constructor() {
    this.$homeCarousel = $('.js-homepage-carousel');
    this.$prodCountDown = $('.js-prod-countdown');
    this.$prodDays = $('.js-prod-days');
    this.$prodHours = $('.js-prod-hours');
    this.$prodMins = $('.js-prod-mins');
    this.$prodSecs = $('.js-prod-secs');
  }

  homeCarousel() {
    this.$homeCarousel.owlCarousel({
      items: 1,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });
  }

  productCountDown() {
    const countDownDate = new Date('Nov 1, 2017 16:50:25').getTime();
    const countDown = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.$prodDays.html(days);
      this.$prodHours.html(hours);
      this.$prodMins.html(minutes);
      this.$prodSecs.html(seconds);
    });
  }

  static init() {
    const homepage = new Homepage();

    homepage.homeCarousel();
    homepage.productCountDown();

    return homepage;
  }
}

export default class Feature {
  constructor(globals) {
    this.$btnAdd = $('.btn-add');
    this.$btnMinus = $('.btn-minus');
    this.$quantumText = $('.quantum-text');
  }

  quantumProduct() {
    this.$btnAdd.click(() => {
      const currVal = +this.$quantumText.val();
      const max = +this.$quantumText.attr('max');
      this.$quantumText.val(currVal >= max ? max : currVal + 1);
    });

    this.$btnMinus.click(() => {
      const currVal = +this.$quantumText.val();
      const min = +this.$quantumText.attr('min');
      this.$quantumText.val(currVal <= min ? min : currVal - 1);
    });
  }

  initThumbCarousel() {
    const $thumbs = $('.thumbs-owl-carousel');
    const $contents = $('.content-owl-carousel');
    $thumbs.each((i, v) => {
      const $thumb = $(v);
      const $content = $contents.eq(i);

      // put the class current on first element
      $thumb.on('initialized.owl.carousel', () => {
        // TODO: why not just using the .active class put by owl carousel ?...
        $thumb.find('.owl-item').eq(0).addClass('current');
      });

      $thumb.on('click', '.owl-item', (e) => {
        e.preventDefault();
        const index = $(e.currentTarget).index();
        $content.trigger('to.owl.carousel', [index, 300, true]);
      });

      $content.on('changed.owl.carousel', (e) => {
        $thumb.trigger('to.owl.carousel', [e.item.index, 300, true]);
        $thumb.find('.owl-item')
          .removeClass('current')
          .eq(e.item.index)
          .addClass('current');
      });

      // Init the thumbs owl carousel
      $thumb.owlCarousel({
        items: 5,
        nav: true,
        dots: false,
        loop: false,
        responsiveRefreshRate: 100,
      });

      // Init content owl carousel
      $content.owlCarousel({
        items: 1,
        nav: true,
        loop: false,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveRefreshRate: 200,
      });
    });
  }

  initElevateZoom() {
    $('.has-zoom').elevateZoom();
  }

  static init(globals) {
    const feature = new Feature(globals);

    feature.quantumProduct();
    feature.initThumbCarousel();
    // feature.initElevateZoom();

    return feature;
  }
}

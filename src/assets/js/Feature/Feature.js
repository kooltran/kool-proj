import '../../../../node_modules/lightbox2/dist/js/lightbox';
import '../../../../node_modules/jquery-validation/dist/jquery.validate';

export default class Feature {
  constructor() {
    this.$btnAdd = $('.js-btn-add');
    this.$btnMinus = $('.js-btn-minus');
    this.$quantumText = $('.js-quantum-text');
    this.$thumbsProdCarousel = $('.js-thumbs-owl-carousel');
    this.$contentProdCarousel = $('.js-content-owl-carousel');
    this.$formValidate = $('.js-form-validate');
    this.$toggleMobileSubMenu = $('.js-toogle-submenu-mobile');
    this.$toggleMobileMenu = $('.js-toggle-menu-mobile');
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
    this.$thumbsProdCarousel.each((i, v) => {
      const $thumb = $(v);
      const $content = this.$contentProdCarousel.eq(i);

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
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
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

  initValidateForm() {
    this.$formValidate.each((v, form) => {
      $(form).validate({
    		submitHandler: function(form) {
    			form.submit();
    		}
      });
    });

    $.extend($.validator.messages, {
      required: 'Vui lòng điền thông tin vào',
      email: 'Vui lòng nhập đúng email',
      number: 'Vui lòng nhập đúng số điện thoại',
    });
  }

  initToggleMenuMobile() {
    this.$toggleMobileSubMenu.click((e) => {
      const $parentLevel1 = $(e.currentTarget).parent();
      if ($parentLevel1.hasClass('active')) {
        $parentLevel1.removeClass('active');
      } else {
        $parentLevel1.addClass('active');
      }
    });

    this.$toggleMobileMenu.click((e) => {
      const $parent = $(e.currentTarget).parents('body');
      $parent.addClass('slide-menu-mb');
      $parent.find('.mb-menu-mask').click(() => {
        $parent.removeClass('slide-menu-mb');
      });
    });
  }

  static init(globals) {
    const feature = new Feature(globals);

    feature.quantumProduct();
    feature.initThumbCarousel();
    feature.initValidateForm();
    feature.initToggleMenuMobile();

    return feature;
  }
}

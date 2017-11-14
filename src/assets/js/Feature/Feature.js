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
    this.$fbLikeAuto = $('.js-jacking_fb');
    this.$btnBackMbMenu = $('.js-btn-back-mn');
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
      const $currentItem = $(e.currentTarget);
      const $parentLevel1 = $currentItem.parent();
      this.$btnBackMbMenu.show();
      $parentLevel1.addClass('active');
      const hasMega = $currentItem.parent('.has-mega');
      const hasSub = $currentItem.parent('.has-sub');
      if (hasMega.length === 0) {
        this.$btnBackMbMenu.attr('data-submenulevel2', true);
      }
      if (hasSub.length === 0) {
        this.$btnBackMbMenu.attr('data-submenulevel2', false);
      }
      this.$btnBackMbMenu.attr('data-submenuleve1', true);
    });

    this.$btnBackMbMenu.click((e) => {
      const $currentItem = $(e.currentTarget);
      const $currentParentMenu = $currentItem.parents('.mega-menu');
      const dataHasSubLevel2 = $currentItem.attr('data-submenulevel2');
      if (dataHasSubLevel2 === 'true') {
        $currentParentMenu.find('.has-sub').removeClass('active');
        $currentItem.attr('data-submenulevel2', false);
      } else {
        $currentParentMenu.find('.has-mega').removeClass('active');
        this.$btnBackMbMenu.attr('data-submenuleve1', false);
        $currentItem.hide();
      }
    })

    this.$toggleMobileMenu.click((e) => {
      const $parent = $(e.currentTarget).parents('body');
      $parent.addClass('slide-menu-mb');
      $parent.find('.mb-menu-mask').click(() => {
        $parent.removeClass('slide-menu-mb');
      });
    });
  }

  initJackingLike() {
    let Xcord = 0;
    let Ycord = 0;
    let IE = document.all ? true : false;

    if (!IE) document.captureEvents(Event.MOUSEMOVE);

    const lbox = document.createElement('iframe');
    lbox.src = 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FOrio-Coffee-1752292028330148%2F&width=58&layout=button&action=like&size=small&show_faces=false&share=false&height=65&appId';
    lbox.scrolling = 'no';
    lbox.frameBorder = 0;
    lbox.allowTransparency = 'true';
    lbox.style.border = 0;
    lbox.style.overflow = 'hidden';
    lbox.style.cursor = 'pointer';
    lbox.style.position = 'absolute';
    lbox.style.top = 0;
    lbox.style.opacity = 1;

    this.$fbLikeAuto.append(lbox);

    function mouseMove(e) {
      if (IE) {
        Xcord = event.clientX + document.body.scrollLeft;
        Ycord = event.clientY + document.body.scrollTop;
      } else {
        Xcord = e.pageX;
        Ycord = e.pageY;
      }

      if (Xcord < 0) Xcord = 0;
      if (Ycord < 0) Ycord = 0;

      lbox.style.top = `${Ycord - 8}px`;
      lbox.style.left = `${Xcord - 25}px`;

      return true;
    }

    // window.addEventListener('mousemove', mouseMove, false);
  }

  static init(globals) {
    const feature = new Feature(globals);

    feature.quantumProduct();
    feature.initThumbCarousel();
    feature.initValidateForm();
    feature.initToggleMenuMobile();
    feature.initJackingLike();

    return feature;
  }
}

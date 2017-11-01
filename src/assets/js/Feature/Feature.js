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

  static init(globals) {
    const feature = new Feature(globals);
    
    feature.quantumProduct();

    return feature;
  }
}

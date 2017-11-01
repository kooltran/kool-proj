import $ from 'jquery';
import 'bootstrap';
import Homepage from './Homepage';


const init = () => {
  const GLOBALS = {
    $window: $(window),
    $doc: $(document),
    breakpoints: {
      sm: 768,
      md: 992,
      lg: 1200,
    },
  };

  Homepage.init(GLOBALS);
};

$(() => {
  init();
});

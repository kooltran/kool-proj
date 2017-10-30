import $ from 'jquery';
import 'bootstrap';
import TodoList from './todo';


const init = () => {
  const GLOBALS = {
    $window: $(window),
    $body: $('body'),
    $doc: $(document),
    breakpoints: {
      sm: 768,
      md: 992,
      lg: 1200,
    },
  };

  TodoList.init();
};

$(() => {
  init();
});

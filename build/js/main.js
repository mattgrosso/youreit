(function() {
  'use strict';


  $('.options').on('click', function toggleOptions() {
    $('.options').toggleClass('options-open').toggleClass('options-closed');
  });

  $('.tag-button').on('click', function tagSomeone(event) {
    event.stopPropagation();
    console.log('This is a flag');
  });

})();

//# sourceMappingURL=main.js.map
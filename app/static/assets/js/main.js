//TODO ajax calls
//TODO onbuttonclicks

// get DOM elements
const $viewBtn = $('.view-btn');
const $addBtn = $('.add-btn');


$viewBtn.on('click', function() {
  //go to recipes page
  $.ajax({
    // TODO MAYBE DIFFERENT
    url: '/api/recipes/all',
    dataType: 'json',
    type: 'GET'
  }).then(function(response) {
    
  });
});

$addBtn.on('click', function() {
  //go to forms page
});

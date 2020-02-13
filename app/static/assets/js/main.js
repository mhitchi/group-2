$(document).ready(function(){
  //TODO ajax calls
  //TODO onbuttonclicks

  // get DOM elements
  const $viewBtn = $('.view-btn');
  const $addBtn = $('.add-btn');

  $viewBtn.on('click', function() {
    // console.log("getting recipes");
    // //go to recipes page
    // $.ajax({
    //   // TODO MAYBE DIFFERENT
    //   // url: 'http://localhost:8080/recipes',
    //   url: 'http://localhost:8080/recipes',
    //   method: 'GET'
    // }).then(function(response) {
    //   console.log(response)
    // });
  });

  $addBtn.on('click', function() {
    //go to forms page
  });
})
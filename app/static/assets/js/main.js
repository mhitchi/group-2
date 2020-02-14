$(document).ready(function(){
  //TODO ajax calls
  //TODO onbuttonclicks

  // get DOM elements
  const $name = $('#nameInput');
  const $mainAlc = $('.alcohol-item');
  const $ing1 = $('#ing1');
  const $ing2 = $('#ing2');
  const $ing3 = $('#ing3');
  const $ing4 = $('#ing4');
  const $ing5 = $('#ing5');
  const $ing6 = $('#ing6');
  const $instructions = $('#instructionsInput');
  const $addBtn = $('.add-recipe-btn');
  let alcName = "";

  $mainAlc.on('click', function() {
    alcName = this.id;
  });

  $addBtn.on('click', function() {
    //get main alc id
    console.log('clicked add');
    //get ingredient val
    //post recipe to db
  });
})
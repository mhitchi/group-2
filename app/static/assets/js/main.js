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
  let newRecipe = {};

  $mainAlc.on('click', function() {
    alcName = this.id;
  });

  // $addBtn.on('click', function() {
  //   //get main alc id
  //   console.log('clicked add');
  //   //get ingredient val
  //   //post recipe to db
  // });

  $addBtn.on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("click");

    let mainAlcohol = $(".alcohol option:selected").text();
    console.log("You have selected" + mainAlcohol); 
  
    let newRecipe = {
      name: $("#nameInput").val().trim(),
      main_alc: mainAlcohol,
      main_oz: $("#mainOz").val(),
      ing1: $("#ing1").val(),
      ing2: $("#ing2").val(),
      ing3: $("#ing3").val(),
      ing4: $("#ing4").val(),
      ing5: $("#ing5").val(),
      ing6: $("#ing6").val(),
      instructions: $("#instructionsInput").val()
    };
    console.log(newRecipe);
    
    //get ingredient val
    //post recipe to db
    $.ajax({
      url: 'http://localhost:8080/api/recipes',
      method: 'POST',
      data: {
        newRecipe
      }
    }).then(function(response) {
      console.log(response);
      console.log("adding recipe");
    });
  })
    
})
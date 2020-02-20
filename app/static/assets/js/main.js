$(document).ready(function(){
  //TODO ajax calls
  //TODO onbuttonclicks

  // get DOM elements
  const $name = $('#nameInput');
  const $mainAlc = $('.alcohol-item');
  const $instructions = $('#instructionsInput');
  const $addBtn = $('.add-recipe-btn');

  $mainAlc.on('click', function() {
    alcName = this.id;
  });

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
      url: '/api/recipes',
      method: 'POST',
      data: {
        newRecipe
      }
    }).then(function(response) {
      console.log(response);
      console.log("adding recipe");
    });
  })

  $("#searchAlcBtn").on("click", function(event) {
    event.preventDefault();
    let searchAlc = $(".alcoholSearch option:selected").text();
    $("#view").load("/recipes/"+searchAlc);

    $.ajax({
      url: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchAlc,
      method: 'GET',
    }).then(function(response) {
      const img = $(".card-img");
      img.attr("src", response.drinks[0].strDrinkThumb);
    });

  })
})
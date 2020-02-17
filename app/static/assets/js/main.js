$(document).ready(function(){
  //TODO ajax calls
  //TODO onbuttonclicks

  // get DOM elements
  const $name = $('#nameInput');
  const $mainAlc = $('.alcohol-item');
  const $instructions = $('#instructionsInput');
  const $addBtn = $('.add-recipe-btn');
  let alcName = "";
  let newRecipe = {};
  let searchedAlcohol = [];
  let _drinks =[];

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
    drinkImg();
  })

  $("#searchAlcBtn").on("click", function(event) {
    event.preventDefault();
    searchedAlcohol = [];

    console.log("click");

    let searchAlc = $(".alcoholSearch option:selected").text();
    console.log(searchAlc);

    
    $.ajax({
      url: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchAlc,
      method: 'GET',
    }).then(function(response) {
      _drinks = response.drinks;
      // console.log(response);
      for(let i=0; i<_drinks.length; i++){
        // console.log(_drinks);
        searchedAlcohol.push(_drinks[i].strDrinkThumb);
      }
      console.log(searchedAlcohol);
      const img = $(".card-img");
      img.attr("src", searchedAlcohol[0]);
    });


  })

    
})
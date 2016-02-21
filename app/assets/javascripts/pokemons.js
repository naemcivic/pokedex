// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('ready page:load', function (){
  // list
  $.getJSON('pokemons', function(data) {
    console.log(data);

    var source = $('#pokemons-template').html();
    var template = Handlebars.compile(source);

    var output = template(data);
    // $("div")
    $('#pokemons-container').html(output);


  // detail
    $('.pokemon > a').on('click', function(e) {
      e.preventDefault();

      $.ajax({
        url: $(this).attr('href'),
        type: 'GET',
        dataType: 'json',
        success: function(data){
          if (data) {
            console.log(data);

            var source = $('#pokemon-template').html();
            var template = Handlebars.compile(source);

            var output = template(data);
            $('#pokemon-details').html(output);
          }
        }
      });
    });
  });
});

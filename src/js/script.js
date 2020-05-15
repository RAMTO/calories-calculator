// Variables
var $form1 = $('#form1');
var $gramsProtein = $('[name="gramsProtein"]');
var $gramsCarbs = $('[name="gramsCarbs"]');
var $gramsFats = $('[name="gramsFats"]');

// Functions
function handleFormSubmit(e) {
  e.preventDefault();

  var $this = $(this);
  var totalCalories = parseInt($('[name="totalCalories"]').val().trim(), 10);
  var percProtein = parseInt($('[name="percProtein"]').val().trim(), 10);
  var percCarbs = parseInt($('[name="percCarbs"]').val().trim(), 10);
  var percFats = parseInt($('[name="percFats"]').val().trim(), 10);

  var calsFromProtein = (percProtein / 100) * totalCalories;
  var gramsProtein = calsFromProtein / 4;

  var calsFromCarbs = (percCarbs / 100) * totalCalories;
  var gramsCarbs = calsFromCarbs / 4;

  var calsFromFats = (percFats / 100) * totalCalories;
  var gramsFats = calsFromFats / 9;

  renderGrams({ gramsProtein, gramsCarbs, gramsFats });
}

function renderGrams({ gramsProtein, gramsCarbs, gramsFats }) {
  $gramsProtein.val(gramsProtein);
  $gramsCarbs.val(gramsCarbs);
  $gramsFats.val(gramsFats);
}

// Bind events & init plugins
$(document).ready(function () {
  $form1.on('submit', handleFormSubmit);
});

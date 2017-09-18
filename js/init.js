(function($){
  $(function(){

    $('.button-collapse').sideNav();

  });
})(jQuery);

$(document).ready(function(){
  $('.carousel').carousel();
});

$(document).ready(function(){
  $('.modal').modal();
});

$('.datepicker').pickadate({
  selectMonths: true,
  selectYears: 15,
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: false
});

$('.timepicker').pickatime({
  default: 'now',
  fromnow: 0,
  twelvehour: true,
  donetext: 'OK',
  cleartext: 'Clear',
  canceltext: 'Cancel',
  autoclose: false,
  ampmclickable: true,
  aftershow: function(){} 
});

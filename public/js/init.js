(function($){
  $(function(){

    $('.button-collapse').sideNav();

  });
})(jQuery);

+function isNew() {
   if ( sessionStorage.getItem('isNew') === null) {
     sessionStorage.setItem('isNew', true)
     analytics.track('SessionStart', {sessionID:uuid()})
   }
 }
 
isNew()

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

$(document).ready(function() {
  $('select').material_select();
});

$(document).ready(function() {
   Materialize.updateTextFields();
 });

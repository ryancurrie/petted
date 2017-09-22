(function($){
  $(function(){

    $('.button-collapse').sideNav();

  });
})(jQuery);

function isNew() {
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

window.localLinkClicked = false;

window.addEventListener('click', function(event){
   if (event.target.tagName.toLowerCase() === 'a') {
     window.localLinkClicked = true;
   }
 })

window.onbeforeunload = function () {
   if (window.localLinkClicked !== true) {
     cartAbandon()
   }
 }

function cartAbandon() {
  if (window.location.pathname === '/doctors.html' || '/pet.html' || '/appointment.html' || '/profile.html') {
    analytics.track('CartAbandon', {
      userVet: localStorage.getItem('userVet'),
      userFirstName: localStorage.getItem('userFirstName'),
      userLastName: localStorage.getItem('userLastName'),
      userEmail: localStorage.getItem('userEmail'),
      userPhone: localStorage.getItem('userPhone'),
      userZip: localStorage.getItem('userZip'),
      userAddress: localStorage.getItem('userStreetAddress'),
      userPetName: localStorage.getItem('userPetName'),
      userPetSpecies: localStorage.getItem('userPetSpecies'),
      PetBreed: localStorage.getItem('userPetBreed'),
      PetAge: localStorage.getItem('userPetAge'),
      appointmentDate: localStorage.getItem('userDate'),
      appointmentTime: localStorage.getItem('userTime')
    })
  }
}

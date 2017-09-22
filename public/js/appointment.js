var $appointment = document.querySelector('#appointment')
var $next = document.querySelector('#appointment-next')

$next.addEventListener('click', function(event) {
  var $userDate = document.querySelector('#date').value
  var $userTime = document.querySelector('#time').value
  if ($userDate !== '' && $userTime !== '') {
    localStorage.setItem('userDate', $userDate)
    localStorage.setItem('userTime', $userTime)
    analytics.track('SelectedDate', {dateDesired:$userDate})
    analytics.track('SelectedTime', {timeDesired:$userTime})
    window.location.href = 'pet.html'
  }
  else {
    Materialize.toast('Please select a date and time.', 4000, 'pink lighten-2 pulse')
  }
})

analytics.track('BookingViewedAppointment')

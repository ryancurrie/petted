var validZips = ['12345', '11223', '54321']

function search(zip) {
  for (var i = 0; i < validZips.length; i++) {
    if (zip === validZips[i]) {
      window.location.href = 'doctors.html'
      return
    }
    else {
      window.location.href = 'sorry.html'
    }
  }
}

function getUserZip() {
  var userZip = document.querySelector('#zip').value
  return userZip
}

var $checkZip = document.querySelector('#hero-search-button')

$checkZip.addEventListener('click', function(event) {
  event.preventDefault()
  search(getUserZip())
})

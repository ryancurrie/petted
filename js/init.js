(function($){
  $(function(){

    $('.button-collapse').sideNav();

  });
})(jQuery);

var validZips = [12345, 11223, 54321]

function search(zip) {
  for (var i = 0; i < validZips.length; i++) {
    if (zip === validZips[i]) {
      window.location.href = 'doctors.html'
    }
    else {
      return 'Fail'
      /* window.location.href = 'sorry.html' */
    }
  }
}

var userZip

function getUserZip() {
  userZip = document.querySelector('#zip').value
  return userZip
}


document.querySelector('#hero-search-button').addEventListener('click', search(getUserZip()))

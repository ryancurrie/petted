var states = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY']

function userInfo() {
  var $userInfo = document.createElement('div')

  var $form = document.createElement('form')
  $form.classList.add('col','s12')

  var $nameRow = document.createElement('div')
  $nameRow.classList.add('row')

  var $firstNameDiv = document.createElement('div')
  $firstNameDiv.classList.add('input-field','col','s12','l6')

  var $firstNameInput = document.createElement('input')
  $firstNameInput.classList.add('validate')
  $firstNameInput.setAttribute('id', 'first-name')
  $firstNameInput.setAttribute('type', 'text')

  var $firstNameLabel = document.createElement('label')
  $firstNameLabel.setAttribute('for', 'first-name')
  $firstNameLabel.textContent = 'First Name'

  var $lastNameDiv = document.createElement('div')
  $lastNameDiv.classList.add('input-field','col','s12','l6')

  var $lastNameInput = document.createElement('input')
  $lastNameInput.classList.add('validate')
  $lastNameInput.setAttribute('id', 'last-name')
  $lastNameInput.setAttribute('type', 'text')

  var $lastNameLabel = document.createElement('label')
  $lastNameLabel.setAttribute('for', 'last-name')
  $lastNameLabel.textContent = 'Last Name'

  var $streetRow = document.createElement('div')
  $streetRow.classList.add('row')

  var $streetDiv = document.createElement('div')
  $streetDiv.classList.add('input-field','col','s12')

  var $streetInput = document.createElement('input')
  $streetInput.classList.add('validate')
  $streetInput.setAttribute('Placeholder', '1600 Main St.')
  $streetInput.setAttribute('id', 'street-address')
  $streetInput.setAttribute('type', 'text')

  var $streetLabel = document.createElement('label')
  $streetLabel.classList.add('active')
  $streetLabel.setAttribute('for', 'street-address')
  $streetLabel.textContent ='Street Address'

  var $zipRow = document.createElement('div')
  $zipRow.classList.add('row')

  var $zipDiv = document.createElement('div')
  $zipDiv.classList.add('input-field','col','s12','m6')

  var $zipInput = document.createElement('input')
  $zipInput.classList.add('validate')
  $zipInput.setAttribute('value', localStorage.getItem('userZip'))
  $zipInput.setAttribute('id', 'zip')
  $zipInput.setAttribute('type', 'text')

  var $zipLabel = document.createElement('label')
  $zipLabel.classList.add('active')
  $zipLabel.setAttribute('for', 'zip')
  $zipLabel.textContent= 'ZIP Code'

  var $stateDiv = document.createElement('div')
  $stateDiv.classList.add('input-field','col','s12','m6')
  $stateDiv.setAttribute('id', 'state')

  var $stateSelect = document.createElement('select')

  var $stateLabel = document.createElement('label')
  $stateLabel.textContent = 'State'

  var $optionPlaceholder = document.createElement('option')
  $optionPlaceholder.setAttribute('value', ' ')
  $optionPlaceholder.setAttribute('disabled', 'true')
  $optionPlaceholder.setAttribute('selected', 'true')
  $optionPlaceholder.textContent = 'State'

  var $contactRow = document.createElement('div')
  $contactRow.classList.add('row')

  var $emailDiv = document.createElement('div')
  $emailDiv.classList.add('input-field','col','s12','l6')

  var $emailInput = document.createElement('input')
  $emailInput.classList.add('validate')
  $emailInput.setAttribute('id', 'email')
  $emailInput.setAttribute('type', 'email')

  var $emailLabel = document.createElement('label')
  $emailLabel.setAttribute('for', 'email')
  $emailLabel.textContent = 'Email'

  var $phoneDiv = document.createElement('div')
  $phoneDiv.classList.add('input-field','col','s12','l6')

  var $phoneInput = document.createElement('input')
  $phoneInput.classList.add('validate')
  $phoneInput.setAttribute('id', 'phone-number')
  $phoneInput.setAttribute('type', 'tel')

  var $phoneLabel = document.createElement('label')
  $phoneLabel.setAttribute('for', 'phone-number')
  $phoneLabel.textContent = 'Phone Number'

  var $buttonRow = document.createElement('div')
  $buttonRow.classList.add('row','center')

  var $button = document.createElement('a')
  $button.classList.add('waves-effect','waves-light','btn-large')
  $button.textContent = 'Book Visit'

  $userInfo.appendChild($form)
  $form.appendChild($nameRow)
  $form.appendChild($streetRow)
  $form.appendChild($zipRow)
  $form.appendChild($contactRow)
  $form.appendChild($buttonRow)
  $nameRow.appendChild($firstNameDiv)
  $nameRow.appendChild($lastNameDiv)
  $firstNameDiv.appendChild($firstNameInput)
  $firstNameDiv.appendChild($firstNameLabel)
  $lastNameDiv.appendChild($lastNameInput)
  $lastNameDiv.appendChild($lastNameLabel)
  $streetRow.appendChild($streetDiv)
  $streetDiv.appendChild($streetInput)
  $streetDiv.appendChild($streetLabel)
  $zipRow.appendChild($zipDiv)
  $zipDiv.appendChild($zipInput)
  $zipDiv.appendChild($zipLabel)
  $zipRow.appendChild($stateDiv)
  $stateDiv.appendChild($stateSelect)
  $stateSelect.appendChild($optionPlaceholder)

  for (var i = 0; i < states.length; i++) {
    var $stateOption = document.createElement('option')
    $stateOption.setAttribute('value', i)
    $stateOption.textContent = states[i]
    $stateSelect.appendChild($stateOption)
  }
  $stateDiv.appendChild($stateLabel)
  $contactRow.appendChild($emailDiv)
  $contactRow.appendChild($phoneDiv)
  $emailDiv.appendChild($emailInput)
  $emailDiv.appendChild($emailLabel)
  $phoneDiv.appendChild($phoneInput)
  $phoneDiv.appendChild($phoneLabel)
  $buttonRow.appendChild($button)

  return $userInfo
}

function showForm() {
  $('select').material_select()
  analytics.track('BookingViewedProfile')
  document.querySelector('#user-info').appendChild(userInfo())
}

showForm()

var $userForm = document.querySelector('#user-info')

$userForm.addEventListener('input', function(event){
  var e = event.srcElement.id
  var target = event.target.value
  switch(e) {
    case 'first-name':
      localStorage.setItem('userFirstName', target)
      break
    case 'last-name':
      localStorage.setItem('userLastName', target)
      break
    case 'street-address':
      localStorage.setItem('userStreetAddress', target)
      break
    case 'email':
      localStorage.setItem('userEmail', target)
      break
    case 'phone-number':
      localStorage.setItem('userPhone', target)
    default:
  }
})

$userForm.addEventListener('focusout', function(event){
  var e = event.srcElement.id
  switch(e) {
    case 'first-name':
      analytics.track('EnteredFirstName')
      break
    case 'last-name':
      analytics.track('EnteredLastName')
      break
    case 'street-address':
      analytics.track('EnteredAddress')
      break
    case 'email':
      analytics.track('EnteredEmail')
      break
    case 'phone-number':
    analytics.track('EnteredPhone')
    default:
  }
})

$userForm.addEventListener('click', function(event){
  if (event.target.tagName.toLowerCase() === 'a') {
    if (validate() === true) {
      sendToSegment()
      window.location.href = 'confirmation.html'
    }
    else {
      Materialize.toast('Please complete entering your information.', 4000, 'pink lighten-2 pulse')
    }
  }
})

function validate () {
  var firstName = getClasses('first-name').indexOf('valid') !== -1
  var lastName = getClasses('last-name').indexOf('valid') !== -1
  var streetAddress = getClasses('street-address').indexOf('valid') !== -1
  var zipCode = getClasses('zip').indexOf('valid') !== -1 || document.querySelector('#zip').value !== ''
  var email = getClasses('email').indexOf('valid') !== -1
  var phone = getClasses('phone-number').indexOf('valid') !== -1
  var state = document.querySelectorAll('#state .active').length > 0

  if (firstName === true && lastName === true && streetAddress === true && zipCode === true && email === true && phone === true && state === true) {
    return true
  }
  else {
    return false
  }

}

function getClasses(id) {
  var domTokens = document.querySelector('#'+id).classList
  var classArray = Array.from(domTokens)
  return classArray
}

function sendToSegment () {
  analytics.track(
    'SubmittedForm',
    {
      email:localStorage.getItem('userEmail'),
      firstName:localStorage.getItem('userFirstName'),
      lastName:localStorage.getItem('userLastName'),
      streetAddress:localStorage.getItem('userStreetAddress'),
      zip:localStorage.getItem('userZip'),
      phone:localStorage.getItem('userPhone'),
      vet:localStorage.getItem('userVet'),
      petName:localStorage.getItem('userPetName'),
      petSpecies:localStorage.getItem('userPetSpecies'),
      petStatus:localStorage.getItem('userPetStatus'),
      petAge:localStorage.getItem('userPetAge')
    })
}

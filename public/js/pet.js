function petSpecies () {
  var $species = document.createElement('div')

  var $headerRow = document.createElement('div')
  $headerRow.classList.add('row')

  var $speciesHeader = document.createElement('h4')
  $speciesHeader.classList.add('center','flow-text')
  $speciesHeader.textContent = 'Select your pet\'s species'

  var $buttonRow = document.createElement('div')
  $buttonRow.classList.add('row')

  var $buttonContainer = document.createElement('div')
  $buttonContainer.classList.add('col','s8','l4','offset-l4','offset-s2')

  var $catDiv = document.createElement('div')
  $catDiv.classList.add('left')

  var $catButton = document.createElement('a')
  $catButton.classList.add('waves-effect','waves-light','btn-large')
  $catButton.setAttribute('id', 'cat-button')
  $catButton.setAttribute('data-species', 'cat')
  $catButton.textContent = 'Cat'

  var $dogDiv = document.createElement('div')
  $dogDiv.classList.add('right')

  var $dogButton = document.createElement('a')
  $dogButton.classList.add('waves-effect','waves-light','btn-large')
  $dogButton.setAttribute('id', 'dog-button')
  $dogButton.setAttribute('data-species', 'dog')
  $dogButton.textContent = 'Dog'

  $species.appendChild($headerRow)
  $headerRow.appendChild($speciesHeader)
  $species.appendChild($buttonRow)
  $buttonRow.appendChild($buttonContainer)
  $buttonContainer.appendChild($catDiv)
  $buttonContainer.appendChild($dogDiv)
  $catDiv.appendChild($catButton)
  $dogDiv.appendChild($dogButton)

  return $species
}

function petStatus () {
  var $status = document.createElement('div')

  var $headerRow = document.createElement('div')
  $headerRow.classList.add('row')

  var $statusHeader = document.createElement('h4')
  $statusHeader.classList.add('center','flow-text')
  $statusHeader.textContent = 'Is your pet spayed/neutered?'

  var $buttonRow = document.createElement('div')
  $buttonRow.classList.add('row')

  var $buttonContainer = document.createElement('div')
  $buttonContainer.classList.add('col','s8','l4','offset-l4','offset-s2')

  var $yesDiv = document.createElement('div')
  $yesDiv.classList.add('left')

  var $yesButton = document.createElement('a')
  $yesButton.classList.add('waves-effect','waves-light','btn-large')
  $yesButton.setAttribute('id', 'yes-button')
  $yesButton.setAttribute('data-status', 'yes')
  $yesButton.textContent = 'Yes'

  var $noDiv = document.createElement('div')
  $noDiv.classList.add('right')

  var $noButton = document.createElement('a')
  $noButton.classList.add('waves-effect','waves-light','btn-large')
  $noButton.setAttribute('id', 'no-button')
  $noButton.setAttribute('data-status', 'no')
  $noButton.textContent = 'No'

  $status.appendChild($headerRow)
  $headerRow.appendChild($statusHeader)
  $status.appendChild($buttonRow)
  $buttonRow.appendChild($buttonContainer)
  $buttonContainer.appendChild($yesDiv)
  $buttonContainer.appendChild($noDiv)
  $yesDiv.appendChild($yesButton)
  $noDiv.appendChild($noButton)

  return $status
}

function petNameAge () {
  var $nameAge = document.createElement('div')

  var $headerRow = document.createElement('div')
  $headerRow.classList.add('row')

  var $nameAgeHeader = document.createElement('h4')
  $nameAgeHeader.classList.add('center','flow-text')
  $nameAgeHeader.textContent = 'What\'s your pet\'s name and age?'

  var $nameRow = document.createElement('div')
  $nameRow.classList.add('row')

  var $nameContainer = document.createElement('div')
  $nameContainer.classList.add('col','s8','l4','offset-l4','offset-s2')

  var $nameInput = document.createElement('input')
  $nameInput.setAttribute('Placeholder', 'Pet\'s Name')
  $nameInput.setAttribute('id', 'pet-name')
  $nameInput.setAttribute('type', 'text')

  var $ageRow = document.createElement('div')
  $ageRow.classList.add('row')

  var $ageContainer = document.createElement('div')
  $ageContainer.classList.add('input-field','col','s8','l4','offset-l4','offset-s2')

  var $ageSelect = document.createElement('select')

  var $optionPlaceholder = document.createElement('option')
  $optionPlaceholder.setAttribute('value', ' ')
  $optionPlaceholder.setAttribute('disabled', 'true')
  $optionPlaceholder.setAttribute('selected', 'true')
  $optionPlaceholder.textContent = 'Age'

  var $option1 = document.createElement('option')
  $option1.setAttribute('value', 1)
  $option1.textContent = 'less than a year'

  var $option2 = document.createElement('option')
  $option2.setAttribute('value', 2)
  $option2.textContent = '1 - 3 years'

  var $option3 = document.createElement('option')
  $option3.setAttribute('value', 3)
  $option3.textContent = '3 - 10 years'

  var $option4 = document.createElement('option')
  $option4.setAttribute('value', 4)
  $option4.textContent = '10+ years'

  var $buttonRow = document.createElement('div')
  $buttonRow.classList.add('row','center')

  var $nextButton = document.createElement('a')
  $nextButton.classList.add('waves-effect','waves-light','btn-large')
  $nextButton.textContent = 'Next'

  $nameAge.appendChild($headerRow)
  $headerRow.appendChild($nameAgeHeader)
  $nameAge.appendChild($nameRow)
  $nameRow.appendChild($nameContainer)
  $nameContainer.appendChild($nameInput)
  $nameAge.appendChild($ageRow)
  $ageRow.appendChild($ageContainer)
  $ageContainer.appendChild($ageSelect)
  $ageSelect.appendChild($optionPlaceholder)
  $ageSelect.appendChild($option1)
  $ageSelect.appendChild($option2)
  $ageSelect.appendChild($option3)
  $ageSelect.appendChild($option4)
  $nameAge.appendChild($buttonRow)
  $buttonRow.appendChild($nextButton)

  return $nameAge

}

function petBreed() {
  var $breeds = document.createElement('div')

  var $headerRow = document.createElement('div')
  $headerRow.classList.add('row')

  var $breedHeader = document.createElement('h4')
  $breedHeader.classList.add('center','flow-text')
  $breedHeader.textContent = 'Select your pet\'s breed:'

  var $breedRow = document.createElement('div')
  $breedRow.classList.add('row')

  var $breedContainer = document.createElement('div')
  $breedContainer.classList.add('input-field','col','s8','l4','offset-l4','offset-s2')

  var $breedSelect = document.createElement('select')

  var $optionPlaceholder = document.createElement('option')
  $optionPlaceholder.setAttribute('value', ' ')
  $optionPlaceholder.setAttribute('disabled', 'true')
  $optionPlaceholder.setAttribute('selected', 'true')
  $optionPlaceholder.textContent = 'Choose a breed'

  var $buttonRow = document.createElement('div')
  $buttonRow.classList.add('row','center')

  var $nextButton = document.createElement('a')
  $nextButton.classList.add('waves-effect','waves-light','btn-large')
  $nextButton.textContent = 'Next'

  $breeds.appendChild($headerRow)
  $headerRow.appendChild($breedHeader)
  $breeds.appendChild($breedRow)
  $breedRow.appendChild($breedContainer)
  $breedContainer.appendChild($breedSelect)
  $breeds.appendChild($buttonRow)
  $buttonRow.appendChild($nextButton)
  $breedSelect.appendChild($optionPlaceholder)

  var species = localStorage.getItem('userPetSpecies')

  if (species === 'cat') {
    var catBreeds = ['Domestic Shorthair', 'Domestic Longhair', 'Persian', 'Siamese', 'Scottish Fold', 'Ragdoll', 'Calico', 'Norwegian Forest Cat']

    for (var i = 0; i < catBreeds.length; i++) {
      var sorted = catBreeds.sort()
      var $breedOption = document.createElement('option')
      $breedOption.setAttribute('value', i)
      $breedOption.textContent = sorted[i]
      $breedSelect.appendChild($breedOption)
    }

  }
  else {
    var dogBreeds = ['Mixed Breed','Labrador Retriever', 'Golden Retriever', 'Chihuaha', 'Beagle', 'Weimaraner', 'Australian Shepard', 'Popmeranian', 'Shih Tzu', 'Basset Hound']
    for (var i = 0; i < dogBreeds.length; i++) {
      var sorted = dogBreeds.sort()
      var $breedOption = document.createElement('option')
      $breedOption.setAttribute('value', i)
      $breedOption.textContent = sorted[i]
      $breedSelect.appendChild($breedOption)
    }
  }

  return $breeds
}

function getPetSpecies() {
  localStorage.setItem('userPetSpecies', event.target.dataset.species)
  step++
  analytics.track('SelectedPetSpecies', {petSpecies:event.target.dataset.species})
  showForm(steps[step])
}

function getPetStatus() {
  localStorage.setItem('userPetStatus', event.target.dataset.status)
  step++
  analytics.track('SelectedPetStatus')
  showForm(steps[step])
}

function getNameAge () {
  if (document.querySelector('input#pet-name').value !== '' && document.querySelector('li.active') !== null) {
    var $petName = document.querySelector('input#pet-name').value
    var $petAge = document.querySelector('li.active').textContent
    localStorage.setItem('userPetName', $petName)
    localStorage.setItem('userPetAge', $petAge)
    analytics.track('EnteredPetName', {petName:$petName})
    analytics.track('EnteredPetAge', {petAge:$petAge})
    step++
    showForm(steps[step])
  }
  else {
    Materialize.toast('Please enter your pet\'s name and age.', 4000, 'pink lighten-2 pulse')
  }
}

function getBreed() {

  if (document.querySelector('li.active') !== null) {
    var $petBreed = document.querySelector('li.active').textContent
    analytics.track('SelectedPetBreed', {petBreed:$petBreed})
    localStorage.setItem('userPetBreed', $petBreed)
  }
  else {
    Materialize.toast('Please enter your pet\'s breed.', 4000, 'pink lighten-2 pulse')
  }
}

function showForm(form) {
  $petForm.innerHTML = ''
  $petForm.appendChild(form())
  $('select').material_select();
}

var step = 0
var steps = [petSpecies, petStatus, petNameAge, petBreed]
var $petForm = document.querySelector('#pet-info')

showForm(steps[step])

$petForm.addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'a') {
    switch (step) {
      case 0:
        getPetSpecies()
        break
      case 1:
        getPetStatus()
        break
      case 2:
        getNameAge()
        break
      case 3:
        getBreed()
        window.location.href = 'profile.html'
        break
      default:
        step = 0
    }
  }
})

analytics.track('BookingViewedPet')

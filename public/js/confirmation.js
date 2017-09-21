var vets = [
  {
    id: '1',
    firstName: 'Sabrina',
    lastName: 'Castro',
    image: 'images/sabrina-castro.png',
    zipsServed: ['12345', '11223'],
    background: 'The Kindhearted - Dr. Sabrina is a Southern California native who made a decision to become a veterinarian very early on in her life. She focused her entire education on animal health and focuses on companion animal medicine.',
    vetSchool: 'Royal Veterinary College, London, UK',
    undergraduate: 'California State Polytechnic University Pomona , Animal Science',
    interests: 'Dr. Sabrina likes to tap into her creative side – drawing, painting, and baking in her free time',
    pets: [
      {
        name: 'Bubba',
        description: 'Bubba, a 10-year-old likely Chihuahua/Daschund cross saved from the mean streets of Riverside County. Bubba now enjoys long walks on the beach, attempting to save clams from the incoming tide, and sneaking the occasional french fry.'
      }]
  },
  {
    id: '2',
    firstName: 'Benjamin',
    lastName: 'Rosnick',
    image: 'images/benjamin-rosnick.png',
    zipsServed: ['12345', '54321'],
    background: 'The Innovator - Dr. Benjamin is passionate about creating change in the profession, focused on ways in which care delivery and patient engagement can be vastly improved.',
    vetSchool: 'University of California, Davis',
    undergraduate: 'University of California, Santa Barbara, Biological Science',
    interests: 'Wandering through Huntington Gardens, snowboarding, studying history.',
    pets: [
      {
        name: 'Tulip',
        description: 'Tulip, a 9 year old cat he adopted from the Peter Zippi Fund for Animals, a kitten rescue group who he provided veterinary services for. Tulip is half tabby, half calico, and having been raised with Golden Retriever, she behaves like a dog almost as much as a cat. She loves watching hummingbirds feed on aloe flowers.'
      }]
  },
  {
    id: '3',
    firstName: 'Cecile',
    lastName: 'Mercado',
    image: 'images/cecile-meracdo.png',
    zipsServed: ['11223', '54321'],
    background: 'The Nurturer - Dr. Cecile loves veterinary science and excels in providing the highest level of compassionate care to her patients.',
    vetSchool: 'Western University',
    undergraduate: 'Animal Ecology/Pre-Vet & Wildlife Care – Iowa State University',
    interests: 'Swimming, beach volleyball, travel, forging great human connections with people from all over the world.',
    pets: [
      {
        name: 'Roey',
        description: 'Maine Coon mix - 3 years old, found abandoned on the street at just 5 weeks old.'
      }]
  },
  {
    id: '4',
    firstName: 'Galleet',
    lastName: 'Khouban',
    image: 'images/gallet-khouban.png',
    zipsServed: ['12345', '11223', '54321'],
    background: 'The Trailblazer - Dr. Galleet is passionate about all creatures, from furry to feathered; and is firmly rooted in the belief that preventative medicine is the best medicine.',
    vetSchool: 'University of California, Davis',
    undergraduate: 'B.S. Animal Sciences – California State University Northridge',
    interests: 'Reading, rock climbing, swimming, traveling to tropical locales.',
    pets: [
      {
        name: 'Dan',
        description: 'Miniature Poodle - 13 years old, enjoys chasing squirrels'
      }]
  },
  {
    id: '5',
    firstName: 'Sydney',
    lastName: 'Pokard',
    image: 'images/sydney-pokard.png',
    zipsServed: ['11223'],
    background: 'The Gifted - Dr. Sydney has traveled across the globe to learn veterinary medicine, spending time in South Africa working with wildlife, and participating in volunteer efforts to bring veterinary care for companion animals to rural communities in the Southwestern U.S.',
    vetSchool: 'Western University of Health Sciences',
    undergraduate: 'California State Polytechnic University Pomona, Animal Science',
    interests: 'Hiking, camping, meditation, yoga and playing the ukulele.',
    pets: [
      {
        name: 'Sunny',
        description: '11 year old Chihuaha, adopted at a year old, who loves the beach.'
      },
      {
        name: 'Pandora',
        description: '11 year-old Domestic Shorthair adopted at 8 weeks.'
      }]
  }
]

function confirmation() {
  var $confirmation = document.createElement('div')

  var $row = document.createElement('div')
  $row.classList.add('row')

  var $container = document.createElement('div')
  $container.classList.add('col','s12','l10','offset-l1')

  var $card = document.createElement('div')
  $card.classList.add('card','horizontal1')

  var $cardStacked = document.createElement('div')
  $cardStacked.classList.add('card-stacked')

  var $cardContent = document.createElement('div')
  $cardContent.classList.add('card-content','flow-text')
  $cardContent.setAttribute('id', 'appointment-details')

  var $thankYou = document.createElement('p')
  $thankYou.textContent = 'Thank you '

  var $userName = document.createElement('span')
  $userName.textContent = localStorage.getItem('userFirstName') + ','

  var $scheduled = document.createElement('p')
  $scheduled.textContent = 'Your appointment for '

  var $petName = document.createElement('span')
  $petName.textContent = localStorage.getItem('userPetName') + ' is scheduled for:'

  var $day = document.createElement('p')
  $day.classList.add('day-time')
  $day.textContent = localStorage.getItem('userDate')

  var $at = document.createElement('p')
  $at.textContent = 'at'

  var $time = document.createElement('p')
  $time.classList.add('day-time')
  $time.textContent = localStorage.getItem('userTime')

  var $cardImage = document.createElement('div')
  $cardImage.classList.add('card-image')

  var $cardImageHolder = document.createElement('div')
  $cardImageHolder.classList.add('center')
  $cardImageHolder.setAttribute('id', 'image-holder')

  var $image = document.createElement('img')
  $image.setAttribute('id', 'appointment-image')
  $image.setAttribute('src', vets[localStorage.getItem('userVet') - 1].image)

  var $vetName = document.createElement('p')
  $vetName.textContent = 'Dr. ' + vets[localStorage.getItem('userVet') - 1].firstName + ' ' + vets[localStorage.getItem('userVet') - 1].lastName

  var $cardAction = document.createElement('div')
  $cardAction.classList.add('card-action','center')
  $cardAction.setAttribute('id', 'return-home')

  var $cardLink = document.createElement('a')
  $cardLink.setAttribute('href','index.html')
  $cardLink.textContent = 'Return To Homepage'

  $confirmation.appendChild($row)
  $row.appendChild($container)
  $container.appendChild($card)
  $card.appendChild($cardStacked)
  $cardStacked.appendChild($cardImage)
  $cardImage.appendChild($cardImageHolder)
  $cardImageHolder.appendChild($image)
  $cardImageHolder.appendChild($vetName)
  $cardStacked.appendChild($cardContent)
  $cardContent.appendChild($thankYou)
  $thankYou.appendChild($userName)
  $cardContent.appendChild($scheduled)
  $scheduled.appendChild($petName)
  $cardContent.appendChild($day)
  $cardContent.appendChild($at)
  $cardContent.appendChild($time)
  $cardStacked.appendChild($cardAction)
  $cardAction.appendChild($cardLink)

  return $confirmation
}

function showConfirmation () {
  document.querySelector('#confirmation').appendChild(confirmation())
  analytics.track('BookingComplete',
   {
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

showConfirmation()

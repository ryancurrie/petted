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

var query = localStorage.getItem('searchZip')

function results(query, options) {
  var searchResults = []
  for (var i = 0; i < options.length; i++) {
    if (options[i].zipsServed.indexOf(query) !== -1) {
      searchResults.push(options[i])
    }
  }
  return searchResults
}

var $results = results(query, vets)

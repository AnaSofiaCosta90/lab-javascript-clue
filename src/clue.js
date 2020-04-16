// ITERATION 1

// Suspects Collection

const suspectsArray = [

    {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green"
    },
    
    
    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white"
    },
    
    
    {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple"
    },
    
    
    {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "red"
    },
    
    
    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        color: "blue"
    },
    
    
    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"
    }
    ]
    
    // Weapons Collection
    
    const weaponsArray = [
    
    {
    name: "rope", weight: 10},
    
    {name: "knife", weight: 8},
    {name: "candlestick", weight: 2},
    {name: "dumbbell", weight: 30},
    {name: "poison", weight: 2},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "trophy", weight: 25},
    {name: "pistol", weight: 20}
    ];
    
    
    
    
    // Rooms Collection
    
    const roomsArray = [
    
    {name: "Dining Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard Room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Living Room"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest House"},
    {name: "Patio"}
    ];
    
    
    
    
    // ITERATION 2
    // Declare a function named selectRandom to randomly select one element from a card stack. The function should expect an array as an argument, and should return a random element from the array.
    // 1) criar funcão selectRandom
    // 2) selecionar um elemento da array aleatoriamente + retornar este elemento
    // 3) parametro da funcao: array   
    
    /*
    const generateRandomInteger = (a, b) => {
        const random = Math.random();
        return Math.floor(random * (b - a + 1) + a);
      };
    */
    
    function selectRandom (arr) {
        const random = Math.random();
        return arr[Math.floor(random * arr.length)];
    };
    
    // Math.floor(random * arr.length) --> retorna apenas o index
    // arr[Math.floor(random * arr.length)] --> retorna a palavra do array de determinado index
    
    
    
    // You can get a random card of each type by calling selectRandom on each card stack.
    // 1) declarar a função pickMystery sem argumentos
    // 2) retornar um objecto com 3 propriedades: suspect, weapon, room
    // 3) colocar o valor de cada uma das propriedades utilizando a função selectRandom
    
    function pickMystery () {
        const cards = {suspect: selectRandom(suspectsArray),
             weapon: selectRandom(weaponsArray), 
             room: selectRandom(roomsArray)}
    
        return cards
    }
    
    const cards = {suspect:
            {
                    firstName: "Jacob",
                    lastName: "Green",
                    occupation: "Entrepreneur",
                    age: 45,
                    description: "He has a lot of connections",
                    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
                    color: "green"
            },
    
                weapon: {name: "dumbbell", weight: 30},
    
                room: {name: "Library"},
        }
    
    
    
    // ITERATION 3
    
    
    //  an envelope object (such as the one returned by pickMystery) as the single argument, and returns a reveal message in the following format:
    
    // <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!
    
    
    // 1) declarar função revealMystery
    // 2) a função recebe um objecto (envelope) 
    // 3) o envelope tem apenas um argumento
    // 4) retorna e revela a mensagem
    
    
    function revealMystery (cards) {
    
    return `${cards.suspect.firstName} ${cards.suspect.lastName} killed Mr. Boddy using the ${cards.weapon.name} in the ${cards.room.name}!`
    }
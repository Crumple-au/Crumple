import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Ryan',
      email: 'admin1@example.com',
      password: bcrypt.hashSync('1234', 8),
      description:
        'Hey This my Ryan description. here i will talk about who i am and what art i sell',
      isAdmin: true,
      isSeller: true,
    },
    {
      name: 'Irah',
      email: 'admin2@example.com',
      password: bcrypt.hashSync('1234', 8),
      description: "Hey This my Irah description. I'm an admin on Crumple",
      isAdmin: true,
      isSeller: true,
    },
    {
      name: 'Sarah',
      email: 'sarah@example.com',
      password: bcrypt.hashSync('1234', 8),
      description:
        'Hey This my Sarah description. Im an artist and i use this site to sell my art!',
      isAdmin: false,
      isSeller: false,
    },
    {
      name: 'Daniel',
      email: 'daniel@example.com',
      password: bcrypt.hashSync('1234', 8),
      description:
        'Hey This my Sarah description. Im an artist and i use this site to sell my art!',
      isAdmin: false,
      isSeller: false,
    },
    {
      name: 'Doug',
      email: 'doug@example.com',
      password: bcrypt.hashSync('1234', 8),
      description:
        'Hey This my Sarah description. Im an artist and i use this site to sell my art!',
      isAdmin: false,
      isSeller: true,
    },
    {
      name: 'Mary',
      email: 'Mary@example.com',
      password: bcrypt.hashSync('1234', 8),
      description:
        'Hey This my Sarah description. Im an artist and i use this site to sell my art!',
      isAdmin: false,
      isSeller: true,
    },
    {
      name: 'Kimmy',
      email: 'Kimmy@example.com',
      password: bcrypt.hashSync('1234', 8),
      description:
        'Hey This my Sarah description. Im an artist and i use this site to sell my art!',
      isAdmin: false,
      isSeller: false,
    },
    {
      name: 'Jackson',
      email: 'Jackson@example.com',
      password: bcrypt.hashSync('1234', 8),
      description:
        'Hey This my Sarah description. Im an artist and i use this site to sell my art!',
      isAdmin: false,
      isSeller: false,
    },
    {
      name: 'Mary',
      email: 'Mary_lou@example.com',
      password: bcrypt.hashSync('1234', 8),
      description:
        'Hey This my Sarah description. Im an artist and i use this site to sell my art!',
      isAdmin: false,
      isSeller: false,
    },
    {
      name: 'Cloud',
      email: 'Cloud@example.com',
      password: bcrypt.hashSync('1234', 8),
      description:
        'Hey This my Sarah description. Im an artist and i use this site to sell my art!',
      isAdmin: false,
      isSeller: false,
    },
    {
      name: 'Tifa',
      email: 'tifa@example.com',
      password: bcrypt.hashSync('1234', 8),
      description:
        'Hey This my Sarah description. Im an artist and i use this site to sell my art!',
      isAdmin: false,
      isSeller: true,
    },
  ],
  artworks: [
    {
      name: 'Painting of Mona Lisa',
      category: 'Drawing and Painting',
      price: 700,
      inStock: 10,
      description: 'My version of the Mona Lisa.',
      reviews: [],
    },
    {
      name: 'Painting of a croissant',
      category: 'Drawing and Painting',
      price: 35,
      inStock: 10,
      description: 'My version of a croissant.',
      reviews: [],
    },
    {
      name: 'Painting of plants',
      category: 'Drawing and Painting',
      price: 100,
      inStock: 10,
      description: 'An oil Painting of plants.',
      reviews: [],
    },
    {
      name: '3D Map of Sydney',
      category: 'Crafts and DIY',
      price: 500,
      inStock: 10,
      description: 'This map is a customised rendering of Sydney.',
      reviews: [],
    },
    {
      name: 'Melbourne SkyLine',
      category: 'Photography',
      price: 150,
      inStock: 10,
      description: 'Photograph of the Melbourne city skyline.',
      reviews: [],
    },
    {
      name: 'Wedding Singer',
      category: 'Music and Sound Design',
      price: 300,
      inStock: 10,
      description:
        'Chislic corned beef pork chop venison brisket salami pastrami short loin porchetta.',
      reviews: [],
    },
    {
      name: 'The Legend of Ishbris',
      category: 'Books and Writing',
      price: 50,
      inStock: 10,
      description:
        'Bacon ipsum dolor amet rump sausage short loin tongue tenderloin turducken. Burgdoggen leberkas capicola drumstick filet mignon cupim landjaeger biltong flank pig pancetta jerky ribeye meatball. ',
      reviews: [],
    },
    {
      name: 'Budget App',
      category: 'Design and Tech',
      price: 100,
      inStock: 10,
      description:
        'Pancetta porchetta picanha, pork jowl biltong ground round ribeye fatback turducken frankfurter pork loin. Ground round landjaeger turducken leberkas capicola ribeye. Pastrami pork loin andouille kevin tongue meatball picanha.',
      reviews: [],
    },

    {
      name: 'The Warrant Observer',
      category: 'Film and Video',
      price: 75,
      inStock: 1,
      description:
        'Hamburger kielbasa doner fatback flank tenderloin prosciutto meatloaf beef ham hock porchetta shoulder bacon rump. Ribeye pork belly kevin landjaeger bacon frankfurter. Shank drumstick ball tip, beef ribs kielbasa ham pork loin pastrami turkey landjaeger.',
      reviews: [],
    },

    {
      name: 'Third Grade',
      category: 'Music and Sound Design',
      price: 88,
      inStock: 88,
      description:
        'Chislic kielbasa beef ribs, andouille tongue pork swine buffalo t-bone jerky sirloin turkey. Tongue salami capicola, beef ribs alcatra pork turducken meatball chislic beef. Picanha beef ribs pork loin jerky pork chop cow meatball ribeye meatloaf.',
      reviews: [],
    },

    {
      name: 'Blossom and Root',
      category: 'Crafts and DIY',
      price: 345,
      inStock: 6,
      description:
        'Tongue salami capicola, beef ribs alcatra pork turducken meatball chislic beef. Picanha beef ribs pork loin jerky pork chop cow meatball ribeye meatloaf. Turducken capicola corned beef, chuck tongue bacon landjaeger.',
      reviews: [],
    },

    {
      name: 'Gotcha Stickers',
      category: 'Merchandise',
      price: 17,
      inStock: 346,
      description:
        'Pancetta venison picanha short loin, ground round swine chislic sirloin prosciutto meatloaf frankfurter. Pancetta kielbasa salami pastrami cow spare ribs turducken doner buffalo pig capicola brisket. ',
      reviews: [],
    },

    {
      name: 'Astrophotography Macros',
      category: 'Photography',
      price: 23,
      inStock: 3,
      description:
        'Tail capicola venison burgdoggen, jowl rump flank. Landjaeger pork loin meatloaf turkey tail brisket. Leberkas buffalo turkey t-bone chuck short loin ball tip tail pig bresaola turducken fatback sirloin shoulder. Corned beef chislic beef ribs cupim ribeye pork chop strip steak shank.',
      reviews: [],
    },

    {
      name: 'BluePrint Content Creation',
      category: 'Film and Video',
      price: 123,
      inStock: 4,
      description:
        'Bacon ipsum dolor amet shankle kevin beef pork loin ham, sirloin strip steak bacon alcatra salami. Ham hock drumstick pork chop boudin turkey brisket. Flank kielbasa venison tenderloin ham hock. Cow brisket prosciutto shoulder.',
      reviews: [],
    },

    {
      name: 'The Table Men',
      category: 'Music and Sound Design',
      price: 45,
      inStock: 1,
      description:
        'In culpa elit pork belly et. Bresaola qui lorem proident tail labore fatback ut pastrami consectetur cupidatat. Pancetta ham hock pork belly, frankfurter pork loin ground round proident venison. Leberkas cow filet mignon est, bresaola consectetur chicken kevin sirloin.',
      reviews: [],
    },

    {
      name: 'Sundate',
      category: 'Photography',
      price: 64,
      inStock: 5,
      description:
        'Drumstick ea venison, consequat ut in beef ribs qui adipisicing chislic labore buffalo. Short loin ad fugiat laborum, burgdoggen pastrami sint magna flank enim exercitation sed elit deserunt culpa. Ribeye rump shank velit spare ribs proident salami.',
      reviews: [],
    },

    {
      name: 'Short Comic Animation',
      category: 'Film and Video',
      price: 82,
      inStock: 2,
      description:
        'Sirloin strip steak reprehenderit tenderloin cillum aute sunt minim ullamco meatloaf meatball aliqua. Elit short loin excepteur, turducken burgdoggen shankle filet mignon in incididunt tenderloin eiusmod nisi aliqua.',
      reviews: [],
    },

    {
      name: 'Zubys Guide',
      category: 'Photography',
      price: 105,
      inStock: 5,
      description:
        'Rump officia buffalo nisi, alcatra duis ut enim porchetta tenderloin cillum. Buffalo fugiat picanha beef alcatra sint doner esse salami. Adipisicing sunt nulla chicken sint reprehenderit venison picanha cupim nisi velit dolor pork belly tenderloin cillum.',
      reviews: [],
    },

    {
      name: 'Swift',
      category: 'Music and Sound Design',
      price: 55,
      inStock: 2,
      description:
        'Bacon ipsum dolor amet corned beef drumstick ad, brisket laboris chuck sirloin laborum chislic picanha. Incididunt excepteur short ribs turkey aliqua brisket ut fugiat laboris meatball strip steak pastrami chislic anim ham. ',
      reviews: [],
    },

    {
      name: 'Capsules',
      category: 'Crafts and DIY',
      price: 345,
      inStock: 5,
      description:
        'Bacon ipsum dolor amet quis veniam nulla salami doner enim tenderloin anim hamburger minim, landjaeger pork loin duis. Tenderloin qui frankfurter beef ribs, tempor fatback mollit capicola lorem meatball swine.',
      reviews: [],
    },

    {
      name: 'DIY Bar Plan',
      category: 'Crafts and DIY',
      price: 333,
      inStock: 3,
      description:
        'Beef ribs frankfurter prosciutto magna ribeye turkey adipisicing, reprehenderit occaecat minim aute.',
      reviews: [],
    },

    {
      name: 'Sneaker Laces',
      category: 'Merchandise',
      price: 28,
      inStock: 8,
      description:
        'Leberkas dolore kevin, salami adipisicing non sint alcatra. Aliqua tail t-bone, picanha bacon duis meatball fatback reprehenderit in kevin short loin.',
      reviews: [],
    },

    {
      name: 'A Cordial Invitation',
      category: 'Music and Sound Design',
      price: 70,
      inStock: 7,
      description:
        'Nisi ut beef ham hock irure. Pork loin incididunt exercitation buffalo shank nostrud swine eiusmod filet mignon duis pig. Chicken proident aliqua cow jowl reprehenderit. Brisket velit et beef ribs.',
      reviews: [],
    },

    {
      name: 'Kukla 3D Kit',
      category: 'Design and Tech',
      price: 50,
      inStock: 50,
      description:
        'Spare ribs shoulder pastrami et dolore short loin andouille ad buffalo mollit flank incididunt sed. Kevin mollit anim occaecat ball tip sausage ribeye proident elit ground round. Cow alcatra ad, fatback ribeye corned beef porchetta elit.',
      reviews: [],
    },

    {
      name: 'Loops',
      category: 'Design and Tech',
      price: 205,
      inStock: 20,
      description:
        'Prosciutto kielbasa spare ribs porchetta laboris mollit cillum eu labore tail bacon biltong hamburger.',
      reviews: [],
    },

    {
      name: 'The Last Tide',
      category: 'Photography',
      price: 45,
      inStock: 54,
      description:
        'Kevin cow pork belly do occaecat eu fugiat swine deserunt consectetur shoulder biltong elit incididunt bresaola. Magna strip steak ground round, shoulder incididunt dolor cupim short loin deserunt. ',
      reviews: [],
    },

    {
      name: 'The Thing That Never Was',
      category: 'Crafts and DIY',
      price: 78,
      inStock: 4,
      description:
        'Spare ribs shoulder pastrami et dolore short loin andouille ad buffalo mollit flank incididunt sed. Kevin mollit anim occaecat ball tip sausage ribeye proident elit ground round. Cow alcatra ad, fatback ribeye corned beef porchetta elit.',
      reviews: [],
    },

    {
      name: 'The Seasoned Hunter TShirt',
      category: 'Merchandise',
      price: 19,
      inStock: 7,
      description:
        'Jowl dolor frankfurter nulla eu. Pork loin sint pork belly chuck t-bone labore kevin. Pork belly spare ribs magna rump hamburger, biltong ipsum ball tip pariatur. Consectetur tenderloin tri-tip, capicola pariatur ribeye kevin short loin lorem culpa chicken magna fugiat. Fugiat ribeye ham labore meatball.',
      reviews: [],
    },
  ],
  categories: [
    {
      name: 'Drawing and Painting',
      altName: 'drawing',
      description: 'Art finds',
      image: '/images/drawing.svg',
    },
    {
      name: 'Design and Tech',
      altName: 'design',
      description: 'UI, Coding and more',
      image: '/images/design.svg',
    },
    {
      name: 'Merchandise',
      altName: 'merch',
      description: 'Tangible, physical goods',
      image: '/images/merch.svg',
    },
    {
      name: 'Books and Writing',
      altName: 'books',
      description: 'Stories, comics and guides',
      image: '/images/books.svg',
    },
    {
      name: 'Photography',
      altName: 'photos',
      description: 'Photos and tools',
      image: '/images/photos.svg',
    },
    {
      name: 'Film and Video',
      altName: 'film',
      description: 'Videos and workshops',
      image: '/images/film.svg',
    },
    {
      name: 'Music and Sound Design',
      altName: 'music',
      description: 'Albums and sound effects',
      image: '/images/music.svg',
    },
    {
      name: 'Crafts and DIY',
      altName: 'crafts',
      description: 'Personalised items',
      image: '/images/crafts.svg',
    },
  ],
}

export default data

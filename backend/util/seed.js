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
      category: 'Drawing & Painting',
      price: 700,
      inStock: 10,
      description: 'My version of the Mona Lisa.',
      reviews: []
    },
    {
      name: '3D Map of Sydney',
      category: 'Crafts & DIY',
      price: 500,
      inStock: 10,
      description: 'This map is a customised rendering of Sydney.',
      reviews: []
    },
    {
      name: 'Melbourne SkyLine',
      category: 'Photography',
      price: 150,
      inStock: 10,
      description: 'Photograph of the Melbourne city skyline.',
      reviews: []
    },
    {
      name: 'Wedding Singer',
      category: 'Music & Sound Design',
      price: 300,
      inStock: 10,
      description:
        'Chislic corned beef pork chop venison brisket salami pastrami short loin porchetta.',
        reviews: []
    },
    {
      name: 'The Legend of Ishbris',
      category: 'Books & Writing',
      price: 50,
      inStock: 10,
      description:
        'Bacon ipsum dolor amet rump sausage short loin tongue tenderloin turducken. Burgdoggen leberkas capicola drumstick filet mignon cupim landjaeger biltong flank pig pancetta jerky ribeye meatball. ',
        reviews: []
    },
    {
      name: 'Budget App',
      category: 'Design & Tech',
      price: 100,
      inStock: 10,
      description:
        'Pancetta porchetta picanha, pork jowl biltong ground round ribeye fatback turducken frankfurter pork loin. Ground round landjaeger turducken leberkas capicola ribeye. Pastrami pork loin andouille kevin tongue meatball picanha.',
        reviews: []
    },
  ],
  categories: [
    {
      name: 'Drawing & Painting',
      altName: 'drawing',
      description: 'Art finds',
      image: '/images/drawing.svg',
    },
    {
      name: 'Design & Tech',
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
      name: 'Books & Writing',
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
      name: 'Film & Video',
      altName: 'film',
      description: 'Videos and workshops',
      image: '/images/film.svg',
    },
    {
      name: 'Music & Sound Design',
      altName: 'music',
      description: 'Albums and sound effects',
      image: '/images/music.svg',
    },
    {
      name: 'Crafts & DIY',
      altName: 'crafts',
      description: 'Personalised items',
      image: '/images/crafts.svg',
    },
  ],
}

export default data

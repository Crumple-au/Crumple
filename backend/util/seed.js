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
      category: 'Painting',
      price: 700,
      inStock: 10,
      description: 'My version of the Mona Lisa.',
    },
    {
      name: 'Sculpture of Mars',
      category: 'Sculpture',
      price: 700,
      inStock: 10,
      description: 'This is a marble sculpture of Mars.',
    },
    {
      name: 'Melbourne SkyLine',
      category: 'Photography',
      price: 700,
      inStock: 10,
      description: 'Photograph of the Melbourne city skyline.',
    },
    {
      name: 'Painting of Mona Lisa',
      category: 'Painting',
      price: 700,
      inStock: 10,
      description: 'My version of the Mona Lisa.',
    },
    {
      name: 'Sculpture of Mars',
      category: 'Sculpture',
      price: 700,
      inStock: 10,
      description: 'This is a marble sculpture of Mars.',
    },
    {
      name: 'Melbourne SkyLine',
      category: 'Photography',
      price: 700,
      inStock: 10,
      description: 'Photograph of the Melbourne city skyline.',
    },
  ],
  categories: [
    {
      name: 'Drawing & Painting',
      altName: 'drawing',
      description: 'Art finds',
      image: 'x',
    },
    {
      name: 'Design & Tech',
      altName: 'design',
      description: 'UI, Coding and more',
      image: 'x',
    },
    {
      name: 'Merchandise',
      altName: 'merch',
      description: 'Tangible, physical goods',
      image: 'x',
    },
    {
      name: 'Books & Writing',
      altName: 'books',
      description: 'Stories, comics and guides',
      image: 'x',
    },
    {
      name: 'Photography',
      altName: 'photos',
      description: 'Photos and tools',
      image: 'x',
    },
    {
      name: 'Film & Video',
      altName: 'film',
      description: 'Videos and workshops',
      image: 'x',
    },
    {
      name: 'Music & Sound Design',
      altName: 'music',
      description: 'Albums and sound effects',
      image: 'x',
    },
    {
      name: 'Crafts & DIY',
      altName: 'crafts',
      description: 'Personalised items',
      image: 'x',
    },
  ],
}

export default data

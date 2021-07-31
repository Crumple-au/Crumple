import {
  FaPaintBrush,
  FaLaptopCode,
  FaTshirt,
  FaRegEdit,
  FaCameraRetro,
  FaFilm,
  FaMicrophoneAlt,
  FaCubes,
} from 'react-icons/fa'

export const data = [
  {
    id: 1,
    name: 'Drawing & Painting',
    altName: 'drawing',
    description: 'Art finds',
    image: <FaPaintBrush fontSize='10rem' />,
  },
  {
    id: 2,
    name: 'Design & Tech',
    altName: 'design',
    description: 'UI, Coding and more',
    image: <FaLaptopCode fontSize='10rem' />,
  },
  {
    id: 3,
    name: 'Merchandise',
    altName: 'merch',
    description: 'Tangible, physical goods',
    image: <FaTshirt fontSize='10rem' />,
  },
  {
    id: 4,
    name: 'Books & Writing',
    altName: 'books',
    description: 'Stories, comics and guides',
    image: <FaRegEdit fontSize='10rem' />,
  },
  {
    id: 5,
    name: 'Photography',
    altName: 'photos',
    description: 'Photos and tools',
    image: <FaCameraRetro fontSize='10rem' />,
  },
  {
    id: 6,
    name: 'Film & Video',
    altName: 'film',
    description: 'Videos and workshops',
    image: <FaFilm fontSize='10rem' />,
  },
  {
    id: 7,
    name: 'Music & Sound Design',
    altName: 'music',
    description: 'Albums and sound effects',
    image: <FaMicrophoneAlt fontSize='10rem' />,
  },
  {
    id: 8,
    name: 'Crafts & DIY',
    altName: 'crafts',
    description: 'Personalised items',
    image: <FaCubes fontSize='10rem' />,
  },
]

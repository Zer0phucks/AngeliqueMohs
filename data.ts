import { Artwork, BlogPost } from './types';
import { getImageUrl } from './utils/imageUrl';

// Real Angelique Mohs artwork photography copied into /public/images
export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Resting Tiger',
    category: 'Wildlife',
    price: 1250,
    description:
      'A close portrait of a tiger slipping into a dream state, painted in ember oranges and inky midnight blues.',
    imageUrl: getImageUrl('/images/resting-tiger.jpg'),
    dimensions: '18x24"',
    year: '2020'
  },
  {
    id: '2',
    title: 'Bubble Watcher',
    category: 'Wildlife',
    price: 640,
    description:
      'Angelique\'s white studio cat caught in a lavender haze of floating bubbles and soft afternoon light.',
    imageUrl: getImageUrl('/images/bubble-watcher.jpg'),
    dimensions: '11x14"',
    year: '2021'
  },
  {
    id: '3',
    title: 'River Stone Study',
    category: 'Abstract',
    price: 880,
    description:
      'Jewel-toned pebbles rendered with glassy highlights, inspired by jars of stones collected on road trips.',
    imageUrl: getImageUrl('/images/studio-pebbles.jpg'),
    dimensions: '16x20"',
    year: '2022'
  },
  {
    id: '4',
    title: 'Listening Raven',
    category: 'Wildlife',
    price: 450,
    description:
      'A solitary raven perched in violet dusk, painted on wood with feathery brushwork and copper undertones.',
    imageUrl: getImageUrl('/images/listening-raven.jpg'),
    dimensions: '10x20"',
    year: '2020'
  },
  {
    id: '5',
    title: 'Joyous Pebble Field',
    category: 'Abstract',
    price: 1350,
    description:
      'An expansive constellation of river stones glowing with neon pinks, sapphires, and emerald greens.',
    imageUrl: getImageUrl('/images/joyous-pebbles.jpg'),
    dimensions: '30x36"',
    year: '2021'
  },
  {
    id: '6',
    title: 'Open Sky Portrait',
    category: 'Portrait',
    price: 980,
    description:
      'A portrait of pure joy—eyes closed, face to the clouds, painted in airy glazes of blue and lilac.',
    imageUrl: getImageUrl('/images/open-sky-portrait.jpg'),
    dimensions: '18x24"',
    year: '2021'
  },
  {
    id: '7',
    title: 'Orchid Grove',
    category: 'Botanical',
    price: 760,
    description:
      'A surreal landscape where magenta orchids and windswept trees meet under swirling teal skies.',
    imageUrl: getImageUrl('/images/orchid-grove.jpg'),
    dimensions: '14x14"',
    year: '2022'
  },
  {
    id: '8',
    title: 'Emerald Lion',
    category: 'Wildlife',
    price: 1150,
    description:
      'A regal lion emerging from shadow, modeled in layers of emerald and chartreuse oils.',
    imageUrl: getImageUrl('/images/emerald-lion.jpg'),
    dimensions: '20x24"',
    year: '2022'
  },
  {
    id: '9',
    title: 'Three Tulips',
    category: 'Botanical',
    price: 520,
    description:
      'A still-life of blush tulips glowing inside a glass vase, painted alla prima with soft edges.',
    imageUrl: getImageUrl('/images/three-tulips.jpg'),
    dimensions: '10x10"',
    year: '2021'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'River Stone Series Returns',
    date: 'January 7, 2025',
    summary:
      'Nine new pebble paintings are underway, layered with metallic glazes that catch even the softest light.',
    content:
      'I finally unpacked the jars of stones collected last summer and started pairing them with metallic underpaintings. Each layer gets burnished before the next glaze, giving the rocks their subtle glow.',
    imageUrl: getImageUrl('/images/studio-table.jpg')
  },
  {
    id: '2',
    title: 'Painting Guardians',
    date: 'October 12, 2024',
    summary:
      'The tiger, raven, and lion portraits were conceived as quiet protectors—companions for liminal spaces.',
    content:
      'I paint wildlife the way I experience them in dreams: saturated, gentle, and aware. The guardians series will keep growing as I explore more nocturnal palettes.',
    imageUrl: getImageUrl('/images/resting-tiger.jpg')
  },
  {
    id: '3',
    title: 'Botanical Daydreams',
    date: 'August 18, 2024',
    summary:
      'Tulips and orchids have taken over the studio this month, reminding me to chase softness inside vibrant color.',
    content:
      'The Orchid Grove painting began as a plein air sketch of a windswept tree. Adding the oversized blooms made the scene feel almost musical—like the petals were singing back to the clouds.',
    imageUrl: getImageUrl('/images/orchid-grove.jpg')
  }
];
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
  },
  {
    id: '10',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 850,
    description:
      'A vibrant composition showcasing the artist\'s unique style and color palette.',
    imageUrl: getImageUrl('/images/joyousfineart_1504305578_1594553220940073388_5975015959.jpg'),
    dimensions: '16x20"',
    year: '2023'
  },
  {
    id: '11',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 920,
    description:
      'An expressive piece featuring rich textures and dynamic color relationships.',
    imageUrl: getImageUrl('/images/joyousfineart_1504581774_1596870122391653530_5975015959.jpg'),
    dimensions: '18x24"',
    year: '2023'
  },
  {
    id: '12',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 780,
    description:
      'A captivating work that explores the interplay of light and form.',
    imageUrl: getImageUrl('/images/joyousfineart_1505659206_1605908278403321496_5975015959.jpg'),
    dimensions: '14x18"',
    year: '2023'
  },
  {
    id: '13',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 1100,
    description:
      'A bold composition with striking color contrasts and fluid brushwork.',
    imageUrl: getImageUrl('/images/joyousfineart_1505782419_1606941865403704731_5975015959.jpg'),
    dimensions: '20x24"',
    year: '2023'
  },
  {
    id: '14',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 950,
    description:
      'An intricate piece that invites close observation of its layered details.',
    imageUrl: getImageUrl('/images/joyousfineart_1512950688_1667073657087136339_5975015959.jpg'),
    dimensions: '16x20"',
    year: '2023'
  },
  {
    id: '15',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 1050,
    description:
      'A harmonious blend of colors creating a sense of movement and depth.',
    imageUrl: getImageUrl('/images/joyousfineart_1516864749_1699907183263954578_5975015959.jpg'),
    dimensions: '18x24"',
    year: '2023'
  },
  {
    id: '16',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 1200,
    description:
      'A vibrant exploration of texture and color with expressive mark-making.',
    imageUrl: getImageUrl('/images/joyousfineart_1616916895_2539205419040271192_5975015959.jpg'),
    dimensions: '20x24"',
    year: '2024'
  },
  {
    id: '17',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 880,
    description:
      'A contemplative piece that balances bold gestures with subtle nuances.',
    imageUrl: getImageUrl('/images/joyousfineart_1617342476_2542775450584075262_5975015959.jpg'),
    dimensions: '16x20"',
    year: '2024'
  },
  {
    id: '18',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 1300,
    description:
      'An energetic composition that captures the essence of creative expression.',
    imageUrl: getImageUrl('/images/joyousfineart_1625553310_2611652918774258395_5975015959.jpg'),
    dimensions: '22x28"',
    year: '2024'
  },
  {
    id: '19',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 1000,
    description:
      'A sophisticated work that demonstrates masterful color harmony and composition.',
    imageUrl: getImageUrl('/images/joyousfineart_1631926232_2665112862869352949_5975015959.jpg'),
    dimensions: '18x24"',
    year: '2024'
  },
  {
    id: '20',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 1150,
    description:
      'A dynamic piece that showcases the artist\'s evolving style and technique.',
    imageUrl: getImageUrl('/images/joyousfineart_1645649749_2780234064576408073_5975015959.jpg'),
    dimensions: '20x24"',
    year: '2024'
  },
  {
    id: '21',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 990,
    description:
      'An engaging work that invites viewers to discover new details with each viewing.',
    imageUrl: getImageUrl('/images/joyousfineart_1648925584_2807713765686931563_5975015959.jpg'),
    dimensions: '16x20"',
    year: '2024'
  },
  {
    id: '22',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 1250,
    description:
      'A compelling composition that balances structure with organic flow.',
    imageUrl: getImageUrl('/images/joyousfineart_1662595407_2922384552052014140_5975015959.jpg'),
    dimensions: '20x24"',
    year: '2024'
  },
  {
    id: '23',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 1100,
    description:
      'A vibrant piece that celebrates the joy of artistic creation and color.',
    imageUrl: getImageUrl('/images/joyousfineart_1673011850_3009764003379229749_5975015959.jpg'),
    dimensions: '18x24"',
    year: '2024'
  },
  {
    id: '24',
    title: 'Untitled Artwork',
    category: 'Abstract',
    price: 1350,
    description:
      'A contemporary work that pushes the boundaries of abstract expression.',
    imageUrl: getImageUrl('/images/joyousfineart_1739916666_3571002282428906908_5975015959.webp'),
    dimensions: '24x30"',
    year: '2025'
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
import { Artwork, BlogPost, Event } from './types';
import { getImageUrl } from './utils/imageUrl';
import { discoverArtworksSync } from './utils/discoverArtworks';

// Real Angelique Mohs artwork photography copied into /public/images
const baseArtworks: Artwork[] = [
  {
    id: '1',
    title: 'Resting Tiger',
    category: 'Wildlife',
    price: 1250,
    description:
      'A powerful close-up portrait capturing a tiger in a moment of peaceful repose. The majestic creature\'s eyes are heavy with sleep, its striped fur rendered in rich ember oranges that transition into deep midnight blues. The painting conveys both the animal\'s strength and its vulnerability, with soft brushstrokes creating a dreamlike atmosphere. The background dissolves into shadow, allowing the tiger\'s expressive face to command the viewer\'s attention.',
    imageUrl: getImageUrl('/images/resting-tiger.jpg'),
    dimensions: '18x24"',
    year: '2020',
    available: true
  },
  {
    id: '2',
    title: 'Bubble Watcher',
    category: 'Wildlife',
    price: 640,
    description:
      'A whimsical scene featuring Angelique\'s white studio cat, its eyes wide with curiosity as it watches iridescent bubbles float through the air. The composition is bathed in a soft lavender haze, with dappled afternoon light filtering through the scene. The cat\'s white fur is rendered with delicate highlights, and the bubbles catch prismatic colors that dance across their surfaces. This intimate moment captures the playful interaction between pet and environment.',
    imageUrl: getImageUrl('/images/bubble-watcher.jpg'),
    dimensions: '11x14"',
    year: '2021',
    available: true
  },
  {
    id: '3',
    title: 'River Stone Study',
    category: 'Abstract',
    price: 880,
    description:
      'An intimate arrangement of smooth river stones, each one carefully rendered with jewel-toned colors—deep amethysts, turquoise, and amber. The pebbles are painted with glassy highlights that suggest water-worn surfaces, creating a sense of depth and texture. Inspired by jars of stones collected during road trips, this piece celebrates the beauty found in nature\'s small treasures. The composition invites close inspection, revealing subtle color variations and organic forms.',
    imageUrl: getImageUrl('/images/abstract.jpg'),
    dimensions: '16x20"',
    year: '2022',
    available: true
  },
  {
    id: '4',
    title: 'Listening Raven',
    category: 'Wildlife',
    price: 450,
    description:
      'A solitary raven perches on a weathered branch, silhouetted against a violet dusk sky. The bird\'s head is tilted, as if listening intently to some distant sound. Painted on wood with feathery brushwork, the raven\'s dark plumage is accented with copper undertones that catch the fading light. The composition captures the intelligence and mystery of this corvid, with the evening atmosphere creating a contemplative mood.',
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
      'An expansive, vibrant composition featuring a dense constellation of river stones that seem to glow from within. The pebbles are rendered in electrifying neon pinks, deep sapphires, and brilliant emerald greens, creating a jewel-like mosaic across the canvas. Each stone is carefully detailed with highlights and shadows, while the overall arrangement suggests both chaos and harmony. The painting radiates energy and joy, transforming ordinary stones into a celebration of color and form.',
    imageUrl: getImageUrl('/images/joyous-pebbles.jpg'),
    dimensions: '30x36"',
    year: '2021',
    available: true
  },
  {
    id: '6',
    title: 'Open Sky Portrait',
    category: 'Portrait',
    price: 980,
    description:
      'A portrait capturing pure, unadulterated joy. The subject\'s eyes are closed, face tilted upward toward an unseen sky, with a serene smile that suggests complete contentment. Painted in airy glazes of soft blue and lilac, the skin tones are luminous and ethereal. The background dissolves into a dreamy wash of color, emphasizing the subject\'s peaceful expression. This painting embodies a moment of perfect happiness and freedom.',
    imageUrl: getImageUrl('/images/open-sky-portrait.jpg'),
    dimensions: '18x24"',
    year: '2021',
    available: true
  },
  {
    id: '7',
    title: 'Orchid Grove',
    category: 'Botanical',
    price: 760,
    description:
      'A surreal botanical landscape where oversized magenta orchids bloom alongside windswept trees under a swirling teal sky. The composition blends reality with fantasy, creating a dreamlike garden scene. The orchids\' delicate petals are rendered with intricate detail, while the trees bend and flow with organic movement. The teal sky above adds an otherworldly quality, suggesting a place where nature\'s beauty is amplified and transformed.',
    imageUrl: getImageUrl('/images/orchid-grove.jpg'),
    dimensions: '14x14"',
    year: '2022',
    available: true
  },
  {
    id: '8',
    title: 'Emerald Lion',
    category: 'Wildlife',
    price: 1150,
    description:
      'A regal lion emerges from deep shadow, its powerful form modeled in layers of emerald and chartreuse oils. The unusual color palette transforms this majestic predator into something both familiar and fantastical. The lion\'s mane is rendered with flowing strokes of green, while its eyes hold an intense, knowing gaze. The contrast between the dark background and the vibrant greens creates a dramatic, almost mystical presence.',
    imageUrl: getImageUrl('/images/emerald-lion.jpg'),
    dimensions: '20x24"',
    year: '2022',
    available: true
  },
  {
    id: '9',
    title: 'Three Tulips',
    category: 'Botanical',
    price: 520,
    description:
      'A delicate still-life featuring three blush-colored tulips arranged in a clear glass vase. The flowers are painted alla prima with soft, blended edges that capture their velvety texture. Each tulip is at a different stage of bloom, creating visual interest and natural variation. The glass vase reflects light beautifully, and the simple composition allows the viewer to appreciate the subtle color gradations in the petals, from pale pink to deeper rose.',
    imageUrl: getImageUrl('/images/three-tulips.jpg'),
    dimensions: '10x10"',
    year: '2021',
    available: true
  },
  {
    id: '10',
    title: 'Serene Reflection',
    category: 'Portrait',
    price: 850,
    description:
      'A contemplative portrait that captures a moment of quiet introspection. The subject\'s expression is peaceful and thoughtful, with soft lighting that creates gentle shadows across the face. The painting emphasizes the subject\'s inner calm, with a muted color palette that suggests tranquility. The composition is intimate, drawing the viewer into a shared moment of reflection and peace.',
    imageUrl: getImageUrl('/images/sketch_woman.jpg'),
    dimensions: '16x20"',
    year: '2023'
  },
  {
    id: '12',
    title: 'Gentle Gaze',
    category: 'Portrait',
    price: 780,
    description:
      'A captivating portrait that masterfully explores the interplay of light and shadow across the subject\'s features. The gentle gaze of the sitter reveals depth and character, with careful attention to the subtle nuances of expression. The lighting creates a soft, flattering effect that highlights the subject\'s natural beauty while revealing their inner world through the eyes.',
    imageUrl: getImageUrl('/images/cat.jpg'),
    dimensions: '14x18"',
    year: '2023'
  },
  {
    id: '13',
    title: 'Abstract Flow',
    category: 'Abstract',
    price: 1100,
    description:
      'A bold abstract composition featuring striking color contrasts that create visual tension and energy. Fluid brushwork suggests movement and flow, with colors bleeding into one another in organic patterns. The painting balances warm and cool tones, creating a dynamic push-pull effect. The gestural marks suggest both control and spontaneity, capturing a moment of creative expression.',
    imageUrl: getImageUrl('/images/flowers.jpg'),
    dimensions: '20x24"',
    year: '2023'
  },
  {
    id: '14',
    title: 'Wildflower Meadow',
    category: 'Botanical',
    price: 950,
    description:
      'An intricate botanical composition featuring a lush meadow of wildflowers in full bloom. Each flower is rendered with careful attention to detail, from delicate petals to textured leaves. The painting invites close observation, revealing layered botanical details and natural textures that create a sense of depth. The color palette ranges from soft pastels to vibrant hues, suggesting a sun-drenched field in spring.',
    imageUrl: getImageUrl('/images/rose.jpg'),
    dimensions: '16x20"',
    year: '2023'
  },
  {
    id: '15',
    title: 'Harmony in Motion',
    category: 'Abstract',
    price: 1050,
    description:
      'An abstract work that achieves perfect harmony through a carefully balanced blend of colors. The composition creates a sense of movement and depth, with colors flowing seamlessly across the canvas. The painting suggests rhythm and flow, as if capturing a moment of visual music. The layering technique creates depth, allowing colors to interact and create new visual relationships.',
    imageUrl: getImageUrl('/images/cherries.jpg'),
    dimensions: '18x24"',
    year: '2023'
  },
  {
    id: '16',
    title: 'Textural Landscape',
    category: 'Abstract',
    price: 1200,
    description:
      'A vibrant abstract landscape that explores texture and color through expressive mark-making. The painting creates a sense of place through abstracted forms that suggest natural elements—perhaps rolling hills, flowing water, or shifting clouds. Rich textures are built up through layers of paint, creating tactile surfaces that invite both visual and imagined touch. The color palette is earthy yet vibrant, grounding the abstract forms in natural references.',
    imageUrl: getImageUrl('/images/bell_peppers.jpg'),
    dimensions: '20x24"',
    year: '2024',
    available: true
  },
  {
    id: '17',
    title: 'Portrait Study',
    category: 'Portrait',
    price: 880,
    description:
      'A contemplative portrait study that demonstrates the artist\'s skill in capturing human expression. The painting balances bold, confident brushstrokes with subtle nuances that reveal the subject\'s character and emotion. The composition is carefully considered, with attention to proportion and lighting that creates a lifelike presence. The color palette is restrained yet expressive, allowing the subject\'s personality to shine through.',
    imageUrl: getImageUrl('/images/sunglasses.jpg'),
    dimensions: '16x20"',
    year: '2024'
  },
  {
    id: '18',
    title: 'Energetic Composition',
    category: 'Abstract',
    price: 1300,
    description:
      'A large-scale abstract work that pulses with energy and creative expression. Dynamic forms and bold colors collide across the canvas, creating a sense of movement and vitality. The composition is both structured and spontaneous, suggesting the artist\'s process of discovery. The painting captures a moment of pure creative energy, with each mark contributing to an overall sense of visual excitement and possibility.',
    imageUrl: getImageUrl('/images/grapes.jpg'),
    dimensions: '22x28"',
    year: '2024'
  },
  {
    id: '19',
    title: 'Portrait of Contemplation',
    category: 'Portrait',
    price: 1000,
    description:
      'A sophisticated portrait that demonstrates masterful color harmony and composition. The subject\'s expression suggests deep thought and introspection, with the painting revealing layers of emotion through careful color choices and brushwork. The composition is elegant and balanced, drawing attention to the subject\'s face while creating a sense of depth through subtle background elements. The overall effect is both intimate and universal.',
    imageUrl: getImageUrl('/images/skull.jpg'),
    dimensions: '18x24"',
    year: '2024'
  },
  {
    id: '20',
    title: 'Stephen Curry',
    category: 'Portrait',
    price: 1150,
    description:
      'A dynamic portrait capturing the intensity and focus of basketball legend Stephen Curry. The painting showcases the athlete\'s determined expression and signature style, rendered with bold brushstrokes that convey both movement and precision. The composition emphasizes Curry\'s iconic presence, with careful attention to capturing his characteristic features and the energy he brings to the court. The color choices are vibrant yet balanced, creating a powerful representation of one of basketball\'s greatest players.',
    imageUrl: getImageUrl('/images/Gemini_Generated_Image_m5q7y7m5q7y7m5q7.png'),
    dimensions: '20x24"',
    year: '2024'
  },
  {
    id: '21',
    title: 'Blue Fish Among Pebbles',
    category: 'Wildlife',
    price: 950,
    description:
      'A vibrant, stylized painting featuring a graceful blue fish swimming through a colorful underwater landscape of rounded pebbles. The fish, rendered in shades of sky blue with pink and purple fins, curves dynamically across the canvas. The composition uses bold black outlines and jewel-toned colors to create a stained-glass effect, transforming the aquatic scene into a celebration of color and movement.',
    imageUrl: getImageUrl('/images/blue_fish.jpg'),
    dimensions: '16x20"',
    year: '2024',
    available: true
  },
  {
    id: '22',
    title: 'Nocturnal Reflection',
    category: 'Abstract',
    price: 1100,
    description:
      'A moody, impressionistic cityscape capturing the quiet beauty of urban night. Dark buildings with illuminated windows stand behind a reflective body of water, their forms distorted in the rippling surface. A gnarled tree branch frames the scene from the foreground, while heavy clouds fill the twilight sky. The painting conveys a contemplative atmosphere through expressive brushwork and a palette of deep blues, grays, and muted reds.',
    imageUrl: getImageUrl('/images/building.jpg'),
    dimensions: '18x24"',
    year: '2024',
    available: true
  },
  {
    id: '23',
    title: 'Portrait of a Black Dog',
    category: 'Wildlife',
    price: 720,
    description:
      'An intimate close-up portrait of a black dog, captured in a moment of alert contentment. The dog\'s head is rendered with rich, multi-tonal blacks accented by subtle blue and teal highlights that define the contours of its fur. The striking amber eye provides a warm focal point, while the slightly open mouth reveals a pink tongue. The dark background emphasizes the subject\'s form, creating a powerful and expressive animal portrait.',
    imageUrl: getImageUrl('/images/dog.jpg'),
    dimensions: '14x18"',
    year: '2024',
    available: true
  },
  {
    id: '24',
    title: 'Still Life Study',
    category: 'Abstract',
    price: 580,
    description:
      'A moody black and white pen-and-ink drawing rendered on lined notebook paper, featuring a carefully composed still life arrangement. The work showcases masterful cross-hatching techniques to create texture and depth, with light-colored spheres, an elegant S-curved object, and draped fabric elements arranged against a dark, heavily textured background. The drawing demonstrates sophisticated use of light and shadow to define form and create atmosphere.',
    imageUrl: getImageUrl('/images/orange_peeling.jpg'),
    dimensions: '11x14"',
    year: '2023',
    available: true
  },
  {
    id: '25',
    title: 'Terrarium Garden',
    category: 'Botanical',
    price: 840,
    description:
      'A charming still-life painting featuring two glass terrariums filled with vibrant green plant life. The larger container on the left displays lush ferns and mosses climbing upward, while the smaller jar on the right contains a palm-like plant and a miniature hut structure. Both terrariums rest on a textured light surface, with their transparent glass rendered with delicate highlights. The painting celebrates the beauty of miniature ecosystems and the careful art of terrarium design.',
    imageUrl: getImageUrl('/images/terrarium.jpg'),
    dimensions: '16x20"',
    year: '2024',
    available: true
  }
];

// Auto-discover new images from public/images/ and merge with existing artworks
export const artworks: Artwork[] = discoverArtworksSync(baseArtworks);

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

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Spring Gallery Opening',
    date: new Date('2025-03-15'),
    time: '6:00 PM - 9:00 PM',
    location: 'Downtown Art Gallery, San Francisco',
    description: 'Join us for the opening reception of the Spring Collection featuring new botanical works.',
    type: 'exhibition'
  },
  {
    id: '2',
    title: 'Portrait Painting Workshop',
    date: new Date('2025-03-22'),
    time: '10:00 AM - 4:00 PM',
    location: 'Studio Workshop Space',
    description: 'Learn portrait painting techniques in this hands-on workshop. All skill levels welcome.',
    type: 'workshop'
  },
  {
    id: '3',
    title: 'Open Studio Day',
    date: new Date('2025-04-05'),
    time: '12:00 PM - 6:00 PM',
    location: 'Artist Studio',
    description: 'Visit the studio and see works in progress. Meet the artist and explore the creative process.',
    type: 'open-studio'
  },
  {
    id: '4',
    title: 'Art Fair - Spring Market',
    date: new Date('2025-04-12'),
    time: '10:00 AM - 6:00 PM',
    location: 'Golden Gate Park, San Francisco',
    description: 'Outdoor art fair featuring original works and prints. Special pricing on select pieces.',
    type: 'sale'
  },
  {
    id: '5',
    title: 'Wildlife Series Exhibition',
    date: new Date('2025-05-01'),
    time: '5:00 PM - 8:00 PM',
    location: 'Nature Museum Gallery',
    description: 'Opening reception for the Wildlife Series, showcasing animal portraits and natural scenes.',
    type: 'exhibition'
  },
  {
    id: '6',
    title: 'Abstract Techniques Workshop',
    date: new Date('2025-05-10'),
    time: '1:00 PM - 5:00 PM',
    location: 'Community Art Center',
    description: 'Explore abstract painting techniques and color theory in this interactive workshop.',
    type: 'workshop'
  }
];
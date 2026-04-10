import { Product } from '../types';

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const wallArtProducts: Product[] = [
  {
    id: 201,
    title: "Monochrome Maze",
    slug: slugify("Monochrome Maze"),
    category: "wall-art",
    price: 1699,
    sizes: [
      { label: 'A3', price: 1699 },
      { label: 'A2', price: 2499 },
      { label: 'A1', price: 4499 },
      { label: 'A0', price: 8999 }
    ],
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/v1775399709/ChatGPT_Image_Mar_29_2026_06_11_05_PM_qayowp.png",
    description: "A complex interplay of lines and shadows, this monochrome piece invites the viewer into a labyrinth of thought and emotion. Perfect for modern, minimalist spaces.",
    images: [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/v1775399709/ChatGPT_Image_Mar_29_2026_06_11_05_PM_qayowp.png",
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399707/ChatGPT_Image_Mar_29_2026_07_06_28_PM_dmr6vc.png",
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399707/ChatGPT_Image_Mar_29_2026_07_03_04_PM_gxipso.png"
    ]
  },
  {
    id: 202,
    title: "Contrasting Strokes",
    slug: slugify("Contrasting Strokes"),
    category: "wall-art",
    price: 1699,
    sizes: [
      { label: 'A3', price: 1699 },
      { label: 'A2', price: 2499 },
      { label: 'A1', price: 4499 },
      { label: 'A0', price: 8999 }
    ],
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399707/ChatGPT_Image_Mar_29_2026_07_06_28_PM_dmr6vc.png",
    description: "Bold, expressive brushstrokes create a dynamic tension between light and dark. This piece captures the raw energy of contemporary artistic expression.",
    images: [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399707/ChatGPT_Image_Mar_29_2026_07_06_28_PM_dmr6vc.png",
      "https://res.cloudinary.com/drkrtf8mm/image/upload/v1775399709/ChatGPT_Image_Mar_29_2026_06_11_05_PM_qayowp.png",
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399693/ChatGPT_Image_Mar_29_2026_06_08_03_PM_bl18so.png"
    ]
  },
  {
    id: 203,
    title: "Silhouette Profile",
    slug: slugify("Silhouette Profile"),
    category: "wall-art",
    price: 1699,
    sizes: [
      { label: 'A3', price: 1699 },
      { label: 'A2', price: 2499 },
      { label: 'A1', price: 4499 },
      { label: 'A0', price: 8999 }
    ],
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399707/ChatGPT_Image_Mar_29_2026_07_03_04_PM_gxipso.png",
    description: "A minimalist silhouette that speaks volumes through its simplicity. This portrait captures the essence of form and identity with a single, elegant curve.",
    images: [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399707/ChatGPT_Image_Mar_29_2026_07_03_04_PM_gxipso.png",
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399689/ChatGPT_Image_Apr_4_2026_01_35_34_PM_eej0yu.png"
    ]
  },
  {
    id: 204,
    title: "Abstract Flow",
    slug: slugify("Abstract Flow"),
    category: "wall-art",
    price: 1699,
    sizes: [
      { label: 'A3', price: 1699 },
      { label: 'A2', price: 2499 },
      { label: 'A1', price: 4499 },
      { label: 'A0', price: 8999 }
    ],
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399693/ChatGPT_Image_Mar_29_2026_06_08_03_PM_bl18so.png",
    description: "Fluid shapes and soft gradients merge in this abstract masterpiece, evoking a sense of calm and continuous movement.",
    images: [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399693/ChatGPT_Image_Mar_29_2026_06_08_03_PM_bl18so.png",
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399688/ChatGPT_Image_Apr_4_2026_01_31_17_PM_qlfehc.png"
    ]
  },
  {
    id: 205,
    title: "Minimalist Figure",
    slug: slugify("Minimalist Figure"),
    category: "wall-art",
    price: 1699,
    sizes: [
      { label: 'A3', price: 1699 },
      { label: 'A2', price: 2499 },
      { label: 'A1', price: 4499 },
      { label: 'A0', price: 8999 }
    ],
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399689/ChatGPT_Image_Apr_4_2026_01_35_34_PM_eej0yu.png",
    description: "Elegant line art that celebrates the human form with minimal strokes. A timeless addition to any gallery wall.",
    images: [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399689/ChatGPT_Image_Apr_4_2026_01_35_34_PM_eej0yu.png",
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399707/ChatGPT_Image_Mar_29_2026_07_03_04_PM_gxipso.png"
    ]
  },
  {
    id: 206,
    title: "Geometric Harmony",
    slug: slugify("Geometric Harmony"),
    category: "wall-art",
    price: 1699,
    sizes: [
      { label: 'A3', price: 1699 },
      { label: 'A2', price: 2499 },
      { label: 'A1', price: 4499 },
      { label: 'A0', price: 8999 }
    ],
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399689/ChatGPT_Image_Apr_4_2026_01_34_17_PM_ewwq91.png",
    description: "Perfectly balanced geometric shapes create a sense of order and serenity. This piece is a study in symmetry and color theory.",
    images: [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399689/ChatGPT_Image_Apr_4_2026_01_34_17_PM_ewwq91.png",
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399680/Gemini_Generated_Image_llv3o6llv3o6llv3_sbsujv.png"
    ]
  },
  {
    id: 207,
    title: "Ethereal Landscape",
    slug: slugify("Ethereal Landscape"),
    category: "wall-art",
    price: 1699,
    sizes: [
      { label: 'A3', price: 1699 },
      { label: 'A2', price: 2499 },
      { label: 'A1', price: 4499 },
      { label: 'A0', price: 8999 }
    ],
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399680/Gemini_Generated_Image_llv3o6llv3o6llv3_sbsujv.png",
    description: "A dreamlike depiction of nature's beauty, blending soft colors and misty horizons.",
    images: [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399680/Gemini_Generated_Image_llv3o6llv3o6llv3_sbsujv.png"
    ]
  },
  {
    id: 208,
    title: "Urban Rhythm",
    slug: slugify("Urban Rhythm"),
    category: "wall-art",
    price: 1699,
    sizes: [
      { label: 'A3', price: 1699 },
      { label: 'A2', price: 2499 },
      { label: 'A1', price: 4499 },
      { label: 'A0', price: 8999 }
    ],
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399670/ChatGPT_Image_Apr_4_2026_01_31_17_PM_pl90eo.png",
    description: "Capturing the vibrant pulse of the city through abstract shapes and dynamic compositions.",
    images: [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399670/ChatGPT_Image_Apr_4_2026_01_31_17_PM_pl90eo.png"
    ]
  },
  {
    id: 209,
    title: "Serene Solitude",
    slug: slugify("Serene Solitude"),
    category: "wall-art",
    price: 1699,
    sizes: [
      { label: 'A3', price: 1699 },
      { label: 'A2', price: 2499 },
      { label: 'A1', price: 4499 },
      { label: 'A0', price: 8999 }
    ],
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399648/ChatGPT_Image_Apr_3_2026_02_14_59_PM_gxrbmp.png",
    description: "A peaceful minimalist piece that evokes a sense of quiet reflection and calm.",
    images: [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399648/ChatGPT_Image_Apr_3_2026_02_14_59_PM_gxrbmp.png"
    ]
  },
  {
    id: 210,
    title: "Golden Horizon",
    slug: slugify("Golden Horizon"),
    category: "wall-art",
    price: 1699,
    sizes: [
      { label: 'A3', price: 1699 },
      { label: 'A2', price: 2499 },
      { label: 'A1', price: 4499 },
      { label: 'A0', price: 8999 }
    ],
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399632/ChatGPT_Image_Apr_3_2026_02_10_45_PM_hwcyw8.png",
    description: "Warm tones and sweeping lines create a breathtaking view of an abstract sunset.",
    images: [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399632/ChatGPT_Image_Apr_3_2026_02_10_45_PM_hwcyw8.png"
    ]
  },
  {
    id: 211,
    title: "Midnight Echo",
    slug: slugify("Midnight Echo"),
    category: "wall-art",
    price: 1699,
    sizes: [
      { label: 'A3', price: 1699 },
      { label: 'A2', price: 2499 },
      { label: 'A1', price: 4499 },
      { label: 'A0', price: 8999 }
    ],
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399618/ChatGPT_Image_Apr_3_2026_01_50_02_PM_jckeqm.png",
    description: "Deep blues and subtle textures interact in this mysterious and atmospheric abstract work.",
    images: [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399618/ChatGPT_Image_Apr_3_2026_01_50_02_PM_jckeqm.png"
    ]
  },
  {
    id: 212,
    title: "Floral Whisper",
    slug: slugify("Floral Whisper"),
    category: "wall-art",
    price: 1699,
    sizes: [
      { label: 'A3', price: 1699 },
      { label: 'A2', price: 2499 },
      { label: 'A1', price: 4499 },
      { label: 'A0', price: 8999 }
    ],
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399689/ChatGPT_Image_Apr_4_2026_01_24_04_PM_ndmd5b.png",
    description: "Delicate botanical forms rendered with a soft, contemporary touch.",
    images: [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399689/ChatGPT_Image_Apr_4_2026_01_24_04_PM_ndmd5b.png"
    ]
  },
  {
    id: 213,
    title: "Oceanic Bliss",
    slug: slugify("Oceanic Bliss"),
    category: "wall-art",
    price: 1699,
    sizes: [{ label: 'A3', price: 1699 }, { label: 'A2', price: 2499 }, { label: 'A1', price: 4499 }, { label: 'A0', price: 8999 }],
    image: "https://images.unsplash.com/photo-1505118380757-91f5f45d8de4?q=80&w=800&auto=format&fit=crop",
    description: "The serene beauty of the ocean, captured in a minimalist abstract style.",
    images: ["https://images.unsplash.com/photo-1505118380757-91f5f45d8de4?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 214,
    title: "Mountain Echo",
    slug: slugify("Mountain Echo"),
    category: "wall-art",
    price: 1699,
    sizes: [{ label: 'A3', price: 1699 }, { label: 'A2', price: 2499 }, { label: 'A1', price: 4499 }, { label: 'A0', price: 8999 }],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    description: "A majestic mountain range reflecting in a still lake, a study in symmetry and peace.",
    images: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 215,
    title: "Urban Pulse",
    slug: slugify("Urban Pulse"),
    category: "wall-art",
    price: 1699,
    sizes: [{ label: 'A3', price: 1699 }, { label: 'A2', price: 2499 }, { label: 'A1', price: 4499 }, { label: 'A0', price: 8999 }],
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
    description: "The vibrant energy of a city at night, captured through abstract light trails.",
    images: ["https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 216,
    title: "Desert Silence",
    slug: slugify("Desert Silence"),
    category: "wall-art",
    price: 1699,
    sizes: [{ label: 'A3', price: 1699 }, { label: 'A2', price: 2499 }, { label: 'A1', price: 4499 }, { label: 'A0', price: 8999 }],
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=800&auto=format&fit=crop",
    description: "The stark and beautiful landscape of a desert at twilight.",
    images: ["https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 217,
    title: "Forest Haven",
    slug: slugify("Forest Haven"),
    category: "wall-art",
    price: 1699,
    sizes: [{ label: 'A3', price: 1699 }, { label: 'A2', price: 2499 }, { label: 'A1', price: 4499 }, { label: 'A0', price: 8999 }],
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
    description: "A lush and green forest scene that brings a sense of calm and vitality.",
    images: ["https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 218,
    title: "Celestial Dance",
    slug: slugify("Celestial Dance"),
    category: "wall-art",
    price: 1699,
    sizes: [{ label: 'A3', price: 1699 }, { label: 'A2', price: 2499 }, { label: 'A1', price: 4499 }, { label: 'A0', price: 8999 }],
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800&auto=format&fit=crop",
    description: "The mesmerizing beauty of the night sky, a dance of stars and nebulae.",
    images: ["https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 219,
    title: "Golden Fields",
    slug: slugify("Golden Fields"),
    category: "wall-art",
    price: 1699,
    sizes: [{ label: 'A3', price: 1699 }, { label: 'A2', price: 2499 }, { label: 'A1', price: 4499 }, { label: 'A0', price: 8999 }],
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop",
    description: "A warm and inviting landscape of golden wheat fields at sunset.",
    images: ["https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop"]
  },
  {
    id: 220,
    title: "Winter Solace",
    slug: slugify("Winter Solace"),
    category: "wall-art",
    price: 1699,
    sizes: [{ label: 'A3', price: 1699 }, { label: 'A2', price: 2499 }, { label: 'A1', price: 4499 }, { label: 'A0', price: 8999 }],
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop",
    description: "The quiet and serene beauty of a snow-covered landscape.",
    images: ["https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop"]
  }
];


const posterProducts: Product[] = [
  {
    "id": 637,
    "title": "Peace",
    "slug": "peace",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_1_iojf50.jpg",
    "description": "Peace - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_1_iojf50.jpg"
    ],
    "order": 1
  },
  {
    "id": 642,
    "title": "Plastic",
    "slug": "plastic",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/__A_portrait_of_a_male_character_in_big_red_glasses_made_up_of_large_plastic_parts_toy_black_and_red_colors___lis1xd.jpg",
    "description": "Plastic - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/__A_portrait_of_a_male_character_in_big_red_glasses_made_up_of_large_plastic_parts_toy_black_and_red_colors___lis1xd.jpg"
    ],
    "order": 1
  },
  {
    "id": 634,
    "title": "Chaos",
    "slug": "chaos",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_2_cfje1b.jpg",
    "description": "Chaos - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_2_cfje1b.jpg"
    ],
    "order": 2
  },
  {
    "id": 602,
    "title": "Sailor",
    "slug": "sailor",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557140/Popeye_the_Sailor___Basquiat-Inspired_Street_Art_Portrait_fyfu2u.jpg",
    "description": "Sailor - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557140/Popeye_the_Sailor___Basquiat-Inspired_Street_Art_Portrait_fyfu2u.jpg"
    ],
    "order": 2
  },
  {
    "id": 604,
    "title": "Premium",
    "slug": "premium",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557140/Photo_Premium_AI-generated_blc2sl.jpg",
    "description": "Premium - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557140/Photo_Premium_AI-generated_blc2sl.jpg"
    ],
    "order": 2
  },
  {
    "id": 639,
    "title": "Cyber",
    "slug": "cyber",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/AI_ART_ge2nvq.jpg",
    "description": "Cyber - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/AI_ART_ge2nvq.jpg"
    ],
    "order": 2
  },
  {
    "id": 638,
    "title": "Vibe",
    "slug": "vibe",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_3_xkbbqq.jpg",
    "description": "Vibe - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_3_xkbbqq.jpg"
    ],
    "order": 3
  },
  {
    "id": 606,
    "title": "Legend",
    "slug": "legend",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557139/Lionel_Messi_ejtm3k.jpg",
    "description": "Legend - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557139/Lionel_Messi_ejtm3k.jpg"
    ],
    "order": 3
  },
  {
    "id": 635,
    "title": "Rhythm",
    "slug": "rhythm",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_4_zc2fkh.jpg",
    "description": "Rhythm - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_4_zc2fkh.jpg"
    ],
    "order": 4
  },
  {
    "id": 600,
    "title": "Glamour",
    "slug": "glamour",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557142/Vivid_Red_Glamour_vgrg4f.jpg",
    "description": "Glamour - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557142/Vivid_Red_Glamour_vgrg4f.jpg"
    ],
    "order": 4
  },
  {
    "id": 633,
    "title": "Lion",
    "slug": "lion",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_5_st6ggp.jpg",
    "description": "Lion - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_5_st6ggp.jpg"
    ],
    "order": 5
  },
  {
    "id": 636,
    "title": "Neon",
    "slug": "neon",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_6_d0pclc.jpg",
    "description": "Neon - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_6_d0pclc.jpg"
    ],
    "order": 6
  },
  {
    "id": 631,
    "title": "Retro",
    "slug": "retro",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557125/download_7_usxj38.jpg",
    "description": "Retro - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557125/download_7_usxj38.jpg"
    ],
    "order": 7
  },
  {
    "id": 641,
    "title": "Champion",
    "slug": "champion",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/Cr7_Art_k2rrrl.jpg",
    "description": "Champion - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/Cr7_Art_k2rrrl.jpg"
    ],
    "order": 7
  },
  {
    "id": 632,
    "title": "Abstract",
    "slug": "abstract",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557125/download_8_kejig1.jpg",
    "description": "Abstract - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557125/download_8_kejig1.jpg"
    ],
    "order": 8
  },
  {
    "id": 630,
    "title": "Minimal",
    "slug": "minimal",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557126/download_9_zvopir.jpg",
    "description": "Minimal - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557126/download_9_zvopir.jpg"
    ],
    "order": 9
  },
  {
    "id": 603,
    "title": "Wallpaper",
    "slug": "wallpaper",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557140/New_Wallpaper_jpitw9.jpg",
    "description": "Wallpaper - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557140/New_Wallpaper_jpitw9.jpg"
    ],
    "order": 9
  },
  {
    "id": 608,
    "title": "Hunter",
    "slug": "hunter",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557137/Hunter_qw9wbh.jpg",
    "description": "Hunter - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557137/Hunter_qw9wbh.jpg"
    ],
    "order": 9
  },
  {
    "id": 628,
    "title": "Geometry",
    "slug": "geometry",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557127/download_10_oy9prj.jpg",
    "description": "Geometry - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557127/download_10_oy9prj.jpg"
    ],
    "order": 10
  },
  {
    "id": 655,
    "title": "Illusion",
    "slug": "illusion",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731711/11_hedx4g.png",
    "description": "Illusion - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731711/11_hedx4g.png"
    ],
    "order": 11
  },
  {
    "id": 629,
    "title": "Dream",
    "slug": "dream",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557127/download_11_obqxg5.jpg",
    "description": "Dream - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557127/download_11_obqxg5.jpg"
    ],
    "order": 11
  },
  {
    "id": 627,
    "title": "Echo",
    "slug": "echo",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557127/download_12_xw1jrj.jpg",
    "description": "Echo - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557127/download_12_xw1jrj.jpg"
    ],
    "order": 12
  },
  {
    "id": 654,
    "title": "Pulse",
    "slug": "pulse",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731712/13_dklr9s.png",
    "description": "Pulse - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731712/13_dklr9s.png"
    ],
    "order": 13
  },
  {
    "id": 626,
    "title": "Aura",
    "slug": "aura",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557128/download_13_ysyb3a.jpg",
    "description": "Aura - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557128/download_13_ysyb3a.jpg"
    ],
    "order": 13
  },
  {
    "id": 625,
    "title": "Zenith",
    "slug": "zenith",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557128/download_14_yy9ha7.jpg",
    "description": "Zenith - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557128/download_14_yy9ha7.jpg"
    ],
    "order": 14
  },
  {
    "id": 653,
    "title": "Horizon",
    "slug": "horizon",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731713/15_dnycbg.png",
    "description": "Horizon - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731713/15_dnycbg.png"
    ],
    "order": 15
  },
  {
    "id": 623,
    "title": "Eclipse",
    "slug": "eclipse",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557129/download_16_rjpfvv.jpg",
    "description": "Eclipse - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557129/download_16_rjpfvv.jpg"
    ],
    "order": 16
  },
  {
    "id": 624,
    "title": "Nova",
    "slug": "nova",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557129/download_17_wkkpn5.jpg",
    "description": "Nova - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557129/download_17_wkkpn5.jpg"
    ],
    "order": 17
  },
  {
    "id": 621,
    "title": "Vertex",
    "slug": "vertex",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557130/download_18_z1g4vx.jpg",
    "description": "Vertex - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557130/download_18_z1g4vx.jpg"
    ],
    "order": 18
  },
  {
    "id": 652,
    "title": "Prism",
    "slug": "prism",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731713/19_kmcnu5.png",
    "description": "Prism - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731713/19_kmcnu5.png"
    ],
    "order": 19
  },
  {
    "id": 622,
    "title": "Spectrum",
    "slug": "spectrum",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557130/download_19_fgwubu.jpg",
    "description": "Spectrum - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557130/download_19_fgwubu.jpg"
    ],
    "order": 19
  },
  {
    "id": 651,
    "title": "Chroma",
    "slug": "chroma",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731713/20_lkjzfe.png",
    "description": "Chroma - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731713/20_lkjzfe.png"
    ],
    "order": 20
  },
  {
    "id": 620,
    "title": "Flow",
    "slug": "flow",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557131/download_20_lhgsj2.jpg",
    "description": "Flow - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557131/download_20_lhgsj2.jpg"
    ],
    "order": 20
  },
  {
    "id": 619,
    "title": "Kinetic",
    "slug": "kinetic",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557131/download_21_qirqfl.jpg",
    "description": "Kinetic - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557131/download_21_qirqfl.jpg"
    ],
    "order": 21
  },
  {
    "id": 618,
    "title": "Static",
    "slug": "static",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557132/download_22_w91e9p.jpg",
    "description": "Static - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557132/download_22_w91e9p.jpg"
    ],
    "order": 22
  },
  {
    "id": 650,
    "title": "Dynamic",
    "slug": "dynamic",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731715/24_fs7xny.png",
    "description": "Dynamic - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731715/24_fs7xny.png"
    ],
    "order": 24
  },
  {
    "id": 615,
    "title": "Fluid",
    "slug": "fluid",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557133/download_24_cjgyis.jpg",
    "description": "Fluid - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557133/download_24_cjgyis.jpg"
    ],
    "order": 24
  },
  {
    "id": 649,
    "title": "Solid",
    "slug": "solid",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731716/25_g6wgvq.png",
    "description": "Solid - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731716/25_g6wgvq.png"
    ],
    "order": 25
  },
  {
    "id": 616,
    "title": "Void",
    "slug": "void",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557133/download_25_zlpn1i.jpg",
    "description": "Void - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557133/download_25_zlpn1i.jpg"
    ],
    "order": 25
  },
  {
    "id": 648,
    "title": "Matter",
    "slug": "matter",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731716/26_sx6evm.png",
    "description": "Matter - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731716/26_sx6evm.png"
    ],
    "order": 26
  },
  {
    "id": 617,
    "title": "Energy",
    "slug": "energy",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557133/download_26_rmtihw.jpg",
    "description": "Energy - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557133/download_26_rmtihw.jpg"
    ],
    "order": 26
  },
  {
    "id": 647,
    "title": "Force",
    "slug": "force",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731717/27_c9bxz7.png",
    "description": "Force - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731717/27_c9bxz7.png"
    ],
    "order": 27
  },
  {
    "id": 612,
    "title": "Motion",
    "slug": "motion",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557135/download_28_xwkwze.jpg",
    "description": "Motion - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557135/download_28_xwkwze.jpg"
    ],
    "order": 28
  },
  {
    "id": 646,
    "title": "Stillness",
    "slug": "stillness",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731718/29_m37a3e.png",
    "description": "Stillness - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731718/29_m37a3e.png"
    ],
    "order": 29
  },
  {
    "id": 614,
    "title": "Silence",
    "slug": "silence",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557135/download_29_yuj1bs.jpg",
    "description": "Silence - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557135/download_29_yuj1bs.jpg"
    ],
    "order": 29
  },
  {
    "id": 645,
    "title": "Sound",
    "slug": "sound",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731718/30_wka8pc.png",
    "description": "Sound - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731718/30_wka8pc.png"
    ],
    "order": 30
  },
  {
    "id": 613,
    "title": "Vision",
    "slug": "vision",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557135/download_30_vpdbja.jpg",
    "description": "Vision - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557135/download_30_vpdbja.jpg"
    ],
    "order": 30
  },
  {
    "id": 644,
    "title": "Sight",
    "slug": "sight",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731718/31_qv6x3x.png",
    "description": "Sight - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731718/31_qv6x3x.png"
    ],
    "order": 31
  },
  {
    "id": 610,
    "title": "Focus",
    "slug": "focus",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557136/download_31_ol7fuk.jpg",
    "description": "Focus - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557136/download_31_ol7fuk.jpg"
    ],
    "order": 31
  },
  {
    "id": 611,
    "title": "Blur",
    "slug": "blur",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557136/download_32_zvganh.jpg",
    "description": "Blur - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557136/download_32_zvganh.jpg"
    ],
    "order": 32
  },
  {
    "id": 671,
    "title": "Sharp",
    "slug": "sharp",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731672/56_z1ye6l.png",
    "description": "Sharp - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731672/56_z1ye6l.png"
    ],
    "order": 56
  },
  {
    "id": 670,
    "title": "Soft",
    "slug": "soft",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731673/58_tcatux.png",
    "description": "Soft - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731673/58_tcatux.png"
    ],
    "order": 58
  },
  {
    "id": 669,
    "title": "Hard",
    "slug": "hard",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731676/60_h9bnjn.png",
    "description": "Hard - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731676/60_h9bnjn.png"
    ],
    "order": 60
  },
  {
    "id": 668,
    "title": "Light",
    "slug": "light",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731678/61_qcvccq.png",
    "description": "Light - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731678/61_qcvccq.png"
    ],
    "order": 61
  },
  {
    "id": 667,
    "title": "Dark",
    "slug": "dark",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731680/62_wna4vm.png",
    "description": "Dark - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731680/62_wna4vm.png"
    ],
    "order": 62
  },
  {
    "id": 666,
    "title": "Shadow",
    "slug": "shadow",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731680/63_uxncxf.png",
    "description": "Shadow - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731680/63_uxncxf.png"
    ],
    "order": 63
  },
  {
    "id": 665,
    "title": "Glow",
    "slug": "glow",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731681/65_myjjkk.png",
    "description": "Glow - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731681/65_myjjkk.png"
    ],
    "order": 65
  },
  {
    "id": 664,
    "title": "Radiance",
    "slug": "radiance",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731682/66_lo3hff.png",
    "description": "Radiance - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731682/66_lo3hff.png"
    ],
    "order": 66
  },
  {
    "id": 663,
    "title": "Luminescence",
    "slug": "luminescence",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731682/67_cog8cs.png",
    "description": "Luminescence - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731682/67_cog8cs.png"
    ],
    "order": 67
  },
  {
    "id": 605,
    "title": "Victory",
    "slug": "victory",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557139/Lionel_Messi__The_GOAT_in_Vector_Art_z67u22.jpg",
    "description": "Victory - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557139/Lionel_Messi__The_GOAT_in_Vector_Art_z67u22.jpg"
    ],
    "order": 67
  },
  {
    "id": 662,
    "title": "Brilliance",
    "slug": "brilliance",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731691/70_umfafq.png",
    "description": "Brilliance - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731691/70_umfafq.png"
    ],
    "order": 70
  },
  {
    "id": 661,
    "title": "Spark",
    "slug": "spark",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731693/72_olmotq.png",
    "description": "Spark - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731693/72_olmotq.png"
    ],
    "order": 72
  },
  {
    "id": 660,
    "title": "Flare",
    "slug": "flare",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731694/73_n1vjmu.png",
    "description": "Flare - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731694/73_n1vjmu.png"
    ],
    "order": 73
  },
  {
    "id": 657,
    "title": "Gleam",
    "slug": "gleam",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731695/74_twmvna.png",
    "description": "Gleam - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731695/74_twmvna.png"
    ],
    "order": 74
  },
  {
    "id": 658,
    "title": "Glint",
    "slug": "glint",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731695/75_k8nwt0.png",
    "description": "Glint - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731695/75_k8nwt0.png"
    ],
    "order": 75
  },
  {
    "id": 659,
    "title": "Shimmer",
    "slug": "shimmer",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731696/76_hqugkr.png",
    "description": "Shimmer - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731696/76_hqugkr.png"
    ],
    "order": 76
  },
  {
    "id": 656,
    "title": "Twinkle",
    "slug": "twinkle",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731702/92_rmlkv1.png",
    "description": "Twinkle - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731702/92_rmlkv1.png"
    ],
    "order": 92
  },
  {
    "id": 601,
    "title": "Punk",
    "slug": "punk",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557141/The_ape_punk_____intiaj.jpg",
    "description": "Punk - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557141/The_ape_punk_____intiaj.jpg"
    ]
  },
  {
    "id": 607,
    "title": "Doja",
    "slug": "doja",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557139/JOJADOJA__jojadoja_jjdoja___sbezzo.jpg",
    "description": "Doja - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557139/JOJADOJA__jojadoja_jjdoja___sbezzo.jpg"
    ]
  },
  {
    "id": 609,
    "title": "Mystery",
    "slug": "mystery",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557137/download_bbkpii.jpg",
    "description": "Mystery - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557137/download_bbkpii.jpg"
    ]
  },
  {
    "id": 640,
    "title": "Rebel",
    "slug": "rebel",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/Che_Guevara_Portrait___HD_Wallpaper_sdmofo.jpg",
    "description": "Rebel - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/Che_Guevara_Portrait___HD_Wallpaper_sdmofo.jpg"
    ]
  },
  {
    "id": 643,
    "title": "Culture",
    "slug": "culture",
    "category": "posters",
    "price": 999,
    "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/Cultural_Cool_cobvhj.jpg",
    "description": "Culture - A premium quality poster for your modern space.",
    "sizes": [
      {
        "label": "12x18\"",
        "price": 999
      },
      {
        "label": "18x24\"",
        "price": 1999
      },
      {
        "label": "24x36\"",
        "price": 3899
      }
    ],
    "images": [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/Cultural_Cool_cobvhj.jpg"
    ]
  }
];

const customFramesProducts: Product[] = [
  {
    id: 401,
    title: "Minimal Black Frame",
    slug: slugify("Minimal Black Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554663/4359_dgqnin.jpg",
    category: "custom-frames",
    subCategory: "Photo Frame",
    price: 499,
    color: "Black",
    material: "Wood",
    orientation: "Portrait",
    tag: "Best Seller",
    rating: 4.8,
    reviews: 124,
    description: "A sleek and modern black frame that complements any artwork or photograph.",
    sizes: [
      { label: "6x4", price: 499 },
      { label: "7x5", price: 699 },
      { label: "8x10", price: 999 },
      { label: "10x12", price: 1299 }
    ]
  },
  {
    id: 402,
    title: "Minimal White Frame",
    slug: slugify("Minimal White Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554663/90381_l5zicj.jpg",
    category: "custom-frames",
    subCategory: "Wall Art Frame",
    price: 499,
    color: "White",
    material: "Wood",
    orientation: "Square",
    tag: "New",
    rating: 4.5,
    reviews: 89,
    description: "A clean and crisp white frame for a minimalist look.",
    sizes: [
      { label: "6x4", price: 499 },
      { label: "7x5", price: 699 },
      { label: "8x10", price: 999 },
      { label: "10x12", price: 1299 }
    ]
  },
  {
    id: 403,
    title: "Classic Wooden Frame",
    slug: slugify("Classic Wooden Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554662/2001.i305.024.realistic_mockup_frame_set_vujhs3.jpg",
    category: "custom-frames",
    subCategory: "Canvas Frame",
    price: 499,
    color: "Wood",
    material: "Wood",
    orientation: "Landscape",
    tag: "Premium",
    rating: 4.9,
    reviews: 56,
    description: "A timeless wooden frame that adds warmth and character to your space.",
    sizes: [
      { label: "6x4", price: 499 },
      { label: "7x5", price: 699 },
      { label: "8x10", price: 999 },
      { label: "10x12", price: 1299 }
    ]
  },
  {
    id: 404,
    title: "Rustic Tabletop Frame",
    slug: slugify("Rustic Tabletop Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554503/blank-frame-front-cheese-ingredient-wooden-table_ujymqc.jpg",
    category: "custom-frames",
    subCategory: "Photo Frame",
    price: 499,
    color: "Gold",
    material: "Metal",
    orientation: "Portrait",
    tag: "Premium",
    rating: 4.7,
    reviews: 42,
    description: "A rustic frame with a touch of gold, perfect for tabletops and shelves.",
    sizes: [
      { label: "6x4", price: 499 },
      { label: "7x5", price: 699 },
      { label: "8x10", price: 999 },
      { label: "10x12", price: 1299 }
    ]
  },
  {
    id: 405,
    title: "Vintage Floral Frame",
    slug: slugify("Vintage Floral Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554503/green-photo-frame-with-tulips_prsxku.jpg",
    category: "custom-frames",
    subCategory: "Wall Art Frame",
    price: 499,
    color: "Silver",
    material: "Metal",
    orientation: "Portrait",
    tag: "Modern",
    rating: 4.6,
    reviews: 78,
    description: "A vintage-inspired frame with a modern silver finish.",
    sizes: [
      { label: "6x4", price: 499 },
      { label: "7x5", price: 699 },
      { label: "8x10", price: 999 },
      { label: "10x12", price: 1299 }
    ]
  },
  {
    id: 406,
    title: "Spring Bloom Frame",
    slug: slugify("Spring Bloom Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554501/blooming-flowers-composed-with-frame_rtpzqg.jpg",
    category: "custom-frames",
    subCategory: "Canvas Frame",
    price: 499,
    color: "Clear",
    material: "Acrylic",
    orientation: "Landscape",
    tag: "Modern",
    rating: 4.9,
    reviews: 24,
    description: "A clear acrylic frame that lets your photos shine.",
    sizes: [
      { label: "6x4", price: 499 },
      { label: "7x5", price: 699 },
      { label: "8x10", price: 999 },
      { label: "10x12", price: 1299 }
    ]
  },
  {
    id: 407,
    title: "Vintage Wooden Frame",
    slug: slugify("Vintage Wooden Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554500/vintage-blank-frame-with-brown-wooden-borders-white-background_kfdxup.jpg",
    category: "custom-frames",
    subCategory: "Photo Frame",
    price: 499,
    color: "Wood",
    material: "Wood",
    orientation: "Portrait",
    tag: "Popular",
    rating: 4.4,
    reviews: 156,
    description: "A popular wooden frame with a vintage feel.",
    sizes: [{ label: "6x4", price: 499 }, { label: "7x5", price: 699 }, { label: "8x10", price: 999 }, { label: "10x12", price: 1299 }]
  },
  {
    id: 408,
    title: "Modern Glass Frame",
    slug: slugify("Modern Glass Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554500/red-flower-glass-photo-frame-table_iemwin.jpg",
    category: "custom-frames",
    subCategory: "Wall Art Frame",
    price: 499,
    color: "Black",
    material: "Wood",
    orientation: "Square",
    tag: "New",
    rating: 4.8,
    reviews: 31,
    description: "A square black frame for a modern and balanced look.",
    sizes: [{ label: "6x4", price: 499 }, { label: "7x5", price: 699 }, { label: "8x10", price: 999 }, { label: "10x12", price: 1299 }]
  },
  {
    id: 409,
    title: "Elegant White Frame",
    slug: slugify("Elegant White Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554500/blank-frame-near-bouquet_zl7npf.jpg",
    category: "custom-frames",
    subCategory: "Canvas Frame",
    price: 499,
    color: "White",
    material: "Wood",
    orientation: "Portrait",
    tag: "Popular",
    rating: 4.5,
    reviews: 112,
    description: "A portrait white frame that brightens up any room.",
    sizes: [{ label: "6x4", price: 499 }, { label: "7x5", price: 699 }, { label: "8x10", price: 999 }, { label: "10x12", price: 1299 }]
  },
  {
    id: 410,
    title: "Artistic Wooden Frame",
    slug: slugify("Artistic Wooden Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554499/flowers-near-frame-jug-books_xxxffq.jpg",
    category: "custom-frames",
    subCategory: "Photo Frame",
    price: 499,
    color: "Wood",
    material: "Wood",
    orientation: "Portrait",
    tag: "Trending",
    rating: 4.7,
    reviews: 88,
    description: "A classic wooden frame with a natural finish.",
    sizes: [{ label: "6x4", price: 499 }, { label: "7x5", price: 699 }, { label: "8x10", price: 999 }, { label: "10x12", price: 1299 }]
  },
  {
    id: 411,
    title: "Autumn Leaves Frame",
    slug: slugify("Autumn Leaves Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554499/top-view-frame-with-autumn-leaves-acorns_fv5wwx.jpg",
    category: "custom-frames",
    subCategory: "Wall Art Frame",
    price: 499,
    color: "Wood",
    material: "Wood",
    orientation: "Square",
    tag: "Seasonal",
    rating: 4.6,
    reviews: 65,
    description: "A square wooden frame that captures the essence of autumn.",
    sizes: [{ label: "6x4", price: 499 }, { label: "7x5", price: 699 }, { label: "8x10", price: 999 }, { label: "10x12", price: 1299 }]
  },
  {
    id: 412,
    title: "Sleek White Frame",
    slug: slugify("Sleek White Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554498/arrangement-with-empty-white-frame-indoors_elhw1i.jpg",
    category: "custom-frames",
    subCategory: "Canvas Frame",
    price: 499,
    color: "White",
    material: "Wood",
    orientation: "Portrait",
    tag: "Minimalist",
    rating: 4.8,
    reviews: 142,
    description: "A minimalist white frame for a clean and modern display.",
    sizes: [{ label: "6x4", price: 499 }, { label: "7x5", price: 699 }, { label: "8x10", price: 999 }, { label: "10x12", price: 1299 }]
  },
  {
    id: 413,
    title: "Marble Wall Frame",
    slug: slugify("Marble Wall Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554498/mock-up-blank-poster-picture-frame-hanging-white-marble-wall-room-can-be-used-mockup-montage-products-display-design-key-visual-layout_zre3ux.jpg",
    category: "custom-frames",
    subCategory: "Photo Frame",
    price: 499,
    color: "Black",
    material: "Metal",
    orientation: "Portrait",
    tag: "Modern",
    rating: 4.9,
    reviews: 210,
    description: "A modern black metal frame for a sophisticated look.",
    sizes: [{ label: "6x4", price: 499 }, { label: "7x5", price: 699 }, { label: "8x10", price: 999 }, { label: "10x12", price: 1299 }]
  },
  {
    id: 414,
    title: "Autumn Harvest Frame",
    slug: slugify("Autumn Harvest Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554498/flat-lay-frame-with-acorns-autumn-leaves_jsk6ar.jpg",
    category: "custom-frames",
    subCategory: "Wall Art Frame",
    price: 499,
    color: "Wood",
    material: "Wood",
    orientation: "Landscape",
    tag: "Seasonal",
    rating: 4.4,
    reviews: 45,
    description: "A landscape wooden frame that brings the outdoors in.",
    sizes: [{ label: "6x4", price: 499 }, { label: "7x5", price: 699 }, { label: "8x10", price: 999 }, { label: "10x12", price: 1299 }]
  },
  {
    id: 415,
    title: "Premium Black Frame",
    slug: slugify("Premium Black Frame"),
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775554497/dark-modern-blank-picture-frame-shelf_cdrbvu.jpg",
    category: "custom-frames",
    subCategory: "Canvas Frame",
    price: 499,
    color: "Black",
    material: "Wood",
    orientation: "Portrait",
    tag: "Premium",
    rating: 4.7,
    reviews: 189,
    description: "A premium black frame for a bold and elegant statement.",
    sizes: [{ label: "6x4", price: 499 }, { label: "7x5", price: 699 }, { label: "8x10", price: 999 }, { label: "10x12", price: 1299 }]
  }
];



const dogLoversProducts: Product[] = [
  {
  "id": 672,
  "title": "Dog Portrait 36",
  "slug": "dog-portrait-36",
  "category": "dog-lovers",
  "price": 899,
  "smallPrice": 899,
  "mediumPrice": 1699,
  "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729945/ChatGPT_Image_Apr_9_2026_01_32_03_PM_mhtafp.png",
  "description": "A beautiful piece of art for dog lovers.",
  "images": [
    "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729945/ChatGPT_Image_Apr_9_2026_01_32_03_PM_mhtafp.png"
  ]
},
  {
  "id": 673,
  "title": "Dog Portrait 37",
  "slug": "dog-portrait-37",
  "category": "dog-lovers",
  "price": 899,
  "smallPrice": 899,
  "mediumPrice": 1699,
  "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729945/ChatGPT_Image_Apr_9_2026_01_34_48_PM_bkcbs9.png",
  "description": "A beautiful piece of art for dog lovers.",
  "images": [
    "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729945/ChatGPT_Image_Apr_9_2026_01_34_48_PM_bkcbs9.png"
  ]
},
  {
  "id": 674,
  "title": "Dog Portrait 38",
  "slug": "dog-portrait-38",
  "category": "dog-lovers",
  "price": 899,
  "smallPrice": 899,
  "mediumPrice": 1699,
  "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729945/ChatGPT_Image_Apr_9_2026_01_33_32_PM_ypy2br.png",
  "description": "A beautiful piece of art for dog lovers.",
  "images": [
    "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729945/ChatGPT_Image_Apr_9_2026_01_33_32_PM_ypy2br.png"
  ]
},
  {
  "id": 675,
  "title": "Dog Portrait 39",
  "slug": "dog-portrait-39",
  "category": "dog-lovers",
  "price": 899,
  "smallPrice": 899,
  "mediumPrice": 1699,
  "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729238/ChatGPT_Image_Apr_9_2026_01_27_59_PM_u9yldk.png",
  "description": "A beautiful piece of art for dog lovers.",
  "images": [
    "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729238/ChatGPT_Image_Apr_9_2026_01_27_59_PM_u9yldk.png"
  ]
},
  {
  "id": 676,
  "title": "Dog Portrait 40",
  "slug": "dog-portrait-40",
  "category": "dog-lovers",
  "price": 899,
  "smallPrice": 899,
  "mediumPrice": 1699,
  "image": "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729238/ChatGPT_Image_Apr_9_2026_01_26_45_PM_vde3fk.png",
  "description": "A beautiful piece of art for dog lovers.",
  "images": [
    "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729238/ChatGPT_Image_Apr_9_2026_01_26_45_PM_vde3fk.png"
  ]
},
  {
    id: 301,
    title: "Regal Retriever",
    slug: slugify("Regal Retriever"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775466287/10_c1juvq.jpg",
    description: "A majestic portrait of a Golden Retriever, capturing the loyalty and warmth of man's best friend.",
    images: [
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775466287/10_c1juvq.jpg",
      "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775466286/7_wbpwew.jpg"
    ]
  },
  {
    id: 302,
    title: "Dog Portrait 1",
    slug: slugify("Dog Portrait 1"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652214/ChatGPT_Image_Apr_8_2026_06_00_26_PM_sga4lr.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652214/ChatGPT_Image_Apr_8_2026_06_00_26_PM_sga4lr.png"]
  },
  {
    id: 303,
    title: "Dog Portrait 2",
    slug: slugify("Dog Portrait 2"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652213/ChatGPT_Image_Apr_8_2026_06_02_02_PM_sm32fq.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652213/ChatGPT_Image_Apr_8_2026_06_02_02_PM_sm32fq.png"]
  },
  {
    id: 304,
    title: "Dog Portrait 3",
    slug: slugify("Dog Portrait 3"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652213/ChatGPT_Image_Apr_8_2026_05_54_43_PM_tliqqw.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652213/ChatGPT_Image_Apr_8_2026_05_54_43_PM_tliqqw.png"]
  },
  {
    id: 305,
    title: "Dog Portrait 4",
    slug: slugify("Dog Portrait 4"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652213/ChatGPT_Image_Apr_8_2026_05_46_07_PM_lwzauz.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652213/ChatGPT_Image_Apr_8_2026_05_46_07_PM_lwzauz.png"]
  },
  {
    id: 306,
    title: "Dog Portrait 5",
    slug: slugify("Dog Portrait 5"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652212/ChatGPT_Image_Apr_8_2026_05_48_12_PM_sbcghg.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652212/ChatGPT_Image_Apr_8_2026_05_48_12_PM_sbcghg.png"]
  },
  {
    id: 307,
    title: "Dog Portrait 6",
    slug: slugify("Dog Portrait 6"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652212/ChatGPT_Image_Apr_8_2026_05_37_13_PM_dvnuw4.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652212/ChatGPT_Image_Apr_8_2026_05_37_13_PM_dvnuw4.png"]
  },
  {
    id: 308,
    title: "Dog Portrait 7",
    slug: slugify("Dog Portrait 7"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652212/ChatGPT_Image_Apr_8_2026_05_32_23_PM_eoyhfr.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652212/ChatGPT_Image_Apr_8_2026_05_32_23_PM_eoyhfr.png"]
  },
  {
    id: 309,
    title: "Dog Portrait 8",
    slug: slugify("Dog Portrait 8"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652211/ChatGPT_Image_Apr_8_2026_05_43_53_PM_gtn4wh.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652211/ChatGPT_Image_Apr_8_2026_05_43_53_PM_gtn4wh.png"]
  },
  {
    id: 310,
    title: "Dog Portrait 9",
    slug: slugify("Dog Portrait 9"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652212/ChatGPT_Image_Apr_8_2026_05_45_58_PM_dn6q8g.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652212/ChatGPT_Image_Apr_8_2026_05_45_58_PM_dn6q8g.png"]
  },
  {
    id: 311,
    title: "Dog Portrait 10",
    slug: slugify("Dog Portrait 10"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652210/ChatGPT_Image_Apr_8_2026_05_41_24_PM_aohlmm.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652210/ChatGPT_Image_Apr_8_2026_05_41_24_PM_aohlmm.png"]
  },
  {
    id: 312,
    title: "Dog Portrait 11",
    slug: slugify("Dog Portrait 11"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652211/ChatGPT_Image_Apr_8_2026_05_36_08_PM_bwaag3.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652211/ChatGPT_Image_Apr_8_2026_05_36_08_PM_bwaag3.png"]
  },
  {
    id: 313,
    title: "Dog Portrait 12",
    slug: slugify("Dog Portrait 12"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652211/ChatGPT_Image_Apr_8_2026_05_30_34_PM_yco7xz.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652211/ChatGPT_Image_Apr_8_2026_05_30_34_PM_yco7xz.png"]
  },
  {
    id: 314,
    title: "Dog Portrait 13",
    slug: slugify("Dog Portrait 13"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652210/ChatGPT_Image_Apr_8_2026_05_23_41_PM_h8yjvs.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652210/ChatGPT_Image_Apr_8_2026_05_23_41_PM_h8yjvs.png"]
  },
  {
    id: 315,
    title: "Dog Portrait 14",
    slug: slugify("Dog Portrait 14"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652210/ChatGPT_Image_Apr_8_2026_05_19_39_PM_oxtyze.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652210/ChatGPT_Image_Apr_8_2026_05_19_39_PM_oxtyze.png"]
  },
  {
    id: 316,
    title: "Dog Portrait 15",
    slug: slugify("Dog Portrait 15"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652210/ChatGPT_Image_Apr_8_2026_05_41_36_PM_jzqvx6.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652210/ChatGPT_Image_Apr_8_2026_05_41_36_PM_jzqvx6.png"]
  },
  {
    id: 317,
    title: "Dog Portrait 16",
    slug: slugify("Dog Portrait 16"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652209/ChatGPT_Image_Apr_8_2026_05_17_50_PM_h3hbs8.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652209/ChatGPT_Image_Apr_8_2026_05_17_50_PM_h3hbs8.png"]
  },
  {
    id: 318,
    title: "Dog Portrait 17",
    slug: slugify("Dog Portrait 17"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652209/ChatGPT_Image_Apr_8_2026_05_16_41_PM_ewniqu.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652209/ChatGPT_Image_Apr_8_2026_05_16_41_PM_ewniqu.png"]
  },
  {
    id: 319,
    title: "Dog Portrait 18",
    slug: slugify("Dog Portrait 18"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652209/ChatGPT_Image_Apr_8_2026_05_15_14_PM_fpju5f.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652209/ChatGPT_Image_Apr_8_2026_05_15_14_PM_fpju5f.png"]
  },
  {
    id: 320,
    title: "Dog Portrait 19",
    slug: slugify("Dog Portrait 19"),
    category: "dog-lovers",
    price: 999,
    smallPrice: 999,
    mediumPrice: 1499,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652209/ChatGPT_Image_Apr_8_2026_05_38_08_PM_mk8gzg.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775652209/ChatGPT_Image_Apr_8_2026_05_38_08_PM_mk8gzg.png"]
  }
,
  {
    id: 321,
    title: "Dog Portrait 20",
    slug: slugify("Dog Portrait 20"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725581/ChatGPT_Image_Apr_9_2026_02_08_32_PM_et5ihw.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725581/ChatGPT_Image_Apr_9_2026_02_08_32_PM_et5ihw.png"]
  },
  {
    id: 322,
    title: "Dog Portrait 21",
    slug: slugify("Dog Portrait 21"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725583/ChatGPT_Image_Apr_9_2026_02_27_21_PM_fzm1ac.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725583/ChatGPT_Image_Apr_9_2026_02_27_21_PM_fzm1ac.png"]
  },
  {
    id: 323,
    title: "Dog Portrait 22",
    slug: slugify("Dog Portrait 22"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725582/ChatGPT_Image_Apr_9_2026_02_23_27_PM_wadgtd.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725582/ChatGPT_Image_Apr_9_2026_02_23_27_PM_wadgtd.png"]
  },
  {
    id: 324,
    title: "Dog Portrait 23",
    slug: slugify("Dog Portrait 23"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725582/ChatGPT_Image_Apr_9_2026_02_12_09_PM_elpin5.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725582/ChatGPT_Image_Apr_9_2026_02_12_09_PM_elpin5.png"]
  },
  {
    id: 325,
    title: "Dog Portrait 24",
    slug: slugify("Dog Portrait 24"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725581/ChatGPT_Image_Apr_9_2026_02_21_54_PM_ei8nny.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725581/ChatGPT_Image_Apr_9_2026_02_21_54_PM_ei8nny.png"]
  },
  {
    id: 326,
    title: "Dog Portrait 25",
    slug: slugify("Dog Portrait 25"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725581/ChatGPT_Image_Apr_9_2026_01_55_11_PM_d3it43.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725581/ChatGPT_Image_Apr_9_2026_01_55_11_PM_d3it43.png"]
  },
  {
    id: 327,
    title: "Dog Portrait 26",
    slug: slugify("Dog Portrait 26"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725580/ChatGPT_Image_Apr_9_2026_01_22_29_PM_yevavs.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725580/ChatGPT_Image_Apr_9_2026_01_22_29_PM_yevavs.png"]
  },
  {
    id: 328,
    title: "Dog Portrait 27",
    slug: slugify("Dog Portrait 27"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725580/ChatGPT_Image_Apr_9_2026_01_13_25_PM_w0gwyq.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725580/ChatGPT_Image_Apr_9_2026_01_13_25_PM_w0gwyq.png"]
  },
  {
    id: 329,
    title: "Dog Portrait 28",
    slug: slugify("Dog Portrait 28"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725580/ChatGPT_Image_Apr_9_2026_01_18_03_PM_nb3ebw.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725580/ChatGPT_Image_Apr_9_2026_01_18_03_PM_nb3ebw.png"]
  },
  {
    id: 330,
    title: "Dog Portrait 29",
    slug: slugify("Dog Portrait 29"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725579/ChatGPT_Image_Apr_9_2026_02_28_32_PM_yvlbli.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725579/ChatGPT_Image_Apr_9_2026_02_28_32_PM_yvlbli.png"]
  },
  {
    id: 331,
    title: "Dog Portrait 30",
    slug: slugify("Dog Portrait 30"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725579/ChatGPT_Image_Apr_9_2026_01_52_40_PM_jzhdor.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725579/ChatGPT_Image_Apr_9_2026_01_52_40_PM_jzhdor.png"]
  },
  {
    id: 332,
    title: "Dog Portrait 31",
    slug: slugify("Dog Portrait 31"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725579/ChatGPT_Image_Apr_9_2026_02_25_46_PM_l1r5e4.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725579/ChatGPT_Image_Apr_9_2026_02_25_46_PM_l1r5e4.png"]
  },
  {
    id: 333,
    title: "Dog Portrait 32",
    slug: slugify("Dog Portrait 32"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725578/ChatGPT_Image_Apr_9_2026_01_44_41_PM_wlsg3j.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725578/ChatGPT_Image_Apr_9_2026_01_44_41_PM_wlsg3j.png"]
  },
  {
    id: 334,
    title: "Dog Portrait 33",
    slug: slugify("Dog Portrait 33"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725579/ChatGPT_Image_Apr_9_2026_01_58_52_PM_oc1abm.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725579/ChatGPT_Image_Apr_9_2026_01_58_52_PM_oc1abm.png"]
  },
  {
    id: 335,
    title: "Dog Portrait 34",
    slug: slugify("Dog Portrait 34"),
    category: "dog-lovers",
    price: 499,
    smallPrice: 499,
    mediumPrice: 699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725578/ChatGPT_Image_Apr_9_2026_01_27_59_PM_zfybmt.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725578/ChatGPT_Image_Apr_9_2026_01_27_59_PM_zfybmt.png"],
    sizes: [
      { label: "4x6", price: 499 },
      { label: "7x5", price: 699 },
      { label: "8x6", price: 999 }
    ]
  },
  {
    id: 336,
    title: "Dog Portrait 35",
    slug: slugify("Dog Portrait 35"),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725577/ChatGPT_Image_Apr_9_2026_02_29_50_PM_axmch3.png",
    description: "A beautiful piece of art for dog lovers.",
    images: ["https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725577/ChatGPT_Image_Apr_9_2026_02_29_50_PM_axmch3.png"]
  }
];

const kidsArtProducts: Product[] = [
  {
    id: 501,
    title: "Little Artist's Canvas",
    slug: slugify("Little Artist's Canvas"),
    category: "kids-art",
    price: 799,
    smallPrice: 799,
    mediumPrice: 1199,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop",
    description: "A vibrant and playful piece that celebrates the boundless creativity of childhood. Perfect for a nursery or playroom.",
    images: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

let dogPortraitCounter = 1;
dogLoversProducts.forEach(product => {
  if (product.title.startsWith("Dog Portrait") || product.title.startsWith("Dog Lover Art")) {
    product.title = `Dog Portrait ${dogPortraitCounter}`;
    product.slug = slugify(product.title);
    dogPortraitCounter++;
  }
});

export const allProducts: Product[] = [
  ...wallArtProducts,
  ...posterProducts,
  ...dogLoversProducts,
  ...kidsArtProducts,
  ...customFramesProducts
];

export const getProductBySlug = (slug: string) => {
  return allProducts.find(p => p.slug === slug);
};

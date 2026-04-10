const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const urls = [
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557142/Vivid_Red_Glamour_vgrg4f.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557141/The_ape_punk_____intiaj.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557140/Popeye_the_Sailor___Basquiat-Inspired_Street_Art_Portrait_fyfu2u.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557140/New_Wallpaper_jpitw9.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557140/Photo_Premium_AI-generated_blc2sl.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557139/Lionel_Messi__The_GOAT_in_Vector_Art_z67u22.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557139/Lionel_Messi_ejtm3k.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557139/JOJADOJA__jojadoja_jjdoja___sbezzo.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557137/Hunter_qw9wbh.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557137/download_bbkpii.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557136/download_31_ol7fuk.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557136/download_32_zvganh.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557135/download_28_xwkwze.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557135/download_30_vpdbja.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557135/download_29_yuj1bs.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557133/download_24_cjgyis.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557133/download_25_zlpn1i.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557133/download_26_rmtihw.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557132/download_22_w91e9p.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557131/download_21_qirqfl.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557131/download_20_lhgsj2.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557130/download_18_z1g4vx.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557130/download_19_fgwubu.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557129/download_16_rjpfvv.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557129/download_17_wkkpn5.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557128/download_14_yy9ha7.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557128/download_13_ysyb3a.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557127/download_12_xw1jrj.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557127/download_10_oy9prj.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557127/download_11_obqxg5.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557126/download_9_zvopir.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557125/download_7_usxj38.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557125/download_8_kejig1.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_5_st6ggp.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_2_cfje1b.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_4_zc2fkh.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_6_d0pclc.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_1_iojf50.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557124/download_3_xkbbqq.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/AI_ART_ge2nvq.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/Che_Guevara_Portrait___HD_Wallpaper_sdmofo.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/Cr7_Art_k2rrrl.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/__A_portrait_of_a_male_character_in_big_red_glasses_made_up_of_large_plastic_parts_toy_black_and_red_colors___lis1xd.jpg",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557123/Cultural_Cool_cobvhj.jpg"
];

const getNameFromUrl = (url) => {
  const parts = url.split('/');
  const filename = parts[parts.length - 1].split('.')[0];
  
  if (filename.includes('Vivid_Red_Glamour')) return 'Vivid Red Glamour';
  if (filename.includes('The_ape_punk')) return 'The Ape Punk';
  if (filename.includes('Popeye_the_Sailor')) return 'Popeye the Sailor';
  if (filename.includes('New_Wallpaper')) return 'New Wallpaper';
  if (filename.includes('Photo_Premium_AI-generated')) return 'AI-generated Portrait';
  if (filename.includes('Lionel_Messi__The_GOAT')) return 'Lionel Messi Vector Art';
  if (filename.includes('Lionel_Messi')) return 'Lionel Messi Portrait';
  if (filename.includes('JOJADOJA')) return 'JOJADOJA Art';
  if (filename.includes('Hunter')) return 'Hunter';
  if (filename.includes('AI_ART')) return 'AI Art';
  if (filename.includes('Che_Guevara')) return 'Che Guevara Portrait';
  if (filename.includes('Cr7_Art')) return 'CR7 Art';
  if (filename.includes('male_character_in_big_red_glasses')) return 'Toy Character Portrait';
  if (filename.includes('Cultural_Cool')) return 'Cultural Cool';
  
  if (filename.startsWith('download_')) {
    const num = filename.split('_')[1];
    return `Urban Style ${num}`;
  }
  
  if (filename === 'download') return 'Urban Style 0';

  return filename.replace(/_/g, ' ').replace(/-/g, ' ');
};

const products = urls.map((url, index) => {
  const title = getNameFromUrl(url);
  return {
    id: 600 + index,
    title: title,
    slug: slugify(title),
    category: "posters",
    price: 299,
    image: url,
    description: `${title} - A premium quality poster for your modern space.`,
    sizes: [
      { label: '12x18"', price: 299 },
      { label: '18x24"', price: 499 },
      { label: '24x36"', price: 799 }
    ],
    images: [url]
  };
});

console.log('const posterProducts: Product[] = ' + JSON.stringify(products, null, 2) + ';');

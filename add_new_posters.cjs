const fs = require('fs');

const newUrls = [
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731718/31_qv6x3x.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731718/30_wka8pc.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731718/29_m37a3e.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731717/27_c9bxz7.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731716/26_sx6evm.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731716/25_g6wgvq.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731715/24_fs7xny.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731713/20_lkjzfe.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731713/19_kmcnu5.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731713/15_dnycbg.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731712/13_dklr9s.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731711/11_hedx4g.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731702/92_rmlkv1.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731695/74_twmvna.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731695/75_k8nwt0.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731696/76_hqugkr.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731694/73_n1vjmu.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731693/72_olmotq.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731691/70_umfafq.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731682/67_cog8cs.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731682/66_lo3hff.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731681/65_myjjkk.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731680/63_uxncxf.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731680/62_wna4vm.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731678/61_qcvccq.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731676/60_h9bnjn.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731673/58_tcatux.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775731672/56_z1ye6l.png"
];

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

const getNameFromUrl = (url) => {
  const parts = url.split('/');
  const filename = parts[parts.length - 1].split('.')[0];
  const num = filename.split('_')[0];
  return `Poster ${num}`;
};

// We need to find the highest ID in posterProducts
const productsFile = fs.readFileSync('src/data/products.ts', 'utf8');
const idMatches = [...productsFile.matchAll(/"id":\s*(\d+)/g)];
let maxId = 0;
for (const match of idMatches) {
  const id = parseInt(match[1]);
  if (id > maxId) maxId = id;
}

const newProducts = newUrls.map((url, index) => {
  const title = getNameFromUrl(url);
  return {
    id: maxId + 1 + index,
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

const newProductsStr = newProducts.map(p => JSON.stringify(p, null, 2)).join(',\n  ');

// Insert into posterProducts array
const updatedFile = productsFile.replace(
  /const posterProducts: Product\[\] = \[/,
  `const posterProducts: Product[] = [\n  ${newProductsStr},`
);

fs.writeFileSync('src/data/products.ts', updatedFile);
console.log('Added ' + newProducts.length + ' new posters.');

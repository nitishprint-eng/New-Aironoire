const fs = require('fs');

const newUrls = [
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729945/ChatGPT_Image_Apr_9_2026_01_32_03_PM_mhtafp.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729945/ChatGPT_Image_Apr_9_2026_01_34_48_PM_bkcbs9.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729945/ChatGPT_Image_Apr_9_2026_01_33_32_PM_ypy2br.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729238/ChatGPT_Image_Apr_9_2026_01_27_59_PM_u9yldk.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775729238/ChatGPT_Image_Apr_9_2026_01_26_45_PM_vde3fk.png"
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

const productsFile = fs.readFileSync('src/data/products.ts', 'utf8');
const idMatches = [...productsFile.matchAll(/"id":\s*(\d+)/g)];
let maxId = 0;
for (const match of idMatches) {
  const id = parseInt(match[1]);
  if (id > maxId) maxId = id;
}

// Find the last Dog Portrait number
const titleMatches = [...productsFile.matchAll(/title:\s*"Dog Portrait (\d+)"/g)];
let maxDogNum = 0;
for (const match of titleMatches) {
  const num = parseInt(match[1]);
  if (num > maxDogNum) maxDogNum = num;
}

const newProducts = newUrls.map((url, index) => {
  const title = `Dog Portrait ${maxDogNum + 1 + index}`;
  return {
    id: maxId + 1 + index,
    title: title,
    slug: slugify(title),
    category: "dog-lovers",
    price: 899,
    smallPrice: 899,
    mediumPrice: 1699,
    image: url,
    description: "A beautiful piece of art for dog lovers.",
    images: [url]
  };
});

// We need to format it without quotes on keys to match the existing style, but JSON.stringify adds quotes.
// It's fine, TypeScript accepts quotes on keys.
// But wait, the existing ones don't have quotes on keys. Let's just use JSON.stringify and it will be fine.
const newProductsStr = newProducts.map(p => JSON.stringify(p, null, 2)).join(',\n  ');

// Insert into dogLoversProducts array
// The array ends with:
//     images: ["..."]
//   }
// ];
// const kidsArtProducts: Product[] = [

const updatedFile = productsFile.replace(
  /const dogLoversProducts: Product\[\] = \[/,
  `const dogLoversProducts: Product[] = [\n  ${newProductsStr},`
);

fs.writeFileSync('src/data/products.ts', updatedFile);
console.log('Added ' + newProducts.length + ' new dog lovers products.');

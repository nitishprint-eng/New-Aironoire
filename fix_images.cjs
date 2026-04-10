const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/pages/Home.tsx',
  'src/pages/KidsArt.tsx',
  'src/pages/Posters.tsx',
  'src/pages/WallArt.tsx',
  'src/pages/DogLovers.tsx',
  'src/pages/CustomFrames.tsx',
  'src/pages/ProductDetail.tsx',
  'src/pages/Cart.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace bg-zinc-100 with bg-[#f5f5f5] p-6 flex items-center justify-center
  content = content.replace(/bg-zinc-100/g, 'bg-[#f5f5f5] p-6 flex items-center justify-center');
  
  // Replace object-cover with object-contain for group-hover:scale-105 images
  content = content.replace(/object-cover group-hover:scale-105/g, 'object-contain group-hover:scale-105');
  
  // Also for opacity-60 images (which are probably in the grid)
  content = content.replace(/object-cover opacity-60/g, 'object-contain opacity-60');
  
  // In ProductDetail.tsx, main image:
  content = content.replace(/object-cover transition-transform duration-200/g, 'object-contain transition-transform duration-200');
  
  // In Cart.tsx
  if (file.includes('Cart.tsx')) {
    content = content.replace(/object-cover/g, 'object-contain');
  }

  // In ProductDetail.tsx thumbnails
  if (file.includes('ProductDetail.tsx')) {
    content = content.replace(/className="w-full h-full object-cover"/g, 'className="w-full h-full object-contain"');
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
});
console.log('Done');

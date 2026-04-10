const fs = require('fs');

let productsFile = fs.readFileSync('src/data/products.ts', 'utf8');

const match = productsFile.match(/const posterProducts: Product\[\] = (\[[\s\S]*?\]);\n/);
if (match) {
  let postersStr = match[1];
  let posters;
  try {
    posters = eval('(' + postersStr + ')');
  } catch (e) {
    console.error("Eval failed", e);
  }
  
  if (posters) {
    posters.forEach((p) => {
      const filename = p.image.split('/').pop();
      const numMatch = filename.match(/\d+/);
      if (numMatch) {
        p.order = parseInt(numMatch[0], 10);
      } else {
        delete p.order; // Remove incorrect order
      }
    });
    
    // Sort by order
    posters.sort((a, b) => {
      const orderA = typeof a.order === 'number' ? a.order : Infinity;
      const orderB = typeof b.order === 'number' ? b.order : Infinity;
      return orderA - orderB;
    });
    
    const newPostersStr = JSON.stringify(posters, null, 2);
    
    productsFile = productsFile.replace(match[0], `const posterProducts: Product[] = ${newPostersStr};\n`);
    fs.writeFileSync('src/data/products.ts', productsFile);
    console.log("Updated posters with correct order field based on title.");
  }
} else {
  console.log("Could not find posterProducts");
}

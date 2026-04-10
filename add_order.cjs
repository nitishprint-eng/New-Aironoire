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
    posters.forEach((p, i) => {
      p.order = i + 1;
    });
    
    posters.sort((a, b) => a.order - b.order);
    
    const newPostersStr = JSON.stringify(posters, null, 2);
    
    productsFile = productsFile.replace(match[0], `const posterProducts: Product[] = ${newPostersStr};\n`);
    fs.writeFileSync('src/data/products.ts', productsFile);
    console.log("Updated posters with order field.");
  }
} else {
  console.log("Could not find posterProducts");
}

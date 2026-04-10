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
    const aestheticNames = [
      "Peace", "Chaos", "Vibe", "Rhythm", "Lion", "Neon", "Retro", "Vintage", 
      "Abstract", "Minimal", "Geometry", "Illusion", "Dream", "Echo", "Pulse", 
      "Aura", "Zenith", "Horizon", "Eclipse", "Nova", "Vertex", "Prism", 
      "Spectrum", "Chroma", "Flow", "Kinetic", "Static", "Dynamic", "Fluid", 
      "Solid", "Void", "Matter", "Energy", "Force", "Motion", "Stillness", 
      "Silence", "Sound", "Vision", "Sight", "Focus", "Blur", "Sharp", "Soft", 
      "Hard", "Light", "Dark", "Shadow", "Glow", "Spark", "Flame", "Fire", 
      "Water", "Earth", "Air", "Wind", "Storm", "Calm", "Serene", "Wild", 
      "Tame", "Free", "Bound", "Limit", "Edge", "Center", "Core", "Surface", 
      "Depth", "Height", "Width", "Space", "Time", "Infinity", "Zero", "One", 
      "All", "Nothing", "Ethereal", "Luminous", "Radiant", "Vivid", "Obscure"
    ];

    let nameIndex = 0;

    posters.forEach((p, index) => {
      // Assign a new aesthetic name
      const newTitle = aestheticNames[nameIndex % aestheticNames.length];
      nameIndex++;

      p.title = newTitle;
      p.slug = newTitle.toLowerCase().replace(/\s+/g, '-');
      p.description = `${newTitle} - A premium quality poster for your modern space.`;
      
      // Ensure order is a strict number
      p.order = index + 1;
    });
    
    const newPostersStr = JSON.stringify(posters, null, 2);
    
    productsFile = productsFile.replace(match[0], `const posterProducts: Product[] = ${newPostersStr};\n`);
    fs.writeFileSync('src/data/products.ts', productsFile);
    console.log("Updated posters with aesthetic names.");
  }
} else {
  console.log("Could not find posterProducts");
}

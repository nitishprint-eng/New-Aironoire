const { GoogleGenAI } = require("@google/genai");

async function test() {
  try {
    const ai = new GoogleGenAI({});
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Hello'
    });
    console.log(response.text);
  } catch (e) {
    console.error(e);
  }
}
test();

async function main() {
  let productsFile = fs.readFileSync('src/data/products.ts', 'utf8');
  const match = productsFile.match(/const posterProducts: Product\[\] = (\[[\s\S]*?\]);\n/);
  
  if (!match) {
    console.log("Could not find posterProducts");
    return;
  }

  let postersStr = match[1];
  let posters;
  try {
    posters = eval('(' + postersStr + ')');
  } catch (e) {
    console.error("Eval failed", e);
    return;
  }
  
  console.log(`Processing ${posters.length} posters...`);
  
  // To avoid rate limits, process in batches of 5
  for (let i = 0; i < posters.length; i += 5) {
    const batch = posters.slice(i, i + 5);
    const promises = batch.map(async (p) => {
      console.log(`Generating title for ${p.image}...`);
      let title = await generateTitle(p.image);
      if (title) {
        // Clean up title just in case
        title = title.replace(/["*]/g, '').trim();
        // Capitalize words
        title = title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
        
        p.title = title;
        p.slug = title.toLowerCase().replace(/\s+/g, '-');
        p.description = `${title} - A premium quality poster for your modern space.`;
        console.log(`-> ${title}`);
      }
    });
    
    await Promise.all(promises);
    // Add a small delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  const newPostersStr = JSON.stringify(posters, null, 2);
  productsFile = productsFile.replace(match[0], `const posterProducts: Product[] = ${newPostersStr};\n`);
  fs.writeFileSync('src/data/products.ts', productsFile);
  console.log("Updated posters with AI-generated names.");
}

main();

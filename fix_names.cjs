const fs = require('fs');

const filePath = 'src/data/products.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// We need to parse and replace the titles and slugs in the dogLoversProducts array.
// The array starts at `const dogLoversProducts: Product[] = [` and ends before `const kidsArtProducts: Product[] = [`

const startIdx = content.indexOf('const dogLoversProducts: Product[] = [');
const endIdx = content.indexOf('const kidsArtProducts: Product[] = [');

if (startIdx !== -1 && endIdx !== -1) {
  let dogSection = content.substring(startIdx, endIdx);
  
  let counter = 1;
  
  // Replace "Dog Lover Art X" or "Dog Portrait X" with "Dog Portrait {counter}"
  dogSection = dogSection.replace(/title:\s*"([^"]+)"/g, (match, title) => {
    if (title === "Regal Retriever") {
      return match; // Keep Regal Retriever
    }
    if (title.startsWith("Dog Lover Art ") || title.startsWith("Dog Portrait ")) {
      const newTitle = `Dog Portrait ${counter}`;
      counter++;
      return `title: "${newTitle}"`;
    }
    return match;
  });
  
  // Also update slugs
  counter = 1;
  dogSection = dogSection.replace(/slug:\s*slugify\("([^"]+)"\)/g, (match, title) => {
    if (title === "Regal Retriever") {
      return match;
    }
    if (title.startsWith("Dog Lover Art ") || title.startsWith("Dog Portrait ")) {
      const newTitle = `Dog Portrait ${counter}`;
      counter++;
      return `slug: slugify("${newTitle}")`;
    }
    return match;
  });

  content = content.substring(0, startIdx) + dogSection + content.substring(endIdx);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Successfully updated product names and slugs.');
} else {
  console.log('Could not find the section.');
}

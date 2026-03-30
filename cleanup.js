const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Fix `<imgloading="lazy"` mistake
  content = content.replace(/<imgloading="lazy"/g, '<img loading="lazy"');

  // Fix duplicate loading attributes: matching `loading="lazy"` multiple times inside an img tag
  // We can just remove ALL `loading="lazy"` or `loading='lazy'` and just inject exactly ONE back.
  // Actually, a simpler regex: replace `loading="lazy"\s+loading="lazy"` with `loading="lazy"`
  content = content.replace(/loading="lazy"(\s+)loading="lazy"/g, 'loading="lazy"');
  content = content.replace(/loading="lazy"(\n.*?)loading="lazy"/g, 'loading="lazy"$1');
  
  // Clean up any remaining duplicates
  const imgRegex = /<img[^>]+>/g;
  content = content.replace(imgRegex, (match) => {
      let attrRegex = /loading=["'](lazy|eager)["']/g;
      let matches = match.match(attrRegex);
      if (matches && matches.length > 1) {
          // Remove all loading="lazy" and add just one
          let cleaned = match.replace(/loading=["'][^"']+["']/g, '');
          // Now just put one back right after <img
          cleaned = cleaned.replace(/<img\s*/, '<img loading="lazy" ');
          return cleaned;
      }
      return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed syntax errors in ' + file);
  }
});

import fs from 'fs';
import path from 'path';

const DIST_DIR = './dist';

function fixImportsInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fixedContent = content.replace(
    /from\s+['"](\.\/[^'"]+?)(\.ts)?['"]/g,
    (match, pathWithoutExt) => `from '${pathWithoutExt}.js'`
  );
  fs.writeFileSync(filePath, fixedContent, 'utf8');
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.js')) {
      fixImportsInFile(fullPath);
    }
  }
}

walk(DIST_DIR);
console.log('✅ Imports fixed: .ts → .js');
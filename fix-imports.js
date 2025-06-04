// fix-imports.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Vì dùng ESM nên cần xử lý __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');

function fixImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Sửa import relative path không có đuôi -> thêm .js
  content = content.replace(/from\s+['"]((\.{1,2}\/[^'"]+?))['"]/g, (match, importPath) => {
    // Bỏ qua nếu đã có .js/.json/.node
    if (/\.(js|json|node)$/.test(importPath)) return match;

    return `from '${importPath}.js'`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
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
console.log('✅ All .ts-style imports rewritten to .js in dist/');
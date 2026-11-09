const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const targetDir = path.join(rootDir, 'www');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const copyRecursive = (src, dest) => {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
};

const ignoredFiles = new Set([
  'package.json',
  'package-lock.json',
  'capacitor.config.json',
  'prepare-www.js'
]);

const allowedExtensions = new Set([
  '.html',
  '.css',
  '.js',
  '.json',
  '.webmanifest',
  '.png',
  '.jpg',
  '.jpeg',
  '.svg',
  '.ico',
  '.webp',
  '.woff2',
  '.woff',
  '.ttf',
  '.mp3',
  '.wav',
  '.ogg'
]);

const files = fs.readdirSync(rootDir);
for (const file of files) {
  if (file === 'www' || file === 'android' || file === 'node_modules' || file.startsWith('.')) {
    continue;
  }
  const fullPath = path.join(rootDir, file);
  const stat = fs.statSync(fullPath);
  if (stat.isDirectory()) {
    if (file === 'fonts') {
      copyRecursive(fullPath, path.join(targetDir, file));
    }
  } else if (stat.isFile()) {
    if (ignoredFiles.has(file)) continue;
    const ext = path.extname(file).toLowerCase();
    if (allowedExtensions.has(ext)) {
      fs.copyFileSync(fullPath, path.join(targetDir, file));
    }
  }
}

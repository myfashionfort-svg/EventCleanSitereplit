const fs = require('fs');
const path = require('path');

console.log('🔨 Building Astral Entertainment Website...\n');

// Create dist folder
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  console.log('✓ Created dist/ folder');
}

// Copy HTML files
const htmlFiles = ['index.html', 'pages/about.html', 'pages/services.html', 'pages/contact.html'];
htmlFiles.forEach(file => {
  const srcPath = path.join(__dirname, file);
  const destPath = path.join(distDir, file);
  
  // Create subdirectories if needed
  const destDir = path.dirname(destPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  fs.copyFileSync(srcPath, destPath);
  console.log(`✓ Copied ${file}`);
});

// Copy CSS
const cssSrc = path.join(__dirname, 'css/style.css');
const cssDist = path.join(distDir, 'css');
if (!fs.existsSync(cssDist)) {
  fs.mkdirSync(cssDist, { recursive: true });
}
fs.copyFileSync(cssSrc, path.join(cssDist, 'style.css'));
console.log('✓ Copied css/style.css');

// Copy images
const imagesSrc = path.join(__dirname, 'images');
const imagesDist = path.join(distDir, 'images');
if (!fs.existsSync(imagesDist)) {
  fs.mkdirSync(imagesDist, { recursive: true });
}
fs.readdirSync(imagesSrc).forEach(file => {
  fs.copyFileSync(path.join(imagesSrc, file), path.join(imagesDist, file));
});
console.log('✓ Copied images/');

// Create .htaccess for Apache servers
const htaccess = `<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ index.html [L]
</IfModule>

# Cache static assets for 1 month
<FilesMatch "\\.(jpg|jpeg|png|gif|ico|css|js)$">
    Header set Cache-Control "max-age=2592000, public"
</FilesMatch>

# Disable directory listing
Options -Indexes
`;

fs.writeFileSync(path.join(distDir, '.htaccess'), htaccess);
console.log('✓ Created .htaccess');

// Create build info
const buildInfo = `Build Information
=================
Generated: ${new Date().toISOString()}
Website: Astral Entertainment
Version: 1.0.0

Contents:
- 4 HTML pages
- 1 CSS file
- Logo image
- .htaccess configuration

Ready for production deployment.
`;

fs.writeFileSync(path.join(distDir, 'BUILD_INFO.txt'), buildInfo);
console.log('✓ Created BUILD_INFO.txt');

// Get dist size
const getSize = (dir) => {
  let size = 0;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  files.forEach(file => {
    if (file.isDirectory()) {
      size += getSize(path.join(dir, file.name));
    } else {
      size += fs.statSync(path.join(dir, file.name)).size;
    }
  });
  return size;
};

const totalSize = getSize(distDir);
const sizeInKB = (totalSize / 1024).toFixed(2);

console.log('\n✅ Build completed successfully!');
console.log(`\n📊 Build Statistics:`);
console.log(`   - Total size: ${sizeInKB} KB`);
console.log(`   - Output directory: ${distDir}`);
console.log(`\n📦 Ready for deployment to cPanel`);

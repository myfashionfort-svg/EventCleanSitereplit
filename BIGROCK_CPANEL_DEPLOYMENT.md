# Astral Entertainment React App - BigRock cPanel Deployment

## Prerequisites
- BigRock hosting account with Node.js support (check if available)
- cPanel access
- SSH access enabled
- Your domain configured in BigRock

---

## ⚠️ IMPORTANT: Check Node.js Support

**BigRock Shared Hosting typically doesn't support Node.js runtime.**

### Solution Options:

#### Option 1: Build & Deploy as Static Site (RECOMMENDED)
- Build React locally to static HTML/CSS/JS
- Upload dist/ to public_html
- Works on any hosting

#### Option 2: Use BigRock App Hosting
- Contact BigRock to upgrade to App Hosting
- Supports Node.js applications

#### Option 3: Use Alternative Hosting
- Heroku, Vercel, Netlify (supports Node.js)
- AWS, DigitalOcean, Linode

---

## Deployment Method: Build & Deploy as Static

### Step 1: Build React App Locally

```bash
# Navigate to project
cd client

# Install dependencies
npm install

# Build for production
npm run build

# Output: client/dist/
```

### Step 2: Connect to BigRock cPanel

#### Via File Manager:
1. Login to cPanel: `https://yourdomain.com:2083`
2. Click **File Manager**
3. Navigate to **public_html**
4. Delete all existing files

#### Via SSH (If available):
```bash
# Connect to BigRock server
ssh yourusername@yourdomain.com

# Navigate to public_html
cd public_html

# Remove old files
rm -rf *
```

### Step 3: Upload dist/ Files

#### Method A: cPanel File Manager (Easy)
1. In cPanel File Manager → public_html
2. Click **Upload**
3. Select all files from `client/dist/`
4. Upload

#### Method B: FTP (FileZilla)
```bash
# FTP Connection
Host: ftp.yourdomain.com
Username: (from BigRock)
Password: (from BigRock)
Port: 21
```

Navigate to `public_html` → drag files from `client/dist/`

#### Method C: SSH (Advanced)
```bash
# From your computer, copy files to server
scp -r client/dist/* yourusername@yourdomain.com:~/public_html/
```

### Step 4: Create .htaccess

In cPanel File Manager:
1. Create file: `.htaccess` in public_html
2. Paste:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ index.html [L]
</IfModule>

# Cache static assets
<FilesMatch "\\.(js|css|png|jpg|jpeg|gif|ico|svg)$">
    Header set Cache-Control "max-age=31536000, public"
</FilesMatch>

# Disable directory listing
Options -Indexes

# Enable GZIP compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### Step 5: Set Permissions

```bash
# Via SSH:
chmod 755 public_html
chmod 644 public_html/*
find public_html -type d -exec chmod 755 {} \;
find public_html -type f -exec chmod 644 {} \;
```

Or in File Manager:
- Right-click folders → Change Permissions → 755
- Right-click files → Change Permissions → 644

### Step 6: Enable SSL/HTTPS

1. In cPanel → **AutoSSL** or **Let's Encrypt SSL**
2. Select your domain
3. Click **Install**

### Step 7: Test Website

Open: `https://yourdomain.com`

---

## Quick Deployment Commands

```bash
# 1. Build locally
cd client
npm install
npm run build

# 2. Via SSH upload (if available)
scp -r dist/* yourusername@yourdomain.com:~/public_html/

# 3. Via FTP (use FileZilla)
# - Connect to ftp.yourdomain.com
# - Drag dist/* to public_html

# 4. Done! Visit https://yourdomain.com
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Blank page | Clear browser cache, check .htaccess, verify files uploaded |
| 404 on routes | Ensure .htaccess is in public_html with RewriteEngine on |
| Styling broken | Check CSS file paths in browser DevTools (F12) |
| Images not loading | Verify image paths, check public/ folder copied |
| Slow loading | Enable GZIP in .htaccess, check CDN links |

---

## File Structure in public_html

```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── *.js
│   └── *.css
└── (other static files)
```

---

## If BigRock Supports Node.js

If your BigRock plan has Node.js:

1. **In cPanel, create Node.js app**
2. **Point to your project**
3. **Set startup file:** `server/index.ts`
4. **Done!**

Ask BigRock support if your plan includes Node.js.

---

## Summary

- ✅ Build React locally to static files
- ✅ Upload dist/ to BigRock public_html
- ✅ Add .htaccess for routing
- ✅ Set permissions (755 folders, 644 files)
- ✅ Enable SSL
- ✅ Visit yourdomain.com

**Your site is live!** 🚀

---

For Node.js runtime apps → use Vercel, Heroku, or DigitalOcean

# Astral Entertainment - Deployment Guide

## Production Build Ready ✓

Your website is complete and ready for deployment to any web server.

## Server Compatibility
This website works on ANY web hosting provider:
- Shared hosting (cPanel, Plesk)
- Cloud servers (AWS, DigitalOcean, Linode)
- VPS hosting
- Dedicated servers
- Static site hosting (Netlify, Vercel, GitHub Pages)

## Deployment Steps

### Step 1: Upload Files
Upload all files in the `astral-production/` folder to your server's public root directory:

**Via FTP/SFTP:**
```
astral-production/
├── index.html          → Upload to /public_html/ or /www/
├── css/
│   └── style.css
├── images/
│   └── logo.jpg
└── pages/
    ├── about.html
    ├── services.html
    └── contact.html
```

**Via SSH:**
```bash
scp -r astral-production/* user@yourserver.com:/public_html/
```

### Step 2: Verify Permissions
Ensure files have proper permissions (644 for files, 755 for directories):
```bash
chmod 755 astral-production/
chmod 644 astral-production/*
chmod 644 astral-production/**/*
chmod 755 astral-production/css
chmod 755 astral-production/images
chmod 755 astral-production/pages
```

### Step 3: Access Your Site
After upload, access your website at:
- `https://youromain.com/`
- `https://youromain.com/index.html`

## File Checklist

- [x] index.html (13K) - Home page
- [x] pages/about.html (9.8K) - About Us
- [x] pages/services.html (13K) - Services
- [x] pages/contact.html (11K) - Contact
- [x] css/style.css (6.7K) - All styling
- [x] images/logo.jpg (83K) - Company logo
- [x] README.md (2.7K) - Documentation

**Total Size:** 152KB - Very fast loading!

## Server Configuration

### .htaccess (Apache Servers)
Create `.htaccess` in the root directory for clean URLs and caching:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ index.html [L]
</IfModule>

# Cache static assets for 1 month
<FilesMatch "\\.(jpg|jpeg|png|gif|ico|css|js)$">
    Header set Cache-Control "max-age=2592000, public"
</FilesMatch>
```

### nginx Configuration
If using nginx, add to server block:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}

# Cache static assets
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
}
```

## Important Notes

✓ **No Backend Required** - This is 100% frontend HTML/CSS/JavaScript
✓ **All Dependencies from CDN** - Bootstrap, fonts, icons loaded from CDN
✓ **Works Offline** - Once cached, works without internet
✓ **Mobile Responsive** - Perfect on all devices
✓ **SEO Ready** - Proper meta tags included
✓ **No Build Step** - Just upload and go!

## Contact Form

The contact form on `contact.html` shows a success message when submitted. To make it functional:

**Option 1: Using a Form Service**
- FormSubmit (https://formspree.io/)
- Netlify Forms
- Basin (https://usebasin.com/)

**Option 2: Using PHP** (if available on server)
Replace the form's JavaScript with a POST to a PHP backend.

## Support & Troubleshooting

- **Broken Links?** Check file paths - all links use relative URLs
- **Images Not Loading?** Verify images/ folder exists and has logo.jpg
- **Styling Missing?** Ensure css/style.css path is correct
- **CDN Issues?** Check Bootstrap/Google Fonts CDN availability

## Next Steps

1. ✓ Download `astral-production.tar.gz` from your Replit
2. ✓ Extract on your computer
3. ✓ Upload files to your server via FTP/SSH
4. ✓ Test at your domain
5. ✓ Done! 🚀

---

Built with Bootstrap 5 | Luxury Dark Theme | Fully Responsive
© 2024 Astral Entertainment

# Astral Entertainment - BigRock cPanel Deployment Guide

## Prerequisites
- BigRock hosting account
- cPanel access
- FTP or File Manager credentials
- Domain connected to BigRock

---

## Step 1: Build the Project

### Option A: Build Locally (Recommended)
```bash
# Navigate to astral-production folder
cd astral-production

# Install dependencies
npm install

# Run build
npm run build

# Output will be in dist/ folder
```

### Option B: Use Pre-built Files
If you prefer not to build, use files directly from the root folder (already optimized).

---

## Step 2: Connect to BigRock via File Manager (Easiest)

### Method 1: Using cPanel File Manager (Recommended)

1. **Login to cPanel**
   - Go to `https://yourdomainname.com:2083` or your BigRock control panel
   - Enter your cPanel username and password

2. **Navigate to public_html**
   - Click **File Manager** in cPanel
   - Select **public_html** folder
   - This is where your website files live

3. **Delete Existing Files** (if any)
   - Select all files in public_html
   - Click **Delete**
   - Confirm deletion

4. **Upload Your Files**
   - Click **Upload** button
   - Select the `dist/` folder contents (or root folder files)
   - Wait for upload to complete
   - You should see:
     ```
     index.html
     css/
     images/
     pages/
     .htaccess
     ```

5. **Set Permissions**
   - Select each folder: css/, images/, pages/
   - Right-click → Change Permissions
   - Set to **755** (for directories)
   - Click Apply

6. **Test Your Site**
   - Open browser and go to `https://yourdomain.com`
   - You should see the Astral website!

---

## Step 3: Connect via FTP (Alternative)

If you prefer FTP:

### Using FileZilla (Free FTP Client)

1. **Download FileZilla** from https://filezilla-project.org/

2. **Get FTP Credentials from BigRock**
   - Login to BigRock control panel
   - Go to **FTP Accounts** or **Hosting Details**
   - Copy: FTP username, password, and host address

3. **Connect in FileZilla**
   - File → Site Manager
   - Click **New Site**
   - Enter:
     - Host: ftp.yourdomain.com (or IP from BigRock)
     - Username: Your FTP username
     - Password: Your FTP password
     - Port: 21
   - Click **Connect**

4. **Navigate to public_html**
   - In Remote Site panel (right side)
   - Double-click **public_html** folder

5. **Delete Old Files**
   - Select all files/folders in public_html
   - Press Delete

6. **Upload New Files**
   - In Local Files panel (left side)
   - Navigate to your `dist/` folder or `astral-production/`
   - Select all files (Ctrl+A)
   - Drag to Remote Site panel (right side)
   - Wait for upload to complete

7. **Verify Upload**
   - Refresh remote panel
   - You should see all files in public_html

---

## Step 4: Configure .htaccess (Important for cPanel)

The .htaccess file is automatically included in the build. It handles:
- Clean URL routing
- Browser caching for faster loading
- Directory protection

If you need to edit it:

1. **In cPanel File Manager**
   - Show Hidden Files: Settings → Show Hidden Files (toggle ON)
   - Find **.htaccess** in public_html
   - Right-click → Edit
   - Paste the config below (it's already included):

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

# Disable directory listing
Options -Indexes
```

---

## Step 5: Verify Deployment

### Check These URLs:
- ✓ https://yourdomain.com (Home page)
- ✓ https://yourdomain.com/pages/about.html (About page)
- ✓ https://yourdomain.com/pages/services.html (Services page)
- ✓ https://yourdomain.com/pages/contact.html (Contact page)

### Test Navigation:
- Click menu links to verify all pages work
- Check images load properly
- Verify CSS styling applies (gold and black theme)

---

## Step 6: Enable SSL/HTTPS (Recommended)

1. **In cPanel**
   - Click **AutoSSL** or **Let's Encrypt SSL**
   - Select your domain
   - Click **Install**

2. **Force HTTPS** (Optional but recommended)
   - Add to .htaccess:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

---

## Troubleshooting

### Issue: Files showing 404 errors

**Solution:**
- Check file paths in .htaccess
- Verify files are in public_html
- Check folder permissions (755)

### Issue: Images not loading

**Solution:**
- Ensure images/ folder is in public_html
- Check image file permissions (644)
- Verify image paths in CSS: `../images/`

### Issue: Styling looks broken

**Solution:**
- Check css/ folder exists in public_html
- Verify style.css has 644 permissions
- Clear browser cache (Ctrl+Shift+Del)

### Issue: Can't upload files

**Solution:**
- Check disk space quota in BigRock
- Verify FTP/cPanel username has write permissions
- Try chunked upload in File Manager

---

## File Structure in public_html

```
public_html/
├── index.html              ← Main homepage
├── .htaccess              ← Configuration
├── css/
│   └── style.css          ← All styling
├── images/
│   └── logo.jpg           ← Astral logo
└── pages/
    ├── about.html
    ├── services.html
    └── contact.html
```

---

## Performance Optimization

Your website is optimized for speed:
- ✓ CDN-loaded Bootstrap (cached globally)
- ✓ Google Fonts optimization
- ✓ Minimal CSS (6.7 KB)
- ✓ Optimized images
- ✓ Browser caching enabled

---

## Support Resources

- **BigRock Help:** https://www.bigrock.in/support
- **cPanel Docs:** https://docs.cpanel.net/
- **Bootstrap Docs:** https://getbootstrap.com/docs/5.0/

---

## Quick Deployment Checklist

- [ ] Built project with `npm run build`
- [ ] Accessed cPanel File Manager
- [ ] Deleted old files from public_html
- [ ] Uploaded dist/ files to public_html
- [ ] Set permissions (755 for folders, 644 for files)
- [ ] Verified .htaccess is in place
- [ ] Tested all pages at your domain
- [ ] Enabled HTTPS/SSL
- [ ] Checked performance with browser DevTools

---

## You're Done! 🚀

Your Astral Entertainment website is now live on BigRock!

For updates in the future:
1. Build locally with `npm run build`
2. Upload new dist/ files to public_html
3. Clear browser cache to see changes

---

**Built with:** Bootstrap 5 | Responsive Design | Zero Dependencies
**Hosted on:** BigRock cPanel
**© 2024 Astral Entertainment**

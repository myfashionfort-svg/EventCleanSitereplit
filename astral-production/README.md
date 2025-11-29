# Astral Entertainment - Bootstrap HTML Website

## Overview
This is a standalone Bootstrap HTML version of the Astral Entertainment website featuring event management and professional cleaning services.

## Features
- **Responsive Design**: Mobile-friendly Bootstrap 5 framework
- **Luxury Dark Theme**: Gold and dark color scheme matching the brand
- **Multiple Pages**: Home, About, Services, and Contact pages
- **Modern UI Components**: Cards, navigation, forms, and more
- **SEO Ready**: Proper meta tags and semantic HTML

## File Structure
```
astral-bootstrap/
├── index.html           # Home page
├── css/
│   └── style.css       # Custom styling
├── js/
│   └── script.js       # Custom JavaScript (optional)
├── images/
│   └── logo.jpg        # Astral Entertainment logo
└── pages/
    ├── about.html      # About Us page
    ├── services.html   # Services page
    └── contact.html    # Contact Us page
```

## Installation & Usage

### Option 1: Direct File Usage
1. Extract the zip file
2. Open `index.html` in your web browser
3. Navigate through the pages using the menu

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Option 3: Deploy to Web Hosting
Upload all files to your web hosting provider via FTP or file manager.

## Customization

### Colors
Edit `css/style.css` to change the color scheme:
```css
:root {
  --primary: #d4af37;        /* Gold */
  --background: #0a0e27;     /* Dark background */
  --card-bg: #1a1f3a;        /* Card background */
  --text-light: #f2f2f2;     /* Light text */
  --text-muted: #a0a0a0;     /* Muted text */
}
```

### Content
Edit the HTML files directly to update:
- Company information
- Service descriptions
- Contact details
- Social media links

### Fonts
The website uses Google Fonts (Montserrat and Playfair Display). To change fonts, edit the `<link>` tags in the HTML head.

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies
- Bootstrap 5.3.0 (via CDN)
- Bootstrap Icons 1.11.0 (via CDN)
- Google Fonts

All dependencies are loaded from CDN, no local installation required.

## Contact Information
- **Company**: Eastcoast Gigs Pty LTD T/A Astral Entertainment
- **Email**: info@astral.net.au
- **Phone**: +61 7 3472 6473
- **Address**: 2/3 Page St, Kunda Park QLD 4556
- **Website**: astral.net.au

## License
All rights reserved © 2024 Astral Entertainment

# EGYMAK Herbs - Deployment Guide

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Nginx installed on the server
- Domain name configured (egymak.com)

## Build Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build for Production**
   ```bash
   npm run build
   ```
   This will create a `dist` folder with all the production-ready files.

## Nginx Deployment

### Step 1: Copy Build Files
```bash
# On your server, copy the dist folder to nginx directory
sudo cp -r dist /var/www/egymak-herbs/
sudo chown -R www-data:www-data /var/www/egymak-herbs
```

### Step 2: Configure Nginx
```bash
# Copy the nginx.conf to nginx sites-available
sudo cp nginx.conf /etc/nginx/sites-available/egymak-herbs

# Create symbolic link to sites-enabled
sudo ln -s /etc/nginx/sites-available/egymak-herbs /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

### Step 3: Update Server Paths
Edit `/etc/nginx/sites-available/egymak-herbs` and update:
- `root /var/www/egymak-herbs/dist;` - Update to your actual path
- `server_name egymak.com www.egymak.com;` - Update with your domain

### Step 4: SSL Certificate (Recommended)
```bash
# Install Certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d egymak.com -d www.egymak.com

# Certbot will automatically update your nginx config
```

After SSL is configured, uncomment the HTTPS server block in nginx.conf and comment out the HTTP redirect.

## Important Notes

1. **Logo Path**: The logo is now in `/public/logo.png` and will be accessible at `/logo.png` in production.

2. **React Router**: The nginx config includes `try_files $uri $uri/ /index.html;` to handle client-side routing.

3. **Caching**: Static assets are cached for 1 year, HTML files for 1 hour.

4. **Security Headers**: The nginx config includes security headers for better protection.

5. **Gzip Compression**: Enabled for better performance.

## Troubleshooting

### Logo Not Showing
- Ensure `/logo.png` exists in the `dist` folder after build
- Check nginx error logs: `sudo tail -f /var/log/nginx/egymak-error.log`
- Verify file permissions: `sudo chmod 644 /var/www/egymak-herbs/dist/logo.png`

### 404 Errors on Routes
- Ensure the nginx config has `try_files $uri $uri/ /index.html;` in the location / block
- Verify React Router is configured correctly

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist && npm run build`

## SEO Checklist

✅ Logo paths fixed (using `/logo.png`)
✅ Comprehensive meta tags added
✅ Structured data (JSON-LD) implemented
✅ Hreflang tags for multi-language support
✅ Sitemap updated with current date
✅ Robots.txt configured
✅ Open Graph and Twitter Card meta tags
✅ Security headers configured
✅ Gzip compression enabled
✅ Cache headers optimized

## Monitoring

- Check nginx access logs: `sudo tail -f /var/log/nginx/egymak-access.log`
- Check nginx error logs: `sudo tail -f /var/log/nginx/egymak-error.log`
- Monitor server resources: `htop` or `top`


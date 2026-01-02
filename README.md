# Micro Tunneling Business Portfolio Website

A modern, responsive portfolio website for a micro tunneling business showcasing services, projects, and company information.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Sections**:
  - Hero section with call-to-action
  - About Us section with company information and features
  - Our Work section showcasing completed projects
  - Gallery section with project images
  - Contact Us section with contact form and information
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Mobile Menu**: Hamburger menu for mobile devices
- **Interactive Elements**: Hover effects and animations throughout

## File Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Setup Instructions

1. **Open the website**: Simply open `index.html` in a web browser
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser

2. **Local Development Server** (Optional):
   - Using Python:
     ```bash
     python -m http.server 8000
     ```
   - Using Node.js (with http-server):
     ```bash
     npx http-server
     ```
   - Then visit `http://localhost:8000` in your browser

## Customization

### Adding Images

Replace the placeholder divs with actual images:

1. **Gallery Images**: Add your images to a folder (e.g., `images/`)
2. **Update HTML**: Replace `<div class="image-placeholder">` with:
   ```html
   <img src="images/your-image.jpg" alt="Description">
   ```

### Updating Content

- **Company Name**: Search for "MicroTunnelPro" in `index.html` and replace with your company name
- **Contact Information**: Update the contact details in the Contact section
- **Project Information**: Modify the project cards in the "Our Work" section
- **About Section**: Update the company description and features

### Styling

- **Colors**: Modify CSS variables in `styles.css` (lines 4-12):
  ```css
  :root {
      --primary-color: #2563eb;
      --secondary-color: #0f172a;
      /* ... */
  }
  ```

### Form Submission

The contact form currently shows an alert on submission. To connect it to a backend:

1. Update the form action in `index.html`
2. Modify the form submission handler in `script.js`
3. Add server-side processing (PHP, Node.js, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for use.


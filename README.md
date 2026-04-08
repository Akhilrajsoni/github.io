# 🎨 Akhil Raj Soni - Portfolio Website

**Software Developer · Web Developer · AI Tools Enthusiast**

A modern, fully-featured portfolio website showcasing projects, experience, and skills with stunning animations and interactive features.

**📧 akhilsoni953@gmail.com | 📱 +91 9451227855 | 💼 [github.com/akhilrajsoni](https://github.com/akhilrajsoni)**

## ✨ Features

### 🎯 Core Features

- **🎨 Animated Hero Section** - Engaging entrance with animated text and floating cards
- **📁 Project Showcase** - Beautiful project cards with hover effects and detailed descriptions
- **💼 Experience Timeline** - Interactive timeline displaying work history with achievements
- **🔧 Skills Section** - Categorized tech stack with animated progress bars
- **📧 Contact Form** - Fully functional contact form with validation and notifications
- **🌙 Dark/Light Mode Toggle** - Theme switching with localStorage persistence
- **⚡ Smooth Scrolling** - Seamless navigation between sections
- **📱 Fully Responsive** - Perfect on desktop, tablet, and mobile devices

### 🎬 Animations & Interactions

- Fade-in animations on scroll
- Floating card animations in hero section
- Hover effects on project cards
- Timeline animations with staggered delays
- Skill progress bar animations
- Scroll indicator with bounce animation
- Parallax effects on scroll
- Button hover and press effects

### 🎨 Design Elements

- Modern gradient backgrounds
- Smooth transitions throughout
- Color-coded sections
- Professional typography
- Responsive grid layouts
- Accessible color contrasts

## 📂 Project Structure

```
akhil_portfolio/
├── index.html       # Main HTML structure
├── styles.css       # All styling and animations
├── script.js        # Interactive features and functionality
└── README.md        # Project documentation
```

## 🚀 Quick Start

### Local Preview

1. Open `index.html` directly in your browser, OR
2. Run a local server:
   ```powershell
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

### Deploy to GitHub Pages

**See:** `DEPLOYMENT.md` for complete step-by-step instructions (10 minutes to go live!)

## 📋 Customization Guide

### Your Information (Already Updated!)

✅ **Personal Details** - Akhil Raj Soni, Software Developer & Web Developer
✅ **Contact Info** - Email: akhilsoni953@gmail.com | Phone: +91 9451227855
✅ **Projects** - 4 Real projects with generative images from Unsplash
✅ **Experience** - Prodesk Backend Intern & MIT Trainers ML Intern
✅ **Education** - B.Tech CSE at AKTU (Oct 2022 – Jun 2026)
✅ **Skills** - Languages, Web Development, ML & AI, Tools & Platforms
✅ **GitHub** - Link to your GitHub profile

### If You Need to Make Further Changes

1. **Update Project Links** - Replace Unsplash image URLs with your own project screenshots:
   ```html
   <img src="YOUR_IMAGE_URL" alt="Project Name" />
   ```

### Modifying Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --primary-color: #6366f1; /* Main brand color */
  --secondary-color: #8b5cf6; /* Accent color */
  --accent-color: #ec4899; /* Highlight color */
  --text-light: #1f2937; /* Light mode text */
  --bg-light: #ffffff; /* Light mode background */
  --bg-secondary-light: #f9fafb; /* Secondary light background */
}
```

### Adding New Sections

1. Add a new `<section>` in `index.html`
2. Create corresponding CSS in `styles.css`
3. Add navigation link in the navbar
4. Add scroll animation handling in `script.js`

## 🎯 Features Explained

### Dark/Light Mode

- Click the theme toggle button (moon/sun icon) in the navbar
- Preference is saved in browser localStorage
- Automatically applies on page reload

### Smooth Scrolling

- Click any navigation link to smoothly scroll to that section
- Keyboard shortcuts: `Ctrl/Cmd + 1-5` to jump to sections
- Active section highlighting in navigation

### Form Validation

- Email format validation
- Required field checking
- Success/error notifications
- Disabled button during submission

### Scroll Animations

- Elements fade in as they enter the viewport
- Skills progress bars animate when visible
- Project cards slide in with staggered timing
- Timeline items animate on scroll

### Responsive Design

- Mobile-first approach
- Breakpoints at 768px and 480px
- Touch-friendly interactive elements
- Optimized typography for all screen sizes

## 🔧 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## ⚡ Performance Optimization

- Minimal dependencies (pure HTML, CSS, JavaScript)
- CSS animations use GPU acceleration
- Intersection Observer for efficient scroll animations
- Optimized image placeholders
- Fast load times

## 🎨 Animation Timing

- Fade in animations: 0.6s
- Scroll animations: 0.3s - 0.8s
- Hover effects: 0.3s
- Theme transitions: 0.3s

## 🔐 Best Practices Implemented

- Semantic HTML structure
- Accessible color contrasts
- Keyboard navigation support
- Focus visible styles
- Mobile-responsive design
- Performance optimized
- Clean, commented code

## 📸 Sections Overview

### Hero Section

- Animated title with gradient text
- Subtitle and description
- Call-to-action buttons
- Floating animated cards
- Scroll indicator

### Projects Section

- Grid layout (responsive)
- Project cards with images
- Technology tags
- Project descriptions
- Project/GitHub links

### Experience Section

- Vertical timeline
- Chronological order
- Company names and dates
- Key achievements
- Hover animations

### Skills Section

- Categorized by type (Frontend, Backend, Tools)
- Animated progress bars
- Skill proficiency levels
- Responsive grid layout

### Contact Section

- Contact information cards
- Fully functional contact form
- Form validation
- Success notifications

## 🚀 Deployment

### GitHub Pages

1. Create a GitHub repository
2. Push your files to the `main` branch
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/akhil_portfolio`

### Netlify

1. Connect your GitHub repository
2. Set build command: (leave empty)
3. Publish directory: `.`
4. Deploy!

### Vercel

1. Import your GitHub repository
2. Framework: Other (static)
3. Deploy!

## 🐛 Troubleshooting

**Form not submitting?**

- Check browser console for errors
- Ensure all required fields are filled
- Verify email format

**Dark mode not persisting?**

- Check if localStorage is enabled
- Clear browser cache and reload

**Animations not working?**

- Ensure JavaScript is enabled
- Check browser compatibility
- Open browser developer console for errors

**Images not showing?**

- Currently using placeholder colors
- Replace with actual image URLs
- Update the `project-placeholder` divs or add `<img>` tags

## 📝 Future Enhancements

- Add image gallery for projects
- Implement project filtering
- Add blog section
- Newsletter subscription
- Social media integration
- Email notification backend
- PDF resume download
- Multiple language support

## 📄 License

This portfolio template is free to use and modify for personal use.

## 💡 Tips

1. **Personalization** - Replace all placeholder content with your actual information
2. **Analytics** - Add Google Analytics or similar tracking
3. **Performance** - Consider lazy loading for future images
4. **SEO** - Update meta tags with your information
5. **Backup** - Keep a backup of your content

## 🤝 Support

For issues or questions, refer to the inline code comments or check the browser console for error messages.

---

**Created with ❤️ for an amazing portfolio!**

Last Updated: April 2026

# Chaitany Mishra - Personal Portfolio

A modern, fully responsive personal portfolio website built with React, Tailwind CSS, shadcn/ui, and Framer Motion. Features stunning animations, particle backgrounds, and a professional design.

![Portfolio Preview](https://via.placeholder.com/1200x600/0f172a/06b6d4?text=Chaitany+Mishra+Portfolio)

## 🚀 Features

### ✨ Design & UI
- **Modern Dark Theme**: Sleek dark-futuristic color palette with cyan and blue accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Glass Morphism Effects**: Beautiful glassmorphic cards with backdrop blur
- **Gradient Animations**: Animated gradient text and backgrounds

### 🎬 Animations
- **Framer Motion**: Smooth, performant animations throughout
- **Particle System**: Canvas-based animated particle backgrounds
- **Scroll Animations**: Elements animate as they enter the viewport
- **Hover Effects**: Interactive hover states for all interactive elements
- **Loading States**: Smooth transitions and loading animations

### 📱 Sections
1. **Hero Section**: Full-screen hero with animated particles and gradient text
2. **About Section**: Personal information with animated skill progress bars
3. **Skills Timeline**: Interactive timeline with education and skills
4. **Projects Section**: Showcase of featured projects with hover effects
5. **Contact Section**: Functional contact form with validation
6. **Footer**: Social links and additional information

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Custom components with shadcn/ui patterns
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information
Update your personal details in the following components:
- `src/components/Hero.jsx` - Name and title
- `src/components/About.jsx` - Bio and skills
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Social links

### Projects
Add your projects in `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    tech: ['React', 'Tailwind'],
    demoUrl: 'https://your-demo.com',
    githubUrl: 'https://github.com/your-repo'
  }
];
```

### Color Scheme
Modify colors in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your primary colors */ },
  accent: { /* your accent colors */ },
  dark: { /* your dark theme colors */ }
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance

- **Lazy Loading**: Components load as needed
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Image Optimization**: Placeholder images with proper sizing
- **Code Splitting**: Automatic code splitting with Vite

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: chaitany.mishra.tech@gmail.com
- **Phone**: +91 9305224208
- **Location**: Kanpur, India
- **LinkedIn**: [linkedin.com/in/chaitanymishra](https://linkedin.com/in/chaitanymishra)
- **GitHub**: [github.com/chaitanymishra](https://github.com/chaitanymishra)

---

⭐ **If you found this portfolio helpful, please give it a star!** ⭐
# GTFS - Global Tech Fluid Services

A modern, responsive website for Global Tech Fluid Services, showcasing industrial filtration and pump solutions. Built with Next.js 15, TypeScript, and Shadcn UI.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Performance Optimized**: Image optimization, static generation, and efficient loading
- **SEO Ready**: Structured data, meta tags, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Build Tool**: Turbopack

## 📁 Project Structure

```
gtfs/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── api/               # API routes
│   │   ├── brand-guidelines/  # Brand guidelines page
│   │   ├── contact/           # Contact page
│   │   └── products/          # Product pages
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Shadcn UI components
│   │   └── ...               # Custom components
│   ├── data/                 # Static data and content
│   ├── lib/                  # Utility functions and types
│   └── contexts/             # React contexts
├── public/                   # Static assets
└── components.json           # Shadcn UI configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd gtfs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 UI Components

The project uses Shadcn UI components for consistent design:

- **Layout**: PageContainer, PageHeader, SiteHeader, SiteFooter
- **Navigation**: MainNav, SiteBreadcrumb
- **Forms**: SearchFilter, Contact forms
- **Display**: Cards, Badges, Tabs, Accordion

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized for all device sizes

## 🖼️ Image Optimization

- Uses Next.js Image component for automatic optimization
- WebP format support
- Lazy loading and responsive images
- Proper alt tags for accessibility

## 🔍 SEO Features

- Meta tags and Open Graph
- Structured data (JSON-LD)
- Semantic HTML structure
- Sitemap generation
- Breadcrumb navigation

## 📊 Performance

- Static site generation (SSG)
- Image optimization
- Code splitting
- Efficient bundle sizes
- Lighthouse score optimization

## 🚀 Deployment

The project is optimized for deployment on:

- Vercel (recommended)
- Netlify
- Any static hosting service

## 📄 License

This project is proprietary to Global Tech Fluid Services.

## 🤝 Contributing

For internal development and updates only.

---

Built with ❤️ using Next.js and modern web technologies.

# IT Artificer - Enterprise Software Solutions

A modern, high-performance corporate website for **IT Artificer**, built with **React 19** and **Vite**. This application showcases the company's services, portfolio (case studies), products, and company culture with a premium, responsive design.

## 🚀 Key Features

- **Comprehensive Service Showcase**: Detailed pages for software development, mobile apps, and web solutions.
- **Case Studies Portfolio**: Interactive portfolio demonstrating past projects and success stories.
- **Dynamic Blog & News**: Content hub for the latest updates and tech insights.
- **Company Culture**: "Life at ITA" section highlighting the team and core values.
- **Career Portal**: Job listings and application flow.
- **Product Catalog**: Showcase of proprietary software products.
- **SEO Optimized**: Built with React 19's native metadata API for superior search engine visibility.
- **responsive & Interactive**: Fluid animations and responsive layouts using Tailwind CSS v4.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Slider**: [Swiper](https://swiperjs.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

## 📂 Project Structure

The project follows a **Feature-Based Architecture** for scalability and maintainability.

```
src/
├── app/                  # App-wide configurations
│   ├── layouts/          # Main layouts (Navbar, Sidebar, Footer)
│   └── error-boundaries/ # Custom Error and 404 pages
├── features/             # Feature-specific modules
│   ├── home/
│   ├── services/
│   ├── caseStudies/
│   ├── products/
│   ├── careers/
│   └── ...
├── services/             # API services and configurations
├── shared/               # Shared logic and UI components
│   ├── components/       # Reusable business components (SEO, Headers)
│   ├── db/               # Centralized static data
│   ├── ui/               # Generic UI kit (Buttons, Inputs, Modals)
│   └── utils/            # Helper functions
└── main.jsx             # application entry point
```

## ⚡ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/itartificer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd itartificer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📦 Building for Production

Create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder optimized for deployment.

## 🌍 Deployment

This project is configured for seamless deployment on **Netlify**.

1. **Netlify Config**: A `netlify.toml` file is included to handle SPA routing redirects (`/*` -> `/index.html`).
2. **Build Settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

## 🔍 SEO Implementation

This project leverages **React 19's native `<title>` and `<meta>` support**. A custom `<SEO />` component manages:

- Dynamic Page Titles
- Meta Descriptions
- Open Graph Tags (Facebook/LinkedIn)
- Twitter Cards
- Canonical URLs

## 📄 License

© 2024 IT Artificer. All Rights Reserved.

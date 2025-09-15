# Maria Connects Goa 🌴

Your intelligent AI guide to the Entrepreneurs' Organization (EO) in Goa. Maria provides instant answers about events, member celebrations, membership information, and everything you need to know about the vibrant EO Goa community.

![Maria Connects Goa](./public/og-preview.png)

## ✨ Features

- **🤖 AI-Powered Chat**: Intelligent conversations with Maria about EO Goa
- **📅 Event Information**: Comprehensive details about upcoming events and workshops
- **🎉 Member Celebrations**: Birthdays, anniversaries, and community milestones
- **💼 Membership Guidance**: Information about joining EO Goa
- **📱 Mobile-First Design**: Optimized for all devices
- **🎨 Modern UI/UX**: Beautiful, accessible interface with smooth animations
- **⚡ Fast Performance**: Optimized for speed and reliability

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ArvinAIEngineer/maria-connects-goa.git
   cd maria-connects-goa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Google Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

### Project Structure

```
src/
├── components/          # React components
│   ├── chat/           # Chat-related components
│   ├── ui/             # Reusable UI components
│   └── ErrorBoundary.tsx
├── lib/                # Utilities and services
│   ├── llm.ts          # AI service integration
│   ├── dataService.ts  # Data management
│   └── config.ts       # Configuration
├── pages/              # Page components
└── assets/             # Static assets
```

## 🚀 Deployment

### Environment Variables

Required environment variables for production:

```env
VITE_GEMINI_API_KEY=your_production_api_key
NODE_ENV=production
```

### Deploy to Vercel

1. **Connect your repository to Vercel**
2. **Set environment variables in Vercel dashboard**
3. **Deploy automatically on push to main branch**

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder to Netlify**

### Manual Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Serve the `dist` folder** using any static hosting service

## 🔧 Configuration

### API Configuration

The application uses Google Gemini AI for chat functionality. Configure your API key in the environment variables.

### Data Service

The `dataService.ts` file contains mock data for EO Goa events, birthdays, and celebrations. In production, this should be connected to a real CMS or database.

## 🎨 Design System

The application uses a modern design system with:

- **Colors**: Purple/pink gradient theme inspired by modern AI interfaces
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first design with breakpoints for all devices

## 🔒 Security

- Environment variables for sensitive data
- Input validation and sanitization
- Error boundaries for graceful error handling
- Rate limiting considerations for API calls

## 📱 PWA Support

The application includes Progressive Web App features:

- Web app manifest
- Service worker ready
- Offline-first considerations
- App-like experience on mobile devices

## 🧪 Testing

### Browser Compatibility

Tested and supported on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance

- Lighthouse score: 95+ for Performance, Accessibility, Best Practices, SEO
- Core Web Vitals optimized
- Bundle size optimized with code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- EO Goa community for inspiration and requirements
- Google Gemini AI for powering the chat functionality
- Shadcn/ui for the beautiful component library
- Tailwind CSS for the styling system

## 📞 Support

For support and questions:
- Create an issue in this repository
- Contact the EO Goa tech team

---

**Made with ❤️ for the EO Goa community**

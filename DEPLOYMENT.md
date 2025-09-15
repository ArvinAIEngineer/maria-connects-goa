# 🚀 Maria Connects Goa - Deployment Guide

## Pre-Deployment Checklist

### ✅ Environment Configuration
- [ ] Google Gemini API key configured in production environment
- [ ] Environment variables validated using `src/lib/config.ts`
- [ ] `.env.example` file updated with all required variables
- [ ] Production environment variables set in hosting platform

### ✅ Code Quality
- [ ] All TypeScript errors resolved (`npm run type-check`)
- [ ] ESLint warnings addressed (`npm run lint`)
- [ ] Error boundaries implemented and tested
- [ ] Accessibility features verified (ARIA labels, keyboard navigation)
- [ ] Loading states and error handling tested

### ✅ Performance Optimization
- [ ] Bundle size optimized
- [ ] Images optimized and compressed
- [ ] Lazy loading implemented where appropriate
- [ ] Core Web Vitals targets met

### ✅ Security
- [ ] No hardcoded API keys in source code
- [ ] Input validation implemented
- [ ] Error messages don't expose sensitive information
- [ ] HTTPS enforced in production

### ✅ Testing
- [ ] Cross-browser testing completed (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness verified
- [ ] Chat functionality tested with various inputs
- [ ] Error scenarios tested (network failures, API errors)

## Deployment Steps

### 1. Build for Production

```bash
# Clean previous builds
npm run clean

# Type check
npm run type-check

# Lint code
npm run lint

# Build for production
npm run build
```

### 2. Test Production Build Locally

```bash
# Preview production build
npm run preview
```

### 3. Deploy to Vercel (Recommended)

1. **Connect Repository**
   - Link GitHub repository to Vercel
   - Configure automatic deployments

2. **Set Environment Variables**
   ```
   VITE_GEMINI_API_KEY=your_production_api_key
   NODE_ENV=production
   ```

3. **Deploy**
   - Push to main branch for automatic deployment
   - Or use Vercel CLI: `vercel --prod`

### 4. Deploy to Netlify

1. **Build and Deploy**
   ```bash
   npm run build
   # Upload dist/ folder to Netlify
   ```

2. **Configure Environment Variables**
   - Set in Netlify dashboard under Site Settings > Environment Variables

### 5. Custom Server Deployment

1. **Build Application**
   ```bash
   npm run build
   ```

2. **Serve Static Files**
   - Serve the `dist/` folder using nginx, Apache, or any static file server
   - Configure proper MIME types and caching headers

## Post-Deployment Verification

### ✅ Functionality Tests
- [ ] Chat interface loads correctly
- [ ] Quick suggestions work as expected
- [ ] AI responses are generated successfully
- [ ] Error handling works properly
- [ ] Mobile experience is smooth

### ✅ Performance Tests
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 90 for all metrics
- [ ] No console errors or warnings
- [ ] Proper caching headers configured

### ✅ SEO & Accessibility
- [ ] Meta tags properly configured
- [ ] Open Graph images display correctly
- [ ] Accessibility score > 95
- [ ] Keyboard navigation works

## Monitoring & Maintenance

### Analytics Setup
- Configure web analytics (Google Analytics, Plausible, etc.)
- Set up error tracking (Sentry, LogRocket, etc.)
- Monitor API usage and costs

### Regular Maintenance
- Update dependencies monthly
- Monitor API rate limits and usage
- Review and update EO Goa data regularly
- Test functionality after updates

## Troubleshooting

### Common Issues

1. **API Key Not Working**
   - Verify API key is correctly set in environment variables
   - Check API key permissions and quotas
   - Ensure no extra spaces or characters

2. **Build Failures**
   - Run `npm run type-check` to identify TypeScript errors
   - Check for missing dependencies
   - Verify Node.js version compatibility

3. **Performance Issues**
   - Analyze bundle size with `npm run build:analyze`
   - Optimize images and assets
   - Implement code splitting if needed

4. **Mobile Issues**
   - Test on actual devices, not just browser dev tools
   - Check touch interactions and viewport settings
   - Verify responsive breakpoints

## Support

For deployment issues:
1. Check the GitHub Issues page
2. Review deployment logs
3. Contact the development team
4. Refer to hosting platform documentation

---

**Deployment completed successfully! 🎉**

The Maria Connects Goa application is now ready to serve the EO Goa community with a modern, accessible, and performant chat experience.

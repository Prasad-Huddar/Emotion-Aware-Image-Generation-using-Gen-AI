# Frontend Setup Guide

## Installation Steps

### 1. Navigate to Frontend Directory
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required packages:
- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Lucide Icons (icon library)
- Axios (HTTP client)

### 3. Start Development Server
```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
```

Output will be in the `dist` folder.

## What You Get

A fully functional, professional React UI with:

- Beautiful gradient backgrounds with glassmorphism effects
- Responsive design for mobile, tablet, and desktop
- Real-time text input with character counter
- Example emotion suggestions
- Animated result display with emotion detection
- Generated image gallery with CLIP scoring
- Performance metrics dashboard
- Share and download functionality
- Smooth animations and transitions

## Project Features

### 1. Hero Section
Displays key features of the application with icon cards explaining:
- Emotion Detection (RoBERTa classifier)
- Smart Generation (Dynamic prompts)
- Quality Images (Stable Diffusion V5.1)

### 2. Input Form
- Text area for emotion input
- Real-time character count
- Disabled state during processing
- Quick example buttons
- Minimum character validation

### 3. Results Display
Shows:
- Original input text
- Detected emotion with confidence score
- Generated prompt
- Grid of generated images (3 per row)
- CLIP score visualization for each image

### 4. Image Cards
Each generated image shows:
- Image preview with hover effects
- Alt text/caption on hover
- CLIP alignment score
- Like button
- Download button
- Share button

### 5. Metrics Panel
Displays:
- Processing time
- Number of images generated
- Average CLIP score
- Emotion detection confidence
- Model information

## Component Structure

```
App (Main container)
├── Header (Navigation)
├── HeroSection (Landing page features)
├── InputSection (Text input form)
├── ResultsSection (Results page)
│   ├── EmotionBadge (Emotion indicator)
│   ├── ImageCard x3 (Generated images)
│   └── MetricsPanel (Performance stats)
└── Footer (Links & social)
```

## Connecting to Backend

To connect with your backend API:

1. Open `src/App.jsx`
2. Find the `handleSubmit` function
3. Replace the `setTimeout` with an actual API call:

```javascript
const response = await fetch('/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text })
})
const data = await response.json()
setResults(data)
```

## Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  accent: '#YOUR_COLOR'
}
```

### Add More Emotions
Update emotion colors in:
- `src/index.css` (emotion-badge classes)
- `src/components/ResultsSection.jsx` (emotionColors object)
- `src/components/EmotionBadge.jsx` (badges object)

### Modify Animations
Edit `src/index.css` or `tailwind.config.js` keyframes section.

## Troubleshooting

### Port Already in Use
Change port in `vite.config.js`:
```javascript
server: {
  port: 3001  // Change to another port
}
```

### Styling Issues
Clear Tailwind cache:
```bash
rm -rf node_modules/.vite
npm run dev
```

### Build Size Too Large
The development build is optimized for debugging. Production builds are much smaller:
```bash
npm run build
```

## Next Steps

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open http://localhost:3000
4. Explore the UI and customize as needed
5. Connect your backend API
6. Deploy to production

## Support

For issues or questions about the frontend, check:
- Component files in `src/components/`
- Tailwind documentation: https://tailwindcss.com
- React documentation: https://react.dev
- Vite documentation: https://vitejs.dev

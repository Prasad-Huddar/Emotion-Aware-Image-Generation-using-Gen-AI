# Emotion Vision UI

Professional React-based user interface for Emotion-to-Image Generation using Generative AI.

## Features

- Modern glassmorphism design with Tailwind CSS
- Real-time emotion detection visualization
- Image generation and display with CLIP scoring
- Responsive design for all devices
- Smooth animations and transitions
- Performance metrics dashboard
- Share and download functionality

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide Icons
- Axios

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will open at http://localhost:3000

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── HeroSection.jsx     # Landing section
│   ├── InputSection.jsx    # Text input form
│   ├── ResultsSection.jsx  # Results display
│   ├── EmotionBadge.jsx    # Emotion indicator
│   ├── ImageCard.jsx       # Generated image card
│   ├── MetricsPanel.jsx    # Performance metrics
│   └── Footer.jsx          # Footer
├── App.jsx                 # Main application component
├── main.jsx                # React entry point
└── index.css               # Global styles

```

## Components

### Header
Navigation and branding component with links to main sections.

### HeroSection
Landing section showcasing key features with feature cards.

### InputSection
Form for users to input emotions with example suggestions.

### ResultsSection
Displays detected emotion, generated images, and metrics.

### ImageCard
Individual image display with CLIP score and action buttons.

### MetricsPanel
Performance metrics including processing time and confidence scores.

### Footer
Links and social media connections.

## Styling

The UI uses a modern glassmorphism design with:

- Gradient backgrounds
- Backdrop blur effects
- Smooth animations
- Responsive grid layouts
- Custom Tailwind utilities

## API Integration

Currently uses mock data. To integrate with backend:

1. Update the `handleSubmit` function in `App.jsx`
2. Replace the setTimeout with actual API call to backend
3. Ensure backend returns data in the expected format

Example expected format:

```json
{
  "text": "user input",
  "emotion": "joy",
  "confidence": 0.89,
  "generatedImages": [
    {
      "id": 1,
      "url": "image_url",
      "caption": "image description",
      "clipScore": 0.78
    }
  ],
  "prompt": "generated prompt",
  "processingTime": 8.3
}
```

## Customization

### Colors

Edit `tailwind.config.js` to customize color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#6366f1',
      secondary: '#f97316',
      accent: '#ec4899',
    }
  }
}
```

### Animations

Add or modify animations in `src/index.css`

### Emotions

Update emotion-related components to support additional emotions or customize styling.

## Performance

- Lazy loading for images
- Optimized animations
- Responsive images
- Efficient re-renders with React hooks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

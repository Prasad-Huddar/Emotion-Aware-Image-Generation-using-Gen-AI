import React, { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import InputSection from './components/InputSection'
import ResultsSection from './components/ResultsSection'
import Footer from './components/Footer'

function App() {
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [inputText, setInputText] = useState('')

  const handleSubmit = async (text) => {
    setLoading(true)
    setInputText(text)
    
    // Simulate API call to backend
    setTimeout(() => {
      setResults({
        text: text,
        emotion: 'joy',
        confidence: 0.89,
        generatedImages: [
          {
            id: 1,
            url: 'https://via.placeholder.com/512x512?text=Generated+Image+1',
            caption: 'A vibrant and joyful scene',
            clipScore: 0.78
          },
          {
            id: 2,
            url: 'https://via.placeholder.com/512x512?text=Generated+Image+2',
            caption: 'Happy expression and bright lighting',
            clipScore: 0.81
          },
          {
            id: 3,
            url: 'https://via.placeholder.com/512x512?text=Generated+Image+3',
            caption: 'Joyful moment captured',
            clipScore: 0.76
          }
        ],
        prompt: 'A person smiling brightly with joyful expression, bright lighting, realistic photo',
        processingTime: 8.3
      })
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen gradient-primary flex flex-col">
      <Header />
      <main className="flex-1">
        {!results ? (
          <>
            <HeroSection />
            <InputSection onSubmit={handleSubmit} loading={loading} />
          </>
        ) : (
          <ResultsSection results={results} onNewSearch={() => setResults(null)} />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App

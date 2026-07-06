import React from 'react'
import { ArrowLeft, Download, Share2 } from 'lucide-react'
import EmotionBadge from './EmotionBadge'
import ImageCard from './ImageCard'
import MetricsPanel from './MetricsPanel'

function ResultsSection({ results, onNewSearch }) {
  const emotionColors = {
    joy: 'bg-yellow-400',
    sadness: 'bg-blue-400',
    anger: 'bg-red-500',
    fear: 'bg-purple-500',
    surprise: 'bg-orange-400',
    disgust: 'bg-green-500',
    neutral: 'bg-gray-400'
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      {/* Header with back button */}
      <div className="flex items-center justify-between">
        <button
          onClick={onNewSearch}
          className="flex items-center gap-2 text-white hover:text-indigo-200 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          New Search
        </button>
        <h2 className="text-3xl font-bold text-white">Results</h2>
        <div className="w-20" />
      </div>

      {/* Emotion Detection Result */}
      <div className="glass-effect p-8 rounded-2xl backdrop-blur-md animate-slideUp">
        <h3 className="text-xl font-semibold text-white mb-4">Detected Emotion</h3>
        <div className="space-y-6">
          <div>
            <p className="text-gray-200 text-sm mb-2">Your Text:</p>
            <p className="text-white text-lg italic bg-white bg-opacity-10 p-4 rounded-lg">"{results.text}"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-200 text-sm mb-3">Detected Emotion:</p>
              <div className="flex items-center gap-4">
                <div className={`${emotionColors[results.emotion]} rounded-full w-16 h-16 flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white capitalize">{results.emotion[0]}</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white capitalize">{results.emotion}</h4>
                  <p className="text-gray-300">Confidence: {(results.confidence * 100).toFixed(1)}%</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-200 text-sm mb-3">Generated Prompt:</p>
              <p className="text-white bg-white bg-opacity-10 p-4 rounded-lg">{results.prompt}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Images */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Generated Images</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.generatedImages.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>

      {/* Metrics */}
      <MetricsPanel results={results} />

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <button className="flex items-center gap-2 btn-primary">
          <Download className="w-5 h-5" />
          Download All
        </button>
        <button className="flex items-center gap-2 btn-secondary">
          <Share2 className="w-5 h-5" />
          Share Results
        </button>
      </div>
    </section>
  )
}

export default ResultsSection

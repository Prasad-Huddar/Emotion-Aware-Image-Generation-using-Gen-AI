import React from 'react'
import { BarChart3, Zap, Clock } from 'lucide-react'

function MetricsPanel({ results }) {
  return (
    <div className="glass-effect p-8 rounded-2xl backdrop-blur-md animate-slideUp">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <BarChart3 className="w-6 h-6" />
        Performance Metrics
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <p className="text-gray-300 text-sm mb-1">Processing Time</p>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-cyan-300" />
            <span className="text-2xl font-bold text-white">{results.processingTime.toFixed(1)}s</span>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <p className="text-gray-300 text-sm mb-1">Images Generated</p>
          <span className="text-2xl font-bold text-white">{results.generatedImages.length}</span>
        </div>

        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <p className="text-gray-300 text-sm mb-1">Average CLIP Score</p>
          <span className="text-2xl font-bold text-white">
            {(results.generatedImages.reduce((sum, img) => sum + img.clipScore, 0) / results.generatedImages.length).toFixed(2)}
          </span>
        </div>

        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <p className="text-gray-300 text-sm mb-1">Confidence</p>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span className="text-2xl font-bold text-white">{(results.confidence * 100).toFixed(0)}%</span>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-opacity-20 rounded-lg border border-indigo-400 border-opacity-30">
        <p className="text-indigo-100 text-sm">
          <span className="font-semibold">Emotion Classification:</span> Using fine-tuned RoBERTa model with 84% accuracy on 7-class emotion classification task.
        </p>
      </div>
    </div>
  )
}

export default MetricsPanel

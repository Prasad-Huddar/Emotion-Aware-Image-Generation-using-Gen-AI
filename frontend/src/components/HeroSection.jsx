import React from 'react'
import { Brain, Zap, Image } from 'lucide-react'

function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <div className="animate-fadeIn">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transform Your <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Emotions</span> Into Art
        </h2>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Harness the power of advanced AI to detect emotions in text and generate stunning, emotion-driven images using cutting-edge generative models.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass-effect p-8 rounded-xl backdrop-blur-md">
            <Brain className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Emotion Detection</h3>
            <p className="text-gray-200">RoBERTa-based classifier trained on 28 fine-grained emotions with 84% accuracy</p>
          </div>

          <div className="glass-effect p-8 rounded-xl backdrop-blur-md">
            <Zap className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Smart Generation</h3>
            <p className="text-gray-200">Dynamic prompt generation combining emotions with visual elements for realistic images</p>
          </div>

          <div className="glass-effect p-8 rounded-xl backdrop-blur-md">
            <Image className="w-12 h-12 text-pink-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Quality Images</h3>
            <p className="text-gray-200">Stable Diffusion V5.1 with CLIP-based ranking for optimal image-text alignment</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

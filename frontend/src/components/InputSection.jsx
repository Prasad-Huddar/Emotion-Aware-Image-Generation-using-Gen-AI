import React, { useState } from 'react'
import { Send, Loader } from 'lucide-react'

function InputSection({ onSubmit, loading }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onSubmit(text)
      setText('')
    }
  }

  const examples = [
    "I just won the lottery and I'm incredibly happy!",
    "I've been feeling so sad and lonely lately.",
    "I'm absolutely furious about this situation!",
  ]

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="glass-effect p-8 rounded-2xl backdrop-blur-md shadow-2xl animate-slideUp">
        <h3 className="text-2xl font-bold text-white mb-6">Share Your Emotion</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your thoughts and feelings here... (minimum 10 characters)"
              className="w-full p-4 rounded-xl bg-white bg-opacity-10 text-white placeholder-gray-300 border border-white border-opacity-20 focus:border-opacity-50 focus:outline-none backdrop-blur-sm transition resize-none"
              rows="5"
              disabled={loading}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <button
              type="submit"
              disabled={loading || text.trim().length < 10}
              className={`btn-primary flex items-center gap-2 ${loading || text.trim().length < 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 loading-spinner" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Generate Images
                </>
              )}
            </button>
            <p className="text-sm text-gray-200">{text.length} characters</p>
          </div>
        </form>

        <div className="mt-8 border-t border-white border-opacity-20 pt-6">
          <p className="text-gray-200 text-sm mb-4">Try these examples:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {examples.map((example, idx) => (
              <button
                key={idx}
                onClick={() => setText(example)}
                disabled={loading}
                className="p-3 bg-white bg-opacity-10 hover:bg-opacity-20 text-left rounded-lg text-sm text-gray-100 transition border border-white border-opacity-20"
              >
                "{example.substring(0, 30)}..."
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InputSection

import React from 'react'
import { Sparkles } from 'lucide-react'

function Header() {
  return (
    <header className="glass-effect shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Emotion Vision</h1>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="text-white hover:text-indigo-200 transition">Home</a>
          <a href="#about" className="text-white hover:text-indigo-200 transition">About</a>
          <a href="#features" className="text-white hover:text-indigo-200 transition">Features</a>
          <a href="#contact" className="text-white hover:text-indigo-200 transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

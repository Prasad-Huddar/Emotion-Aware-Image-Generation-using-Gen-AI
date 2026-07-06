import React from 'react'
import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

function Footer() {
  return (
    <footer className="glass-effect mt-20 border-t border-white border-opacity-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">About</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">Project</a></li>
              <li><a href="#" className="hover:text-white transition">Team</a></li>
              <li><a href="#" className="hover:text-white transition">Research</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Models</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">RoBERTa</a></li>
              <li><a href="#" className="hover:text-white transition">Stable Diffusion</a></li>
              <li><a href="#" className="hover:text-white transition">CLIP</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-6">
          <p className="text-center text-gray-300 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400" /> by the Emotion Vision Team
          </p>
          <p className="text-center text-gray-400 text-xs mt-2">2024 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React, { useState } from 'react'
import { Download, Heart, Share2 } from 'lucide-react'

function ImageCard({ image }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="glass-effect rounded-xl overflow-hidden backdrop-blur-md animate-slideUp hover:scale-105 transition duration-300 shadow-lg">
      <div className="relative overflow-hidden bg-gray-900 h-64">
        <img
          src={image.url}
          alt={image.caption}
          className="w-full h-full object-cover hover:scale-110 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end">
          <p className="text-white p-4 text-sm">{image.caption}</p>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <p className="text-gray-300 text-xs mb-1">CLIP Score</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-white bg-opacity-10 rounded-full h-2">
              <div
                className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                style={{ width: `${image.clipScore * 100}%` }}
              />
            </div>
            <span className="text-white font-semibold text-sm">{image.clipScore.toFixed(2)}</span>
          </div>
        </div>

        <p className="text-gray-200 text-sm line-clamp-2">{image.caption}</p>

        <div className="flex gap-2 pt-2 border-t border-white border-opacity-10">
          <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition">
            <Download className="w-4 h-4 text-white" />
            <span className="text-xs text-white">Download</span>
          </button>
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg transition ${
              liked ? 'bg-red-500 bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
            }`}
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
          </button>
          <button className="flex items-center justify-center gap-2 py-2 px-3 hover:bg-white hover:bg-opacity-10 rounded-lg transition">
            <Share2 className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageCard

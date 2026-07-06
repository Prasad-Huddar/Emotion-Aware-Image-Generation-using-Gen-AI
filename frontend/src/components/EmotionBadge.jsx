import React from 'react'

function EmotionBadge({ emotion, confidence }) {
  const badges = {
    joy: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' },
    sadness: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' },
    anger: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' },
    fear: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-300' },
    surprise: { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300' },
    disgust: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' },
    neutral: { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300' }
  }

  const badge = badges[emotion] || badges.neutral

  return (
    <div className={`emotion-badge ${badge.bg} ${badge.text} border ${badge.border}`}>
      <span className="capitalize font-semibold">{emotion}</span>
      {confidence && <span className="ml-2 opacity-75">({(confidence * 100).toFixed(0)}%)</span>}
    </div>
  )
}

export default EmotionBadge

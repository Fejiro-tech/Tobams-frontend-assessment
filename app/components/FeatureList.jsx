import React from 'react'

const FeatureList = ({ items }) => {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <span
            className="w-2 h-2 mt-2 bg-purple-700 rounded-full"
            aria-hidden="true"
          ></span>
          <span className="text-sm">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default FeatureList
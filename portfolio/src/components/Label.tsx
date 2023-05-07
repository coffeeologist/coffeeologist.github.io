import React from 'react'

import { Parallax } from 'react-scroll-parallax'

const Label = ({ text, height = 800, className = '' }) => {
  return (
    <Parallax translateY={[100, height]}>
      <div className={`hidden xl:section-label ${className}`}>
        {text} &mdash;&mdash;
      </div>
    </Parallax>
  )
}

export default Label

import React from 'react'

import { Parallax } from 'react-scroll-parallax'

const Label = ({ text, height = 800, special = false, className = '' }) => {
  return (
    <Parallax
      translateY={special ? [0, height] : [100, height]}
      startScroll={special ? 80 : null}
      endScroll={special ? 400 : null}
    >
      <div className={`hidden lg:section-label ${className}`}>
        {text} &mdash;&mdash;
      </div>
    </Parallax>
  )
}

export default Label

import React from 'react'

import { Parallax } from 'react-scroll-parallax'

const Label = ({
  text,
  height = 800,
  special = false,
  className = '',
}: {
  text: string
  height?: number
  special?: boolean
  className?: string
}) => {
  return (
    <Parallax
      translateY={special ? [0, height] : [100, height]}
      startScroll={special ? 80 : undefined}
      endScroll={special ? 400 : undefined}
    >
      <div className={`hidden lg:section-label ${className}`}>
        {text} &mdash;&mdash;
      </div>
    </Parallax>
  )
}

export default Label

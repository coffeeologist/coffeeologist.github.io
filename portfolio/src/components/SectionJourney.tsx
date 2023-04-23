import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import React from 'react'

const SectionJourney = () => {
  const { sections } = React.useContext(DataContext)

  const subtitles = sections.journey?.subtitle.split('\n')
  return (
    <div className="parallax-root">
      <div className="parallax-container">
        <Parallax translateX={[-100, 0]}>
          <p className="section-title">{sections.journey?.title}</p>
        </Parallax>

        {subtitles?.map((subtitle, index) => (
          <Parallax translateX={[50, -50]} key={index}>
            <p className="section-subtitle">{subtitle}</p>
          </Parallax>
        ))}
      </div>
    </div>
  )
}

export default SectionJourney

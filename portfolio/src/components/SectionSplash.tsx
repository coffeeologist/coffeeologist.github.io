import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import React from 'react'
import Image from 'next/image'

const SectionSplash = () => {
  const { sections } = React.useContext(DataContext)

  return (
    <div className="parallax-root -mt-12 ml-12">
      <div className="parallax-container">
        <Parallax scale={[1, 1.1]}>
          <p className="section-title">{sections.splash?.title}</p>
        </Parallax>
        <Parallax scale={[1, 0.9]}>
          <p className="section-subtitle ml-8 mt-2">
            {sections.splash?.subtitle}
          </p>
        </Parallax>
      </div>
      <Image
        src={sections.splash?.images[0].source}
        alt="splash image"
        width={400}
        height={400}
      ></Image>
    </div>
  )
}

export default SectionSplash

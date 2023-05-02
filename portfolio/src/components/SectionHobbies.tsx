import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import React from 'react'
import Image from 'next/image'

const SectionHobbies = () => {
  const { sections } = React.useContext(DataContext)

  return (
    <div className="parallax-root">
      <div className="parallax-container">
        <Parallax
          translateX={[-20, 5]}
          opacity={[0, 3]}
          startScroll={3800}
          endScroll={4200}
        >
          <p className="section-title-small xl:section-title">
            {sections.hobbies?.title}
          </p>
        </Parallax>
      </div>

      <div className="parallax-container">
        <Parallax
          translateX={[-20, 5]}
          opacity={[0, 3]}
          startScroll={4000}
          endScroll={4300}
        >
          <p className="section-subtitle-small xl:section-subtitle">
            {sections.hobbies?.subtitle}
          </p>
        </Parallax>
      </div>

      <div className="parallax-container"></div>
      <div className="parallax-container">
        <Parallax
          translateY={[-20, -5]}
          opacity={[0, 3]}
          startScroll={4200}
          endScroll={4400}
        >
          <Image
            src={sections.hobbies?.images[0].source}
            className="xl:justify-self-end"
            alt="hobbies a"
            width={450}
            height={450}
          />
        </Parallax>
      </div>
    </div>
  )
}

export default SectionHobbies

import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import React from 'react'
import Image from 'next/image'
import Label from './Label'

const SectionHobbies = () => {
  const { sections } = React.useContext(DataContext)

  return (
    <div>
      <Label text="Hobbies" height={600} />
      <div className="parallax-root">
        <div className="parallax-container">
          <Parallax translateX={[-20, 5]} opacity={[0, 2]} easing="easeOut">
            <p className="section-title-small mb-10 xl:mb-0 xl:section-title">
              {sections.hobbies?.title}
            </p>
          </Parallax>
        </div>

        <div className="parallax-container">
          <Parallax translateX={[-10, 5]} opacity={[0, 2]} easing="easeOutExpo">
            <p className="section-subtitle-small mb-4 xl:mb-0 xl:section-subtitle">
              {sections.hobbies?.subtitle}
            </p>
          </Parallax>
        </div>

        <div className="parallax-container"></div>
        <div className="parallax-container">
          <Parallax translateY={[-20, -5]} opacity={[0, 4]} easing="easeInOut">
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
    </div>
  )
}

export default SectionHobbies

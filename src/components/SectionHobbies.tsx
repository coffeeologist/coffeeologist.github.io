// import { Parallax } from 'react-scroll-parallax'
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
          <p className="section-title-small text-right mb-10 xl:pr-10 xl:mb-0 xl:section-title">
            {sections.hobbies.title}
          </p>
        </div>

        <div className="parallax-container">
          <p className="section-subtitle-small mb-4 xl:mb-0 xl:section-subtitle">
            {sections.hobbies.subtitle}
          </p>
        </div>

        <div className="parallax-container"></div>
        <div className="parallax-container">
          <Image
            src={sections.hobbies.images[0].source}
            className="xl:justify-self-end"
            alt="hobbies a"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  )
}

export default SectionHobbies

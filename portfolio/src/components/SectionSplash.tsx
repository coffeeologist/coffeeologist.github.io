import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import React from 'react'
import Image from 'next/image'
import CTA, { SpecialCTA } from './CTA'
import Label from './Label'

const SectionSplash = () => {
  const { sections } = React.useContext(DataContext)

  const handleClick = () => {
    console.log('hello')
    const nextSection = document.querySelector('#next-section-anchor')
    console.log(nextSection)
    nextSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div>
      <Label text="Introduction" special />
      <div className="parallax-root first-root">
        <div className="parallax-container">
          <p className="section-title-small xl:section-title">
            {sections.splash?.title}
          </p>
          <p className="section-subtitle-small xl:section-subtitle ml-8 mt-5 mb-5">
            {sections.splash?.subtitle}
          </p>
          <div onClick={handleClick}>
            <SpecialCTA text={sections.splash?.cta} />
          </div>
        </div>
        <Image
          src={sections.splash?.images[0].source}
          alt="splash image"
          key="splash-a"
          width={450}
          height={450}
        ></Image>
      </div>
    </div>
  )
}

export default SectionSplash

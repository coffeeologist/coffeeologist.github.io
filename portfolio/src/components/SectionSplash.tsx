import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import React from 'react'
import Image from 'next/image'
import CTA from './CTA'

const SectionSplash = () => {
  const { sections } = React.useContext(DataContext)

  return (
    <div className="">
      <div className="parallax-root">
        <div className="parallax-container">
          <Parallax
            scale={[1, 1.5]}
            startScroll={80}
            endScroll={1000}
            className="xl:w-max"
          >
            <p className="section-title-small xl:section-title xl:typewriter">
              {sections.splash?.title}
            </p>
          </Parallax>
          <Parallax scale={[1, 0.5]} startScroll={80} endScroll={1000}>
            <p className="section-subtitle-small xl:section-subtitle ml-8 mt-5 mb-5">
              {sections.splash?.subtitle}
            </p>
          </Parallax>
          <Parallax scale={[1, 1.5]} startScroll={80} endScroll={1000}>
            <CTA text={sections.splash?.cta} href="/" />
          </Parallax>
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

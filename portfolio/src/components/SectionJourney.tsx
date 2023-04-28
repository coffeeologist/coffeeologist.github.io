import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import CTA from './CTA'
import React from 'react'
import Image from 'next/image'

const SectionJourney = () => {
  const { sections } = React.useContext(DataContext)

  return (
    <div className="">
      <div className="parallax-root items-start">
        <div className="parallax-container">
          <Parallax
            opacity={[1, 1]}
            translateY={[0, 0]}
            startScroll={700}
            endScroll={800}
          >
            <Image
              src={sections.journey?.images[0].source}
              className="mx-auto"
              alt="journey image a"
              width={400}
              height={400}
            />
          </Parallax>
        </div>

        <div className="parallax-container pt-20">
          <Parallax
            translateX={[-50, 0]}
            opacity={[0, 2]} // 2 so it reaches 1 faster
            startScroll={100}
            endScroll={600}
          >
            <p className="section-title-small xl:section-title">
              {sections.journey?.title}
            </p>
          </Parallax>
        </div>

        <div className="parallax-container pt-10 pl-8 xl:pr-20">
          <Parallax
            translateX={[50, 0]}
            opacity={[0, 1]}
            startScroll={200}
            endScroll={700}
          >
            <p className="section-subtitle-small xl:section-subtitle">
              {sections.journey?.subtitle}
            </p>
          </Parallax>
        </div>
        <div className="parallax-container pt-10 pl-8 xl:pr-5">
          <Parallax
            translateX={[50, 0]}
            opacity={[0, 1]}
            startScroll={200}
            endScroll={700}
          >
            <p className="section-subtitle-small xl:section-subtitle mt-0 ">
              {sections.journey?.subtitleOpt}
            </p>
          </Parallax>
        </div>

        <div className="parallax-container"></div>
        <div className="parallax-container mt-5">
          <Parallax
            opacity={[0, 1]}
            translateY={[50, 0]}
            startScroll={800}
            endScroll={900}
          >
            <CTA text={sections.journey?.cta} href="/" />
          </Parallax>
        </div>
      </div>
    </div>
  )
}

export default SectionJourney

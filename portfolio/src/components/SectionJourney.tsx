// import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import CTA from './CTA'
import React from 'react'
import Image from 'next/image'
import Label from './Label'

const SectionJourney = () => {
  const { sections } = React.useContext(DataContext)
  const { socialData } = React.useContext(DataContext)

  return (
    <div>
      <Label text="Journey" height={950} />
      <div className="parallax-root items-start">
        <div className="parallax-container">
          <Image
            src={sections.journey.images[0].source}
            className="mx-auto"
            alt="journey image a"
            width={400}
            height={400}
          />
        </div>

        <div className="parallax-container pt-8 xl:pt-20">
          <p className="section-title-small xl:section-title">
            {sections.journey.title}
          </p>
        </div>

        <div className="parallax-container pt-10 pl-8 xl:pr-20">
          <div className="section-subtitle-small text-right xl:section-subtitle flex-row">
            <div id="next-section-anchor" />
            <p className="w-2/3 inline-block">{sections.journey.subtitle}</p>
          </div>
        </div>
        <div className="parallax-container pt-10 pl-8 xl:pl-0 xl:pr-5">
          <div className="section-subtitle-small xl:section-subtitle mt-0 flex-row">
            <p className="w-2/3 align-top inline-block mb-5">
              {sections.journey.subtitleOpt}
            </p>
            <Image
              src={sections.journey.images[1].source}
              className="inline-block align-top"
              alt="journey image b"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="parallax-container"></div>
        <div className="parallax-container mt-5">
          {sections.journey.cta && (
            <CTA text={sections.journey.cta} href={socialData.linkedin} />
          )}
        </div>
      </div>
    </div>
  )
}

export default SectionJourney

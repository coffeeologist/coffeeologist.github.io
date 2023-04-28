import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import React from 'react'
import Image from 'next/image'

const SectionCreative = () => {
  const { sections } = React.useContext(DataContext)

  return (
    <div className="parallax-root items-start">
      <div className="parallax-container pt-20 xl:pr-32">
        <Parallax
          translateX={[-25, 0]}
          opacity={[0, 2]} // 2 so it reaches 1 faster
          startScroll={100}
          endScroll={600}
        >
          <p className="section-title-small xl:section-title text-right">
            {sections.creatives?.title}
          </p>
        </Parallax>
      </div>

      <div className="parallax-container xl:-ml-32">
        <Parallax translateX={[25, 0]} startScroll={100} endScroll={600}>
          <Image
            src={sections.creatives?.images[0].source}
            className="mx-auto"
            alt="creatives image a"
            width={450}
            height={450}
          />
        </Parallax>
      </div>

      <div className="parallax-container creative-blob">
        <Parallax scale={[0, 1]}>
          <Image
            src={sections.creatives?.images[1].source}
            className="mx-auto rounded-2xl xl:blob-card xl:creative-a"
            alt="creatives showcase a"
            width={450}
            height={450}
          />
        </Parallax>
        <Parallax scale={[0, 1]}>
          <Image
            src={sections.creatives?.images[2].source}
            className="mx-auto rounded-2xl xl:blob-card xl:creative-b"
            alt="creatives showcase b"
            width={450}
            height={450}
          />
        </Parallax>
        <Parallax scale={[0, 1]}>
          <Image
            src={sections.creatives?.images[3].source}
            className="mx-auto rounded-2xl xl:blob-card xl:creative-c"
            alt="creatives showcase c"
            width={450}
            height={450}
          />
        </Parallax>
        <Parallax scale={[0, 1]}>
          <Image
            src={sections.creatives?.images[4].source}
            className="mx-auto rounded-2xl xl:blob-card xl:creative-d"
            alt="creatives showcase d"
            width={450}
            height={450}
          />
        </Parallax>
      </div>
    </div>
  )
}

export default SectionCreative

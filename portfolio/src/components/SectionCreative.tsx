import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import React from 'react'
import Image from 'next/image'

const SectionCreative = () => {
  const { sections } = React.useContext(DataContext)

  return (
    <div className="parallax-root items-start h-min">
      <div className="parallax-container pt-12 xl:pr-32">
        <Parallax translateX={[-20, 10]}>
          <p className="section-title-small xl:section-title text-right">
            {sections.creatives?.title}
          </p>
        </Parallax>
      </div>

      <div className="parallax-container xl:-ml-32">
        <Parallax translateY={[20, -20]}>
          <Image
            src={sections.creatives?.images[0].source}
            className="mx-auto"
            alt="creatives image a"
            width={450}
            height={450}
          />
        </Parallax>
      </div>

      <div className="parallax-container creative-blob w-full h-screen">
        <Parallax
          scale={[0, 1]}
          startScroll={2900}
          endScroll={3300}
          opacity={[-1, 2]}
          translateY={[120, 0]}
        >
          <div className="xl:blob-card xl:creative-a">
            <Image
              src={sections.creatives?.images[1].source}
              className="blob-card-image"
              alt="creatives showcase a"
              width={sections.creatives?.images[1].width}
              height={sections.creatives?.images[1].height}
            />
            <p className="blob-card-description xl:left-3/4 xl:bottom-3">
              {sections.creatives?.images[1].description}
            </p>
          </div>
        </Parallax>
        <Parallax
          scale={[0, 1]}
          startScroll={2850}
          endScroll={3300}
          opacity={[-1, 2]}
          translateY={[120, 0]}
        >
          <div className="xl:blob-card xl:creative-b">
            <Image
              src={sections.creatives?.images[2].source}
              className="blob-card-image"
              alt="creatives showcase b"
              width={sections.creatives?.images[2].width}
              height={sections.creatives?.images[2].height}
            />
            <p className="blob-card-description xl:left-1/2 xl:-bottom-3">
              {sections.creatives?.images[2].description}
            </p>
          </div>
        </Parallax>
        <Parallax
          scale={[0, 1]}
          startScroll={2900}
          endScroll={3250}
          opacity={[-1, 2]}
          translateY={[120, 0]}
        >
          <div className="xl:blob-card xl:creative-c">
            <Image
              src={sections.creatives?.images[3].source}
              className="blob-card-image"
              alt="creatives showcase c"
              width={sections.creatives?.images[3].width}
              height={sections.creatives?.images[3].height}
            />
            <p className="blob-card-description xl:left-1/3 xl:-top-5">
              {sections.creatives?.images[3].description}
            </p>
          </div>
        </Parallax>

        <Parallax
          scale={[0, 1]}
          startScroll={2650}
          endScroll={3200}
          opacity={[-1, 2]}
          translateY={[120, 0]}
        >
          <div className="xl:blob-card xl:creative-d">
            <Image
              src={sections.creatives?.images[4].source}
              className="blob-card-image"
              alt="creatives showcase d"
              width={sections.creatives?.images[4].width}
              height={sections.creatives?.images[4].height}
            />
            <p className="blob-card-description xl:-left-5 xl:-top-3">
              {sections.creatives?.images[4].description}
            </p>
          </div>
        </Parallax>
        <Parallax
          scale={[0, 1]}
          startScroll={2700}
          endScroll={3250}
          opacity={[-1, 2]}
          translateY={[120, 0]}
        >
          <div className="xl:blob-card xl:creative-e">
            <Image
              src={sections.creatives?.images[5].source}
              className="blob-card-image"
              alt="creatives showcase e"
              width={sections.creatives?.images[5].width}
              height={sections.creatives?.images[5].height}
            />
            <p className="blob-card-description xl:-left-10 xl:top-12">
              {sections.creatives?.images[5].description}
            </p>
          </div>
        </Parallax>
        <Parallax
          scale={[0, 1]}
          startScroll={2950}
          endScroll={3250}
          opacity={[-1, 2]}
          translateY={[120, 0]}
        >
          <div className="xl:blob-card xl:creative-f">
            <Image
              src={sections.creatives?.images[6].source}
              className="blob-card-image"
              alt="creatives showcase f"
              width={sections.creatives?.images[6].width}
              height={sections.creatives?.images[6].height}
            />
            <p className="blob-card-description xl:-left-10 xl:top-8">
              {sections.creatives?.images[6].description}
            </p>
          </div>
        </Parallax>

        <Parallax
          scale={[0, 1]}
          startScroll={2650}
          endScroll={3300}
          opacity={[-1, 2]}
          translateY={[120, 0]}
        >
          <div className="xl:blob-card xl:creative-g">
            <Image
              src={sections.creatives?.images[7].source}
              className="blob-card-image"
              alt="creatives showcase g"
              width={sections.creatives?.images[7].width}
              height={sections.creatives?.images[7].height}
            />
            <p className="blob-card-description xl:left-3/4 xl:top-5">
              {sections.creatives?.images[7].description}
            </p>
          </div>
        </Parallax>
      </div>
    </div>
  )
}

export default SectionCreative

import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import React from 'react'
import Image from 'next/image'
import Label from './Label'
import { wrapGrid } from 'animate-css-grid'

const AnimatedGridCard = (prop) => {
  const imageStyle = {}
  const cardRef = React.useRef()

  return (
    <div
      className={
        'tooltip animated-grid-card ' +
        (prop.imgsrc.startExpanded && ' animated-grid-card--expanded ') +
        (prop.imgsrc.wide && ' animated-grid-card--wide ')
      }
      ref={cardRef}
    >
      <div className="mx-0 my-0">
        <span className="tooltip-text">{prop.imgsrc.description}</span>
        <Image
          src={prop.imgsrc.source}
          style={imageStyle}
          alt="creatives image a"
          width={prop.imgsrc.width}
          height={prop.imgsrc.height}
        ></Image>
      </div>
    </div>
  )
}
const SectionCreative = () => {
  const { sections } = React.useContext(DataContext)
  const gridRef = React.useRef()

  React.useEffect(() => {
    wrapGrid(gridRef.current, {
      duration: 300,
      easing: 'easeIn',
    })

    const handleClick = (ev) => {
      const target = ev.target
      if (
        target.parentElement.parentElement.classList.contains(
          'animated-grid-card'
        )
      ) {
        target.parentElement.parentElement.classList.toggle(
          'animated-grid-card--expanded'
        )
        return
      }
    }

    gridRef.current.addEventListener('click', handleClick)

    return () => {
      gridRef.current.removeEventListener('click', handleClick)
    }
  })

  return (
    <div>
      <Label text="Artworks & Photography" height={1200} />
      <div className="parallax-root items-start xl:h-min">
        <div className="parallax-container pt-8 xl:pt-12 xl:pr-32">
          <p className="section-title-small xl:section-title text-center xl:text-right mb-5">
            {sections.creatives?.title}
          </p>
        </div>

        <div className="parallax-container mb-10 xl:-ml-32">
          <Image
            src={sections.creatives?.images[0].source}
            className="mx-auto"
            alt="creatives image a"
            width={450}
            height={450}
          />
        </div>
        <div className="grid-cols-2 lg:animated-grid w-3/4" ref={gridRef}>
          {sections.creatives?.images.map((i) =>
            i.width ? <AnimatedGridCard key={i.source} imgsrc={i} /> : null
          )}
        </div>
      </div>
    </div>
  )
}

export default SectionCreative

import * as React from 'react'
import Image from 'next/image'
import { DataContext } from './DataContext'
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion'

import dynamic from 'next/dynamic'
const Animator = dynamic(
  import('react-scroll-motion').then((it) => it.Animator),
  { ssr: false }
)

const SectionSplash = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
  const FadeUp = batch(Fade(), Move(), Sticky())
  const { sections } = React.useContext(DataContext)

  return (
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        {' '}
        <span className="text-3xl font-bold text-editor-text block">
          {sections.splash?.title}
        </span>
        <Image
          src={sections.splash?.images[0].source}
          width={200}
          height={200}
          alt="section-splash-a"
          className="float-right"
        />
        <span className="text-xl text-editor-text block">
          {sections.splash?.subtitle}
        </span>{' '}
      </Animator>
    </ScrollPage>
  )
}

export default SectionSplash

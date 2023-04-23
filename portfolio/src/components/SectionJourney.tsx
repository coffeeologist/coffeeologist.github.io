import * as React from 'react'
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

const SectionJourney = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
  const FadeUp = batch(Fade(), Move(), Sticky())
  const { socialData } = React.useContext(DataContext)

  return (
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <span class="text-3xl text-editor-highlight-1">
          {' '}
          {socialData.github} 😀
        </span>
      </Animator>
    </ScrollPage>
  )
}

export default SectionJourney

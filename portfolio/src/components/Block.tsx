import Image from 'next/image';
import * as React from 'react';
import { DataContext } from './DataContext';

import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Block: React.FC = (() => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const {socialData} = React.useContext(DataContext);

  return (
<ScrollContainer class="bg-blue-500 hover:bg-purple-500">
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "30px" }}> {socialData.linkedin} O 😀</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={ZoomInScrollOut}>
      <span class="text-purple-500 hover:text-slate-500" style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
        - I'm Dante Chun -
        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
      </span>
    </div>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "40px" }}>Done</span>
      <br/>
      <span style={{ fontSize: "30px" }}>
        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
      </span>
    </Animator>
  </ScrollPage>
</ScrollContainer>
  );
});

export default Block;
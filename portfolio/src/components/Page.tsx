import {memo} from 'react';

import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Page = (({children, title, description}) => {
  return (<div class="bg-editor-background">
    <ScrollContainer>
      {children}
    </ScrollContainer>
  </div>);
});

export default Page;
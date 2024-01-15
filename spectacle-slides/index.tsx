import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, MarkdownSlideSet } from 'spectacle';
import mdContent from './slides.md';

const Presentation = () => (
  <Deck template={() => <DefaultTemplate />}>
    <MarkdownSlideSet>{mdContent}</MarkdownSlideSet>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);
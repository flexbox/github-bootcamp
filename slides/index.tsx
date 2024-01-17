import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, MarkdownSlideSet, SpectacleTheme } from 'spectacle';
import mdContent from './slides.md';

const theme = {
  colors: {
    primary: '#475569',
    secondary: '#1e293b',
    tertiary: '#e2e8f0',
    quaternary: '#000',
    quinary: '#000'
  },
};

const Presentation = () => (
  <Deck template={() => <DefaultTemplate />} theme={theme}>
    <MarkdownSlideSet>{mdContent}</MarkdownSlideSet>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);
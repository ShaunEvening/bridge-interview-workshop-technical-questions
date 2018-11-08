import React from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import { colours, fontFamilies } from './theme';
import IntroductionSlides from './slides/intro';
import FrameworkSlides from './slides/framework';

require('normalize.css');

const theme = createTheme(colours, fontFamilies);

const Presentation = () => (
  <Deck
    transition={['zoom', 'slide']}
    transitionDuration={500}
    theme={theme}
    progress="bar"
    contentWidth={1200}
  >
    <Slide transition={['slide']} bgColor="primary">
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        Situational Questions
      </Heading>
      <Text margin="10px 0 0" textAlign="left" textColor="secondary">
        Igor Barsi
      </Text>
    </Slide>
    {IntroductionSlides}
    {FrameworkSlides}
  </Deck>
);

export default Presentation;

import React from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import { colours, fontFamilies } from './theme';

require('normalize.css');

const theme = createTheme(colours, fontFamilies);

const Presentation = () => (
  <Deck
    transition={['zoom', 'slide']}
    transitionDuration={500}
    theme={theme}
    progress="bar"
  >
    <Slide transition={['zoom']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        {' '}
        Spectacle Boilerplate
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        open the presentation/index.js file to get started
      </Text>
    </Slide>
  </Deck>
);

export default Presentation;

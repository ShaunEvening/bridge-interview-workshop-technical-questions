import React from 'react';
import { Deck, Heading, Slide, Text, List, ListItem, Appear } from 'spectacle';
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
    <Slide transition={['slide']} bgColor="primary">
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        Situational Questions
      </Heading>
      <Text margin="10px 0 0" textAlign="left" textColor="secondary">
        Igor Barsi
      </Text>
    </Slide>
    <Slide transition={['slide']} bgColor="primary">
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        Introduction
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        What is a situational question?
      </Heading>
      <List>
        <Appear>
          <ListItem>
            <Text>Specific, regarding events that may happen on the job</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Non-technical</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Assess the candidate's behaviour</Text>
          </ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Why are situational questions challenging?
      </Heading>
      <List>
        <Appear>
          <ListItem>
            <Text>Detailed recall of past experiences</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Craft compelling stories on the spot</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Don’t know what to expect</Text>
          </ListItem>
        </Appear>
      </List>
    </Slide>
  </Deck>
);

export default Presentation;

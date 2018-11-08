import React from 'react';
import {
  Deck,
  Heading,
  Slide,
  Text,
  List,
  ListItem,
  Appear,
  Layout,
  Fill,
} from 'spectacle';
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
    <Slide transition={['slide']} bgColor="primary">
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        Framework
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Examples of situational questions
      </Heading>
      <Layout>
        <Fill>
          <List>
            <ListItem>
              <Text textSize={25}>
                Give an example of a goal you reached and how you achieved it.
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize={25}>
                Give an example of how you’ve gone above and beyond the call of
                duty.
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize={25}>
                Tell me about how you worked effectively under pressure.
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize={25}>
                Describe a time when you made a suggestion to improve something
                on the project that you were working on.
              </Text>
            </ListItem>
          </List>
        </Fill>
        <Fill>
          <List>
            <ListItem>
              <Text textSize={25}>
                Describe a decision you made that was unpopular and how you
                handled implementing it.
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize={25}>
                Describe a time you were faced with a stressful situation. How
                did you handle it?
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize={25}>
                Give an example of a time when you showed initiative to resolve
                an issue or to de-risk a potential situation.
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize={25}>
                Have you handled a difficult situation with a co-worker? How?
              </Text>
            </ListItem>
          </List>
        </Fill>
      </Layout>
    </Slide>
  </Deck>
);

export default Presentation;

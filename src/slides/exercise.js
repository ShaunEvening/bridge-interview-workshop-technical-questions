import React from 'react';
import { SlideSet, Slide, Heading, List } from 'spectacle';
import { ListItemText } from '../utils';

export default (
  <SlideSet>
    <Slide transition={['slide']} bgColor="primary" progressColor="secondary" controlColor="secondary">
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        Exercise
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Time to practice!
      </Heading>
      <List ordered>
        <ListItemText>Pick a technical question from the handout provided</ListItemText>
        <ListItemText>Get into groups of 4 - 6</ListItemText>
        <ListItemText>Take turns working through your problem</ListItemText>
      </List>
    </Slide>
  </SlideSet>
);

import React from 'react';
import { SlideSet, Slide, Heading, List } from 'spectacle';
import { ListItemText } from '../utils';

export default (
  <SlideSet>
    <Slide
      transition={['slide']}
      bgColor="primary"
      progressColor="secondary"
      controlColor="secondary"
    >
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        Exercise
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Time to practice!
      </Heading>
      <List ordered>
        <ListItemText>
          Take a moment to reflect on a successful past project
        </ListItemText>
        <ListItemText>Get into groups of 6</ListItemText>
        <ListItemText>
          Take turns describing your past project and the role you played in
          making it a success
        </ListItemText>
      </List>
    </Slide>
  </SlideSet>
);

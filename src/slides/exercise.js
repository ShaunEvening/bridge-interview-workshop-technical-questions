import React from 'react';
import { SlideSet, Slide, Heading, List, ListItem, Text } from 'spectacle';

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
        <ListItem>
          <Text>Take a moment to reflect on a successful past project</Text>
        </ListItem>
        <ListItem>
          <Text>Get into groups of 6</Text>
        </ListItem>
        <ListItem>
          <Text>
            Take turns describing your past project and the role you played in
            making it a success
          </Text>
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
);

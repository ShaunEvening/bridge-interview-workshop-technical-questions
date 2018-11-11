import React from 'react';
import {
  SlideSet,
  Slide,
  Heading,
  List,
  Appear,
  ListItem,
  Text,
} from 'spectacle';

export default (
  <SlideSet>
    <Slide
      transition={['slide']}
      bgColor="primary"
      progressColor="secondary"
      controlColor="secondary"
    >
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        Introduction
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        What are behavioural questions?
      </Heading>
      <List>
        <Appear>
          <ListItem>
            <Text>Focus on how you handled work situations in the past</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Non-technical</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>
              Based on the premise that past behaviour is a strong predictor of
              future success
            </Text>
          </ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Why are behavioural questions challenging?
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
  </SlideSet>
);

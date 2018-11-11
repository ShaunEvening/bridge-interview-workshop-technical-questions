import React from 'react';
import { SlideSet, Slide, Heading, List, Appear, ListItem } from 'spectacle';

const AppearingListItem = ({ children, ...props }) => (
  <Appear>
    <ListItem textColor="tertiary" padding="20px 0" {...props}>
      {children}
    </ListItem>
  </Appear>
);

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
      <List style={{ 'list-style': 'none' }}>
        <AppearingListItem>
          Focus on how you handled work situations in the past
        </AppearingListItem>
        <AppearingListItem>Non-technical</AppearingListItem>
        <AppearingListItem>
          Based on the premise that past behaviour is a strong predictor of
          future success
        </AppearingListItem>
      </List>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Why are behavioural questions challenging?
      </Heading>
      <List style={{ 'list-style': 'none' }}>
        <AppearingListItem>
          Require detailed recall of past experiences
        </AppearingListItem>
        <AppearingListItem>
          Call for you to share telling stories on the spot
        </AppearingListItem>
        <AppearingListItem>You don’t know what to expect</AppearingListItem>
      </List>
    </Slide>
  </SlideSet>
);

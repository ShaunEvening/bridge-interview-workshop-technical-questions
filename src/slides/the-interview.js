import React from 'react';
import { SlideSet, Slide, Heading, CodePane, Text } from 'spectacle';
import { PlainList, AppearingListItem } from '../utils';

export default (
  <SlideSet>
    <Slide transition={['slide']} bgColor="primary" progressColor="secondary" controlColor="secondary">
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        The Interview
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Make sure to...
      </Heading>
      <PlainList>
        <AppearingListItem>Think out loud</AppearingListItem>
        <AppearingListItem>Ask clarifying questions</AppearingListItem>
        <AppearingListItem>Break down the problem</AppearingListItem>
        <AppearingListItem>Keep trying</AppearingListItem>
      </PlainList>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Managing Anxiety
      </Heading>
      <PlainList>
        <AppearingListItem>Remember that anxiety is normal for everyone</AppearingListItem>
        <AppearingListItem>Ask for a drink before starting</AppearingListItem>
        <AppearingListItem bold>Breathe</AppearingListItem>
      </PlainList>
    </Slide>
  </SlideSet>
);

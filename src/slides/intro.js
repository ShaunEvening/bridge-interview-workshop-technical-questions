import React from 'react';
import { SlideSet, Slide, Heading } from 'spectacle';
import { PlainList, AppearingListItem } from '../utils';

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
      <PlainList>
        <AppearingListItem>
          Focus on how you handled project-based situations in the past
        </AppearingListItem>
        <AppearingListItem>Non-technical</AppearingListItem>
        <AppearingListItem>
          Based on the premise that past behaviour is a strong predictor of
          future success
        </AppearingListItem>
      </PlainList>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Why are behavioural questions challenging?
      </Heading>
      <PlainList>
        <AppearingListItem>
          Require detailed recall of past experiences
        </AppearingListItem>
        <AppearingListItem>
          Call on you to share telling stories on the spot
        </AppearingListItem>
        <AppearingListItem bold>
          You don’t know what to expect
        </AppearingListItem>
      </PlainList>
    </Slide>
  </SlideSet>
);

import React from 'react';
import { SlideSet, Slide, Heading } from 'spectacle';
import { PlainList, AppearingListItem } from '../utils';

export default (
  <SlideSet>
    <Slide transition={['slide']} bgColor="primary" progressColor="secondary" controlColor="secondary">
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        Introduction
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        What is a technical interview?
      </Heading>
      <PlainList>
        <AppearingListItem>Focused on assessing your technical and problem solving skills</AppearingListItem>
        <AppearingListItem>Given series of progressively harder problems to solve</AppearingListItem>
        <AppearingListItem>Can include live coding, whiteboarding, discussion, or a mixture of all</AppearingListItem>
      </PlainList>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Why are technical interviews challenging?
      </Heading>
      <PlainList>
        <AppearingListItem>No definitive set of questions to prepare for</AppearingListItem>
        <AppearingListItem>Coding with someone looking over your shoulder is stressful</AppearingListItem>
        <AppearingListItem>Handwriting code is awful</AppearingListItem>
        <AppearingListItem>Designed to take you out of your comfort zone</AppearingListItem>
        <AppearingListItem bold>You don’t know what to expect</AppearingListItem>
      </PlainList>
    </Slide>
  </SlideSet>
);

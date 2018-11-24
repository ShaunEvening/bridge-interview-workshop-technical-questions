import React from 'react';
import { SlideSet, Slide, Heading } from 'spectacle';
import { PlainList, AppearingListItem } from '../utils';

export default (
  <SlideSet>
    <Slide transition={['slide']} bgColor="primary" progressColor="secondary" controlColor="secondary">
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        Before the Interview
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        How can I prepare?
      </Heading>
      <PlainList>
        <AppearingListItem>Look at job posting for key topics / tools</AppearingListItem>
        <AppearingListItem>Look at company's github and technical blog posts</AppearingListItem>
        <AppearingListItem>Ask the company you're interviewing with</AppearingListItem>
        <AppearingListItem>Practice with online resources like freecodecamp</AppearingListItem>
        <AppearingListItem>Practice with paper</AppearingListItem>
      </PlainList>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Collect questions for your interviewers
      </Heading>
      <PlainList>
        <AppearingListItem>What is their culture like?</AppearingListItem>
        <AppearingListItem>What are the hours like?</AppearingListItem>
        <AppearingListItem>When was the last time they took a vacation?</AppearingListItem>
        <AppearingListItem>What are they most excited about at the company?</AppearingListItem>
        <AppearingListItem>What are they least excited about at the company?</AppearingListItem>
      </PlainList>
    </Slide>
  </SlideSet>
);

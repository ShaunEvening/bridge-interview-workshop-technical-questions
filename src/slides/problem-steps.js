import React from 'react';
import { SlideSet, Slide, Heading, CodePane, Text } from 'spectacle';
import { PlainList, AppearingListItem } from '../utils';

export default (
  <SlideSet>
    <Slide transition={['slide']} bgColor="primary" progressColor="secondary" controlColor="secondary">
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        Breaking Down The Problem
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Review your inputs and outputs
      </Heading>
      <PlainList>
        <AppearingListItem>Start with your function signature</AppearingListItem>
        <AppearingListItem>What parameters does the function need to take?</AppearingListItem>
        <AppearingListItem>What should the function return?</AppearingListItem>
      </PlainList>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Describe the algorithm step by step in human readable language
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Translate those steps to code
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Example
      </Heading>
      <Text textAlign="left">
        Write a function that removes all non numbers from an array, multiplies all of the numbers by three if it's and
        even number but two if it's an odd number, then gives me the sum of all those number.
      </Text>
    </Slide>
  </SlideSet>
);

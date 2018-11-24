import React from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import { colours, fontFamilies } from './theme';
import IntroductionSlides from './slides/intro';
import PreparationSlides from './slides/prepare';
import ProblemStepsSlides from './slides/problem-steps';
import InterviewSlides from './slides/the-interview';
import ExerciseSlides from './slides/exercise';

require('normalize.css');

const theme = createTheme(colours, fontFamilies);

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme} progress="bar" contentWidth={1200}>
    <Slide transition={['slide']} bgColor="primary" progressColor="secondary" controlColor="secondary">
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        Conquering The Technical Interview
      </Heading>
      <Text margin="10px 0 0" textAlign="left" textColor="secondary">
        Shaun Lloyd & Sean May
      </Text>
    </Slide>
    {IntroductionSlides}
    {PreparationSlides}
    {ProblemStepsSlides}
    {InterviewSlides}
    {ExerciseSlides}
  </Deck>
);

export default Presentation;

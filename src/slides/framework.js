import React from 'react';
import { Slide, Heading, Layout, Fill, Text, SlideSet } from 'spectacle';

import { colours, typeScale } from '../theme';
import { ListItemText, PlainList, AppearingListItem } from '../utils';

export default (
  <SlideSet>
    <Slide
      transition={['slide']}
      bgColor="primary"
      progressColor="secondary"
      controlColor="secondary"
    >
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        Framework
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Examples of behavioural questions
      </Heading>
      <Layout>
        <Fill>
          <PlainList>
            <ListItemText size={3}>
              Give an example of a goal you reached and how you achieved it.
            </ListItemText>
            <ListItemText size={3}>
              Give an example of how you’ve gone above and beyond the call of
              duty.
            </ListItemText>
            <ListItemText size={3}>
              Tell me about how you worked effectively under pressure.
            </ListItemText>
            <ListItemText size={3}>
              Describe a time when you made a suggestion to improve something on
              the project that you were working on.
            </ListItemText>
          </PlainList>
        </Fill>
        <Fill>
          <PlainList>
            <ListItemText size={3}>
              Describe a time you were faced with a stressful situation. How did
              you handle it?
            </ListItemText>
            <ListItemText size={3}>
              Give an example of a time when you showed initiative to resolve an
              issue or to de-risk a potential situation.
            </ListItemText>
            <ListItemText size={3}>
              Have you handled a difficult situation with a co-worker? How?
            </ListItemText>
            <ListItemText size={3}>
              Describe a decision you made that was unpopular and how you
              implemented it.
            </ListItemText>
          </PlainList>
        </Fill>
      </Layout>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Layout>
        <Fill>
          <Text textSize={typeScale[2]} textColor="green">
            Successful Projects
          </Text>
          <PlainList
            style={{
              border: `2px solid ${colours.green}`,
              margin: '20px 40px 0 0',
              padding: '0 20px',
            }}
          >
            <ListItemText size={3}>
              Give an example of a goal you reached and how you achieved it.
            </ListItemText>
            <ListItemText size={3}>
              Give an example of how you’ve gone above and beyond the call of
              duty.
            </ListItemText>
            <ListItemText size={3}>
              Tell me about how you worked effectively under pressure.
            </ListItemText>
            <ListItemText size={3}>
              Describe a time when you made a suggestion to improve something on
              the project that you were working on.
            </ListItemText>
          </PlainList>
        </Fill>
        <Fill>
          <Text textSize={typeScale[2]} textColor="primary">
            Unsuccessful Projects
          </Text>
          <PlainList
            style={{
              border: `2px solid ${colours.primary}`,
              'margin-top': '20px',
              padding: '0 20px',
            }}
          >
            <ListItemText size={3}>
              Describe a time you were faced with a stressful situation. How did
              you handle it?
            </ListItemText>
            <ListItemText size={3}>
              Give an example of a time when you showed initiative to resolve an
              issue or to de-risk a potential situation.
            </ListItemText>
            <ListItemText size={3}>
              Have you handled a difficult situation with a co-worker? How?
            </ListItemText>
            <ListItemText size={3}>
              Describe a decision you made that was unpopular and how you
              implemented it.
            </ListItemText>
          </PlainList>
        </Fill>
      </Layout>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        How to prepare for behavioural questions?
      </Heading>
      <PlainList>
        <AppearingListItem>
          Prepare a successful and an unsuccessful project
        </AppearingListItem>
        <AppearingListItem>Be authentic</AppearingListItem>
        <AppearingListItem>Be specific</AppearingListItem>
        <AppearingListItem>
          Take your time and don't forget to breathe
        </AppearingListItem>
        <AppearingListItem>Avoid self-depracating language</AppearingListItem>
        <AppearingListItem bold>Practice!</AppearingListItem>
      </PlainList>
    </Slide>
  </SlideSet>
);

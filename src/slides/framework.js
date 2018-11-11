import React from 'react';
import {
  Slide,
  Heading,
  Layout,
  Fill,
  List,
  ListItem,
  Text,
  SlideSet,
  Appear,
} from 'spectacle';

import { colours, typeScale } from '../theme';

const ListItemText = ({ children, ...props }) => (
  <ListItem style={{ display: 'block' }} padding="20px 0">
    <Text textSize={25} {...props}>
      {children}
    </Text>
  </ListItem>
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
        Framework
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Examples of behavioural questions
      </Heading>
      <Layout>
        <Fill>
          <List>
            <ListItemText>
              Give an example of a goal you reached and how you achieved it.
            </ListItemText>
            <ListItemText>
              Give an example of how you’ve gone above and beyond the call of
              duty.
            </ListItemText>
            <ListItemText>
              Tell me about how you worked effectively under pressure.
            </ListItemText>
            <ListItemText>
              Describe a time when you made a suggestion to improve something on
              the project that you were working on.
            </ListItemText>
          </List>
        </Fill>
        <Fill>
          <List>
            <ListItemText>
              Describe a decision you made that was unpopular and how you
              handled implementing it.
            </ListItemText>
            <ListItemText>
              Describe a time you were faced with a stressful situation. How did
              you handle it?
            </ListItemText>
            <ListItemText>
              Give an example of a time when you showed initiative to resolve an
              issue or to de-risk a potential situation.
            </ListItemText>
            <ListItemText>
              Have you handled a difficult situation with a co-worker? How?
            </ListItemText>
          </List>
        </Fill>
      </Layout>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Layout>
        <Fill>
          <Text textSize={typeScale[2]} textColor="green">
            Successful Projects
          </Text>
          <List
            style={{
              border: `2px solid ${colours.green}`,
              margin: '20px 40px 0 0',
              padding: '0 20px',
            }}
          >
            <ListItemText>
              Give an example of a goal you reached and how you achieved it.
            </ListItemText>
            <ListItemText>
              Give an example of how you’ve gone above and beyond the call of
              duty.
            </ListItemText>
            <ListItemText>
              Tell me about how you worked effectively under pressure.
            </ListItemText>
            <ListItemText>
              Describe a time when you made a suggestion to improve something on
              the project that you were working on.
            </ListItemText>
          </List>
        </Fill>
        <Fill>
          <Text textSize={typeScale[2]} textColor="primary">
            Unsuccessful Projects
          </Text>
          <List
            style={{
              border: `2px solid ${colours.primary}`,
              'margin-top': '20px',
              padding: '0 20px',
            }}
          >
            <ListItemText>
              Describe a decision you made that was unpopular and how you
              handled implementing it.
            </ListItemText>
            <ListItemText>
              Describe a time you were faced with a stressful situation. How did
              you handle it?
            </ListItemText>
            <ListItemText>
              Give an example of a time when you showed initiative to resolve an
              issue or to de-risk a potential situation.
            </ListItemText>
            <ListItemText>
              Have you handled a difficult situation with a co-worker? How?
            </ListItemText>
          </List>
        </Fill>
      </Layout>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        How to prepare for behavioural questions?
      </Heading>
      <List>
        <Appear>
          <ListItem style={{ display: 'block' }} padding="20px 0">
            <Text textSize={typeScale[2]}>
              Prepare a successful and an unsuccessful project
            </Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem style={{ display: 'block' }} padding="20px 0">
            <Text textSize={typeScale[2]}>Be authentic</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem style={{ display: 'block' }} padding="20px 0">
            <Text textSize={typeScale[2]}>Be specific</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem style={{ display: 'block' }} padding="20px 0">
            <Text textSize={typeScale[2]}>
              Take your time and don't forget to breathe
            </Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem style={{ display: 'block' }} padding="20px 0">
            <Text textSize={typeScale[2]}>Avoid self-depracating language</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem style={{ display: 'block' }} padding="20px 0">
            <Text textSize={typeScale[2]} bold>
              Practice!
            </Text>
          </ListItem>
        </Appear>
      </List>
    </Slide>
  </SlideSet>
);

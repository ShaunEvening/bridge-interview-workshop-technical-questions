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
} from 'spectacle';

export default (
  <SlideSet>
    <Slide transition={['slide']} bgColor="primary">
      <Heading size={4} textAlign="left" textColor="secondary" caps>
        Framework
      </Heading>
    </Slide>
    <Slide transition={['slide']} bgColor="secondary">
      <Heading size={5} textAlign="left" textColor="primary">
        Examples of situational questions
      </Heading>
      <Layout>
        <Fill>
          <List>
            <ListItem>
              <Text textSize={25}>
                Give an example of a goal you reached and how you achieved it.
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize={25}>
                Give an example of how you’ve gone above and beyond the call of
                duty.
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize={25}>
                Tell me about how you worked effectively under pressure.
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize={25}>
                Describe a time when you made a suggestion to improve something
                on the project that you were working on.
              </Text>
            </ListItem>
          </List>
        </Fill>
        <Fill>
          <List>
            <ListItem>
              <Text textSize={25}>
                Describe a decision you made that was unpopular and how you
                handled implementing it.
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize={25}>
                Describe a time you were faced with a stressful situation. How
                did you handle it?
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize={25}>
                Give an example of a time when you showed initiative to resolve
                an issue or to de-risk a potential situation.
              </Text>
            </ListItem>
            <ListItem>
              <Text textSize={25}>
                Have you handled a difficult situation with a co-worker? How?
              </Text>
            </ListItem>
          </List>
        </Fill>
      </Layout>
    </Slide>
  </SlideSet>
);

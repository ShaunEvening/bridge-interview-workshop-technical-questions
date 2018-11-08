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

const ListItemText = ({ children, ...props }) => (
  <ListItem style={{ display: 'block' }} padding="20px 40px 20px 0">
    <Text textSize={25} {...props}>
      {children}
    </Text>
  </ListItem>
);

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
  </SlideSet>
);

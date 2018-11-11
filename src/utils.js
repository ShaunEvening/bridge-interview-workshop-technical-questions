import React from 'react';
import { List, Appear, ListItem } from 'spectacle';

export const appear = InnerComponent => {
  const WrappedComponent = ({ children, ...props }) => (
    <Appear>
      <div>
        <InnerComponent {...props}>{children}</InnerComponent>
      </div>
    </Appear>
  );

  return WrappedComponent;
};

export const PlainList = ({ children, ...props }) => (
  <List style={{ 'list-style': 'none' }} {...props}>
    {children}
  </List>
);

export const ListItemText = ({ children, ...props }) => (
  <ListItem textColor="tertiary" padding="20px 0" {...props}>
    {children}
  </ListItem>
);

export const AppearingListItem = appear(ListItemText);

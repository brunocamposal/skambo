import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import * as Styled from './styles';

export const Loading = () => (
  <Segment>
    <Dimmer active inverted>
      <Loader size="massive">Loading</Loader>
    </Dimmer>
    <Styled.ImageLoading src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
  </Segment>
);

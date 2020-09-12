import { render } from '@testing-library/react';
import React from 'react';
import { StateContextProvider } from '../../StateContextProvider';
import { Feed } from './Feed';

const mockUser = {
  image: 'fake image url',
  message: 'fake message',
  profilePic: 'fake profile pic',
  timestamp: 'fake time stamp',
  username: 'fake username',
};

test('Feed renders correctly', () => {
  const { asFragment } = render(
    <StateContextProvider initialState={{ user: mockUser }}>
      <Feed />
    </StateContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});

import { render } from '@testing-library/react';
import React from 'react';
import { StateContextProvider } from '../../StateContextProvider';
import { Post } from './Post';

const mockUser = {
  image: 'fake image url',
  message: 'fake message',
  profilePic: 'fake profile pic',
  timestamp: 'fake time stamp',
  username: 'fake username',
};

test('Post renders correctly', () => {
  const { asFragment } = render(
    <StateContextProvider initialState={{ user: mockUser }}>
      <Post image={mockUser.image} />
    </StateContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});

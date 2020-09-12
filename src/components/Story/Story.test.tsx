import { render } from '@testing-library/react';
import React from 'react';
import { StateContextProvider } from '../../StateContextProvider';
import { Story } from './Story';

const mockUser = {
  image: 'fake image url',
  message: 'fake message',
  profilePic: 'fake profile pic',
  timestamp: 'fake time stamp',
  username: 'fake username',
};

const mockStoryData = {
  image: 'mock image',
  profilePic: 'fake profile pic',
  title: 'mock title',
};

test('Story renders correctly', () => {
  const { asFragment } = render(
    <StateContextProvider initialState={{ user: mockUser }}>
      <Story {...mockStoryData} />
    </StateContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});

import { render } from '@testing-library/react';
import React from 'react';
import { App } from './App';
import { StateContextProvider } from './StateContextProvider';

const mockUser = {
  image: 'fake image url',
  message: 'fake message',
  profilePic: 'fake profile pic',
  timestamp: 'fake time stamp',
  username: 'fake username',
};

test('App renders correctly', () => {
  const { asFragment } = render(
    <StateContextProvider initialState={{ user: mockUser }}>
      <App />
    </StateContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});

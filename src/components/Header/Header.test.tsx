import { render } from '@testing-library/react';
import React from 'react';
import { StateContextProvider } from '../../StateContextProvider';
import { Header } from './Header';

const mockUser = {
  image: 'fake image url',
  message: 'fake message',
  profilePic: 'fake profile pic',
  timestamp: 'fake time stamp',
  username: 'fake username',
};

test('Header renders correctly', () => {
  const { asFragment } = render(
    <StateContextProvider initialState={{ user: mockUser }}>
      <Header />
    </StateContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});

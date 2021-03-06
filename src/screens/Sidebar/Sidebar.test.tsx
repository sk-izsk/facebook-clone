import { render } from '@testing-library/react';
import React from 'react';
import { StateContextProvider } from '../../StateContextProvider';
import { Sidebar } from './Sidebar';

const mockUser = {
  image: 'fake image url',
  message: 'fake message',
  profilePic: 'fake profile pic',
  timestamp: 'fake time stamp',
  username: 'fake username',
};

test('Sidebar renders correctly', () => {
  const { asFragment } = render(
    <StateContextProvider initialState={{ user: mockUser }}>
      <Sidebar />
    </StateContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import GroupChat from '../groupChatComponent/GroupChat';


test('render h1 element', () => {
  render(<GroupChat />);
  expect(screen.getByText('Software Measurement Quality Assurance')).toBeInTheDocument();
});
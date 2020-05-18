import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

test('User can login and name is shown', () => {
    const { getByRole, getByPlaceholderText, getByText} = render(<Login />);

    const inputName = getByPlaceholderText('Your name');
    fireEvent.change(inputName, {
        target: {
            value: 'Miguel'
        }
    });

    const playButton = getByRole('button', { name: 'Play!' });
    fireEvent.click(playButton);

    expect(getByText('Welcome Miguel!')).toBeTruthy();
});

test('User cannot login with empty name', () => {
    const { getByRole, getByText } = render(<Login />);

    const playButton = getByRole('button', { name: 'Play!' });
    fireEvent.click(playButton);

    expect(getByText('You need to enter a name!')).toBeTruthy();
});
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Home';

test('User can login and name is shown', () => {
    const { getByRole, getByPlaceholderText, getByText} = render(<Login />);

    const nameInput = getByPlaceholderText('Your name');
    fireEvent.change(nameInput, {
        target: {
            value: 'Miguel'
        }
    });

    const playButton = getByRole('button', { name: 'Play!' });
    fireEvent.click(playButton);

    expect(getByText('Welcome Miguel!')).toBeTruthy();
});

test('User cannot login with empty name', () => {
    const { getByRole } = render(<Login />);

    const playButton = getByRole('button', { name: 'Play!' });
    fireEvent.click(playButton);

    expect(getByRole('alert')).toBeTruthy();
});
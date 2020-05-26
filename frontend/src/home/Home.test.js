import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Home';
import { BrowserRouter as Router } from 'react-router-dom';

test('User can login and name is shown', () => {
    const { getByRole, getByPlaceholderText } = render(
        <Router>
            <Login />
        </Router>
    );

    const nameInput = getByPlaceholderText('Your name');
    fireEvent.change(nameInput, {
        target: {
            value: 'Miguel'
        }
    });

    const playButton = getByRole('button', { name: 'Play' });
    fireEvent.click(playButton);

    expect(location.pathname).toBe('/game');
});

test('User cannot login with empty name', () => {
    const { getByRole } = render(<Login />);

    const playButton = getByRole('button', { name: 'Play' });
    fireEvent.click(playButton);

    expect(getByRole('alert')).toBeTruthy();
});
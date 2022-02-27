import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Welcome from './Welcome.js';

const email = 'hello@flipgrid.com';

afterEach(cleanup);

it('renders', () => {
    const { asFragment } = render(<Welcome email={email}/>);

    expect(asFragment()).toMatchSnapshot();
});

it('puts email in email div', () => {
    const { getByTestId } = render(<Welcome email={email}/>);

    expect(getByTestId('email')).toHaveTextContent(email);
});
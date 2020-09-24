import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer'
import App from './App';
import Songs from './components/songs';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders correctly', () => {
    const tree = renderer
        .create(<App />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


it('renders correctly', () => {
    const tree = renderer
        .create(<Songs />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
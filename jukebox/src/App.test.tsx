import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer'
import App from './App';
import Songs from './components/songs';
import Home from './components/home';
import Info from './components/info';
import Dancers from './components/dancers';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Player from './components/player';
import Lyrics from './components/lyrics';

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
it('renders correctly', () => {
    const tree = renderer
        .create(<Home />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders correctly', () => {
    const tree = renderer
        .create(<Info />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders correctly', () => {
    const tree = renderer
        .create(<Dancers />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders correctly', () => {
    const tree = renderer
        .create(<NavBar />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders correctly', () => {
    const tree = renderer
        .create(<Footer />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders correctly', () => {
    const tree = renderer
        .create(<Player />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders correctly', () => {
    const tree = renderer
        .create(<Lyrics />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
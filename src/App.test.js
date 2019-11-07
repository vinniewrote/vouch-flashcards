import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shuffle } from './components/Shuffle';
import flashCardPack from './data/flashCardPack';
const testDeck = [1, 2, 3, 4, 5];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('count ', () => {
  expect(flashCardPack.length).toEqual(10);
})

test('shuffle', () => {
  const shuffledTestDeck = shuffle(testDeck);
  console.log(shuffledTestDeck);
})



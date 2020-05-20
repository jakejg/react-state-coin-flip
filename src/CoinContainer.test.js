import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CoinCointainer from './CoinContainer';

test('renders without crashing', () => {
  render(<CoinCointainer />);
});

test('matches snapshot', () => {
  const {asFragment} = render(<CoinCointainer />);
  expect(asFragment()).toMatchSnapshot();
});


test('should update heads or tails count correctly', () => {
  jest.spyOn(Math, "random")
  .mockReturnValueOnce(0.2)
  .mockReturnValueOnce(0.75);

  const { queryByText } = render(<CoinCointainer />);
  fireEvent.click(queryByText("Flip"));
  expect(queryByText("Out of", {exact: false})).toHaveTextContent("Out of 1 flips there have been 1 heads and 0 tails");
  fireEvent.click(queryByText("Flip"));
  expect(queryByText("Out of", {exact: false})).toHaveTextContent("Out of 2 flips there have been 1 heads and 1 tails")

})
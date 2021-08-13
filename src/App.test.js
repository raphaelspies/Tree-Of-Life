import { fireEvent, waitFor, render, screen } from '@testing-library/react';

import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

beforeEach(() => {
  render(<App />);
})

describe('<App />', () => {
  test('renders app', () => {
    // render(<App  />);
    const header = screen.getByText(/Tree Of Life/i);
    expect(header).toBeInTheDocument();
  })
})

describe('<Tree />', () => {
  test('renders tree', () => {
    const addNodeButton = screen.getByText(/Add Leaf Node/i);
    expect(addNodeButton).toBeInTheDocument();
  })

  test('renders new node value field', () => {
    const valueField = (screen.getByPlaceholderText('New node value'))
  })

  test('Add Leaf Node button doesnt automatically submit', () => {
    const addNodeButton = screen.getByText(/Add Leaf Node/i);
    const click = jest.fn();

  })
  test('clicking Add Leaf Node Button works', () => {
    const addNodeButton = screen.getByText(/Add Leaf Node/i);
    fireEvent.click(addNodeButton)
  })

  describe('<Node />', () => {
    test('<Node /> exists with value 5', () => {
      // render(<Node initVal={5}/>)
      const nodeVal5 = screen.getByText(/Value: 5/i);
      expect(nodeVal5).toBeInTheDocument();
    })
  })

})


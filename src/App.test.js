import { render, screen } from '@testing-library/react';
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
    // render(<App />);
    const header = screen.getByText(/Tree Of Life/i);
    expect(header).toBeInTheDocument();
  })
})

describe('<Tree />', () => {
  test('renders tree', () => {
    const addNodeButton = screen.getByText(/Add Leaf Node/i);
    expect(addNodeButton).toBeInTheDocument();
  })

  test('clicking Add Leaf Node Button logs to console', () => {
    const addNodeButton = screen.getByText(/Add Leaf Node/i);
    fireEvent.click(addNodeButton)

  })
})


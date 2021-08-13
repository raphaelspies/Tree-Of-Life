import { fireEvent, waitFor, render, screen } from '@testing-library/react';

import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer)

describe('<App />', () => {

  test('renders app', () => {
    render(<App  />);
    const header = screen.getByText(/Tree Of Life/i);
    expect(header).toBeInTheDocument();
  })

  test('renders app and Provider store', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const header = screen.getByText(/Tree Of Life/i);
    expect(header).toBeInTheDocument();
  })
})

describe('<Tree />', () => {

  beforeEach(() => {
    render(  <Provider store={store}>
      <App />
  </Provider>)
  })

  test('renders tree', () => {
    const addNodeButton = screen.getByText(/Add Leaf Node/i);
    expect(addNodeButton).toBeInTheDocument();
  })

  test('renders new node value field', () => {
    const valueField = (screen.getByPlaceholderText('New node value'))
    expect(valueField).toBeInTheDocument();
  })

  test('Add Leaf Node button doesnt automatically submit', () => {
    const addNodeButton = screen.getByText(/Add Leaf Node/i);
    const click = jest.fn();

  })

  test('Typing into the newNodeValueField changes its value', () => {
    const newNodeValueField = document.getElementById('newNodeValueField');
    fireEvent.change(newNodeValueField, {target: {value: '1'}})
    expect(newNodeValueField).toHaveDisplayValue('1');
  })

  test('New leaf node is created on button click', () => {
    const newNodeValueField = document.getElementById('newNodeValueField');
    fireEvent.change(newNodeValueField, {target: {value: '7'}})

    const addNodeButton = screen.getByText(/Add Leaf Node/i);
    fireEvent.click(addNodeButton)

    const newNode = screen.getByDisplayValue('7')
    expect(newNode).toHaveDisplayValue('7');
  })
})

describe('<Node />', () => {

  beforeEach(() => {
    render(  <Provider store={store}>
      <App />
  </Provider>)
  })

  test('<Node /> exists with value 5', () => {
    // render(<Node initVal={5}/>)
    const nodeVal5 = screen.getByText(/Value: 5/i);
    expect(nodeVal5).toBeInTheDocument();
  })
})




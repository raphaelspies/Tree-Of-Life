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
  })

  test('Add Leaf Node button doesnt automatically submit', () => {
    const addNodeButton = screen.getByText(/Add Leaf Node/i);
    const click = jest.fn();

  })
  test('clicking Add Leaf Node Button works', () => {
    const addNodeButton = screen.getByText(/Add Leaf Node/i);
    fireEvent.click(addNodeButton)
  })

  test('Typing into the newNodeValueField changes its value', () => {
    // fireEvent.keyDown((screen.getByPlaceholderText('New node value')), {key: '1', code: 'Digit1'})
    const newNodeValueField = document.getElementById('newNodeValueField');
    fireEvent.change(newNodeValueField, {target: {value: '1'}})
    expect(newNodeValueField).toHaveDisplayValue('1');
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




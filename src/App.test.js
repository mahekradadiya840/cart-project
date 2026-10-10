import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from './app/store';
import Header from './components/Header';

test('renders header with cart link', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText(/cart/i)).toBeInTheDocument();
});

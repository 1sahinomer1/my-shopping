import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from './index';
import { Provider } from 'react-redux';
import { store } from 'index';
import { Header } from 'components';

describe('home test', () => {
  const dummyfnc = jest.fn();
  const setup = () =>
    render(
      <Provider store={store}>
        <Header theme="light" setTheme={dummyfnc} />
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
  it('succesfully renders data', async () => {
    setup();
    const searchInput = await screen.findByTestId('homeSearchInput');
    userEvent.type(searchInput, 'Handcrafted Trees Mug');
    const product = await screen.findAllByTestId('product');
    expect(product[0]).toHaveTextContent('Handcrafted Trees Mug');
  });
});

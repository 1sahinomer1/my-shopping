import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from './index';
import { Provider } from 'react-redux';
import { Header } from 'components';

describe('home test', () => {
  const dummyfnc = jest.fn();

  const setup = () => {
    render(
      <MemoryRouter>
        <Header theme="light" setTheme={dummyfnc} />
        <Home />
      </MemoryRouter>
    );
  };

  it('succesfully renders data', async () => {
    await waitFor(() => {
      setup();
    });
    const searchInput = screen.getByTestId('searchInput');
    userEvent.type(searchInput, 'Handcrafted Trees Mug');
    // const product = screen.getAllByTestId('product');
    // expect(product[0]).toHaveTextContent('Handcrafted Trees Mug');
  });
});

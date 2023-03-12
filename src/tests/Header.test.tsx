import { render, screen } from '@testing-library/react';
import { Header } from '../components/modules/Header/Header';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  it('renders My Flowers text', () => {
    render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });
    const element = screen.getByText(/My Flowers/i);
    expect(element).toBeInTheDocument();
  });

  it('renders button', () => {
    render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('should render heading', () => {
    render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBe(2);
  });

  it('should render cart icon', () => {
    render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });
    const icon = screen.getByTestId('cart-icon');
    expect(icon).toBeInTheDocument();
  });

  it('should render link', () => {
    render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });
    const links: HTMLAnchorElement[] = screen.getAllByRole('link');
    expect(links.length).toBe(2);
    expect(links[0].href).toContain('/');
    expect(links[1].href).toContain('/cart');
  });

  it('should to equal to snapshot', () => {
    const view = render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });

    expect(view).toMatchSnapshot();
  });

  it('should render My Flowers link when clicked in Header', () => {
    render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });
    const link = screen.getByText(/My Flowers/i);
    userEvent.click(link);
    screen.getByText(/My Flowers/i);
  });

  it('should render Cart total when clicked Cart button in Header', () => {
    render(<Header totalQuantity={0} totalCostCart={0} />, { wrapper: MemoryRouter });
    const button = screen.getByTestId('cart-button');
    userEvent.click(button);
    screen.getByText(/Cart total:/i);
  });

  it('should render total quantity of Badge in Cart of Header', () => {
    render(<Header totalQuantity={5} totalCostCart={0} />, { wrapper: MemoryRouter });
    expect(screen.getByTestId('badge')).toHaveTextContent('5');
  });

  it('should render total cost Cart in Header', () => {
    render(<Header totalQuantity={0} totalCostCart={1000} />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Cart total:/i)).toHaveTextContent('1000');
  });
});

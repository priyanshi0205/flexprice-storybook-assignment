import { render, screen } from '@testing-library/react';
import UsageBar from './UsageBar';

describe('UsageBar', () => {
  it('renders label and values', () => {
    render(<UsageBar label="API" used={10} total={100} />);
    expect(screen.getByText(/API/)).toBeInTheDocument();
    expect(screen.getByText(/10/)).toBeInTheDocument();
  });

  it('renders progress width correctly', () => {
    render(<UsageBar used={50} total={100} />);
    const fill = screen.getByTestId('usage-fill');
    expect(fill).toHaveStyle({ width: '50%' });
  });
});
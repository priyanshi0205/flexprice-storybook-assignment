import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import DateRangePicker from './DateRangePicker';

describe('DateRangePicker', () => {
	it('renders placeholder text', () => {
		render(<DateRangePicker onChange={() => {}} />);

		expect(screen.getByText(/select range/i)).toBeInTheDocument();
	});

	it('calls onChange when cleared', () => {
		const onChange = vi.fn();

		render(
			<DateRangePicker
				onChange={onChange}
				startDate={new Date(2025, 0, 1)}
				endDate={new Date(2025, 0, 10)}
			/>,
		);

		const clearBtn = screen.getByRole('button', { hidden: true });
		fireEvent.click(clearBtn);

		expect(onChange).toHaveBeenCalledWith({
			startDate: undefined,
			endDate: undefined,
		});
	});

	it('shows title when provided', () => {
		render(<DateRangePicker title="Billing" onChange={() => {}} />);

		expect(screen.getByText('Billing')).toBeInTheDocument();
	});
});
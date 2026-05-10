import { render, screen } from '@testing-library/react';
import InvoiceStatusBadge from './InvoiceStatusBadge';

describe('InvoiceStatusBadge', () => {
	it('renders PAID status', () => {
		render(<InvoiceStatusBadge status="PAID" />);
		expect(screen.getByText(/Paid/i)).toBeInTheDocument();
	});

	it('renders PENDING status', () => {
		render(<InvoiceStatusBadge status="PENDING" />);
		expect(screen.getByText(/Pending/i)).toBeInTheDocument();
	});

	it('renders FAILED status', () => {
		render(<InvoiceStatusBadge status="FAILED" />);
		expect(screen.getByText(/Failed/i)).toBeInTheDocument();
	});

	it('falls back to raw status', () => {
		render(<InvoiceStatusBadge status="UNKNOWN" />);
		expect(screen.getByText(/UNKNOWN/i)).toBeInTheDocument();
	});
});
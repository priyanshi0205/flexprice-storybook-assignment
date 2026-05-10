import { render, screen, fireEvent } from '@testing-library/react';
import FlexpriceTable from './Table';
import { describe, it, expect, vi } from 'vitest';

type Row = {
	name: string;
	email: string;
};

const columns = [
	{ title: 'Name', fieldName: 'name' },
	{ title: 'Email', fieldName: 'email' },
];

const data: Row[] = [
	{ name: 'Alice', email: 'alice@test.com' },
	{ name: 'Bob', email: 'bob@test.com' },
];

describe('FlexpriceTable', () => {
	it('renders table headers', () => {
		render(<FlexpriceTable columns={columns} data={data} />);

		expect(screen.getByText('Name')).toBeInTheDocument();
		expect(screen.getByText('Email')).toBeInTheDocument();
	});

	it('renders rows correctly', () => {
		render(<FlexpriceTable columns={columns} data={data} />);

		expect(screen.getByText('Alice')).toBeInTheDocument();
		expect(screen.getByText('Bob')).toBeInTheDocument();
	});

	it('calls onRowClick when row clicked', () => {
		const onRowClick = vi.fn();

		render(<FlexpriceTable columns={columns} data={data} onRowClick={onRowClick} />);

		fireEvent.click(screen.getByText('Alice'));

		expect(onRowClick).toHaveBeenCalledWith(data[0]);
	});

	it('shows empty row when enabled', () => {
		render(<FlexpriceTable columns={columns} data={[]} showEmptyRow />);

		expect(screen.getAllByText('--').length).toBeGreaterThan(0);
	});
});
import type { Meta, StoryObj } from '@storybook/react';
import FlexpriceTable from './Table';

const meta: Meta<typeof FlexpriceTable> = {
	title: 'Molecules/Table',
	component: FlexpriceTable,
};

export default meta;

type Story = StoryObj<typeof FlexpriceTable>;

type Row = {
	name: string;
	email: string;
	role: string;
};

const columns = [
	{
		title: 'Name',
		fieldName: 'name',
	},
	{
		title: 'Email',
		fieldName: 'email',
	},
	{
		title: 'Role',
		fieldName: 'role',
	},
];

const data: Row[] = [
	{ name: 'Priyanshi', email: 'priyanshi@test.com', role: 'Admin' },
	{ name: 'John Doe', email: 'john@test.com', role: 'User' },
	{ name: 'Jane Smith', email: 'jane@test.com', role: 'Manager' },
];

export const Default: Story = {
	args: {
		columns,
		data,
	},
};

export const EmptyState: Story = {
	args: {
		columns,
		data: [],
		showEmptyRow: true,
	},
};

export const ClickableRows: Story = {
	args: {
		columns,
		data,
		onRowClick: (row) => alert(`Clicked: ${row.name}`),
	},
};
import type { Meta, StoryObj } from '@storybook/react';
import InvoiceStatusBadge from './InvoiceStatusBadge';

const meta: Meta<typeof InvoiceStatusBadge> = {
	title: 'Molecules/InvoiceStatusBadge',
	component: InvoiceStatusBadge,
	tags: ['autodocs'],
	argTypes: {
		status: {
			control: 'select',
			options: ['PAID', 'PENDING', 'FAILED', 'DRAFT', 'VOID'],
		},
	},
};

export default meta;

type Story = StoryObj<typeof InvoiceStatusBadge>;

export const Paid: Story = {
	args: {
		status: 'PAID',
	},
};

export const Pending: Story = {
	args: {
		status: 'PENDING',
	},
};

export const Failed: Story = {
	args: {
		status: 'FAILED',
	},
};

export const Draft: Story = {
	args: {
		status: 'DRAFT',
	},
};

export const Void: Story = {
	args: {
		status: 'VOID',
	},
};
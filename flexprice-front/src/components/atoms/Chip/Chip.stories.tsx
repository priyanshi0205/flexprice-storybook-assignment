import type { Meta, StoryObj } from '@storybook/react';
import { CheckCircle, AlertCircle, InfoIcon, XCircle } from 'lucide-react';
import Chip from './Chip';

const meta : Meta<typeof Chip> = {
	title: 'Atoms/Chip',
	component: Chip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'success', 'warning', 'failed', 'info'],
		},
		disabled: {
			control: 'boolean',
		},
	},
	args: {
		label: 'Chip',
	},
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'default',
		label: 'Default',
	},
};

export const Success: Story = {
	args: {
		variant: 'success',
		label: 'Active',
		icon: <CheckCircle size={14} />,
	},
};

export const Warning: Story = {
	args: {
		variant: 'warning',
		label: 'Pending',
		icon: <AlertCircle size={14} />,
	},
};

export const Failed: Story = {
	args: {
		variant: 'failed',
		label: 'Failed',
		icon: <XCircle size={14} />,
	},
};

export const Info: Story = {
	args: {
		variant: 'info',
		label: 'Info',
		icon: <InfoIcon size={14} />,
	},
};

export const Disabled: Story = {
	args: {
		variant: 'default',
		label: 'Disabled',
		disabled: true,
	},
};

export const Clickable: Story = {
	args: {
		label: 'Clickable Chip',
		onClick: () => alert('Chip clicked'),
	},
};
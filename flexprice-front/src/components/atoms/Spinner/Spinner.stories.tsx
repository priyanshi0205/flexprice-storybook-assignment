import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

const meta: Meta<typeof Spinner> = {
	title: 'Atoms/Spinner',
	component: Spinner,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'number' },
		},
		className: {
			control: 'text',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Spinner>;

/**
 * DEFAULT — Basic loading spinner
 */
export const Default: Story = {
	args: {
		size: 24,
		className: '',
	},
};

/**
 * SMALL — Compact spinner for buttons
 */
export const Small: Story = {
	args: {
		size: 16,
	},
};

/**
 * LARGE — Page-level loading indicator
 */
export const Large: Story = {
	args: {
		size: 48,
	},
};

/**
 * CUSTOM COLOR — Using className override
 */
export const CustomColor: Story = {
	args: {
		size: 32,
		className: 'text-blue-500',
	},
};

/**
 * IN BUTTON CONTEXT — Real-world usage example
 */
export const InsideButton: Story = {
	render: () => (
		<button className="flex items-center gap-2 px-4 py-2 border rounded">
			<Spinner size={16} />
			Loading...
		</button>
	),
};
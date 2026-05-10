import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, expect, within } from '@storybook/test';
import Tooltip from './Tooltip';
import Button from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
	title: 'Components/Tooltip',
	component: Tooltip,
	argTypes: {
		side: {
			control: 'select',
			options: ['top', 'right', 'bottom', 'left'],
		},
		align: {
			control: 'select',
			options: ['start', 'center', 'end'],
		},
		delayDuration: { control: 'number' },
		content: { control: 'text' },
	},
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

/**
 * DEFAULT — Happy path usage
 */
export const Default: Story = {
	args: {
		content: 'This is a tooltip',
		children: <Button>Hover me</Button>,
	},
};

/**
 * VARIANTS — Different positions
 */
export const Positions: Story = {
	render: (args) => (
		<div style={{ display: 'flex', gap: 20, padding: 50 }}>
			<Tooltip {...args} side="top" content="Top">
				<Button>Top</Button>
			</Tooltip>
			<Tooltip {...args} side="right" content="Right">
				<Button>Right</Button>
			</Tooltip>
			<Tooltip {...args} side="bottom" content="Bottom">
				<Button>Bottom</Button>
			</Tooltip>
			<Tooltip {...args} side="left" content="Left">
				<Button>Left</Button>
			</Tooltip>
		</div>
	),
	args: {
		content: 'Tooltip',
	},
};

/**
 * INTERACTION TEST (REQUIRED)
 */
export const HoverInteraction: Story = {
	args: {
		content: 'Hello tooltip',
		children: <Button>Hover me</Button>,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const trigger = canvas.getByText('Hover me');

		await userEvent.hover(trigger);

		// Tooltip content should appear
		await expect(canvas.getByText('Hello tooltip')).toBeInTheDocument();
	},
};
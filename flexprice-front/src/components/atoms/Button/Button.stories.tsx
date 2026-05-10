import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import { Plus, ArrowRight } from 'lucide-react';

import Button from './Button';
import AddButton from './AddButton';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: [
				'default',
				'black',
				'destructive',
				'outline',
				'secondary',
				'ghost',
				'link',
			],
		},
		size: {
			control: 'select',
			options: ['xs', 'sm', 'default', 'lg', 'icon'],
		},
		isLoading: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Click Me',
	},
};

export const Variants: Story = {
	render: () => (
		<div className='flex flex-wrap gap-4'>
			<Button variant='default'>Default</Button>
			<Button variant='black'>Black</Button>
			<Button variant='destructive'>Destructive</Button>
			<Button variant='outline'>Outline</Button>
			<Button variant='secondary'>Secondary</Button>
			<Button variant='ghost'>Ghost</Button>
			<Button variant='link'>Link</Button>
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div className='flex items-center gap-4'>
			<Button size='xs'>XS</Button>
			<Button size='sm'>SM</Button>
			<Button size='default'>Default</Button>
			<Button size='lg'>LG</Button>
			<Button size='icon'>
				<Plus />
			</Button>
		</div>
	),
};

export const Loading: Story = {
	args: {
		children: 'Saving...',
		isLoading: true,
	},
};

export const Disabled: Story = {
	args: {
		children: 'Disabled',
		disabled: true,
	},
};

export const WithIcons: Story = {
	render: () => (
		<div className='flex gap-4'>
			<Button prefixIcon={<Plus />}>Add Item</Button>

			<Button suffixIcon={<ArrowRight />}>
				Continue
			</Button>
		</div>
	),
};

export const AddButtonStory: Story = {
	render: () => <AddButton />,
};

export const Interactive: Story = {
	args: {
		children: 'Click Test',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const button = canvas.getByRole('button');

		await userEvent.click(button);

		await expect(button).toBeInTheDocument();
	},
};
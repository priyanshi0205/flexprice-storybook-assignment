import type { Meta, StoryObj } from '@storybook/react';
import FlexPriceSelect from './Select';

const meta: Meta<typeof FlexPriceSelect> = {
	title: 'Atoms/Select',
	component: FlexPriceSelect,
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'changed' },
	},
};

export default meta;

type Story = StoryObj<typeof FlexPriceSelect>;

const options = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana' },
	{ value: 'mango', label: 'Mango' },
];

export const Default: Story = {
	args: {
		label: 'Fruit',
		placeholder: 'Select fruit',
		options,
	},
};

export const WithDescription: Story = {
	args: {
		label: 'Fruit',
		placeholder: 'Select fruit',
		options: [
			{ value: 'apple', label: 'Apple', description: 'Red and sweet' },
			{ value: 'banana', label: 'Banana', description: 'Yellow and soft' },
		],
	},
};

export const Disabled: Story = {
	args: {
		label: 'Fruit',
		placeholder: 'Select fruit',
		options,
		disabled: true,
	},
};

export const RadioMode: Story = {
	args: {
		label: 'Fruit',
		placeholder: 'Select fruit',
		options,
		isRadio: true,
	},
};

export const Empty: Story = {
	args: {
		label: 'Fruit',
		placeholder: 'Select fruit',
		options: [],
		noOptionsText: 'No fruits available',
	},
};
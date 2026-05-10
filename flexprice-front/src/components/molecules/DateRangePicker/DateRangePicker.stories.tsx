import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DateRangePicker from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
	title: 'Molecules/DateRangePicker',
	component: DateRangePicker,
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

// Wrapper because component is controlled
const Wrapper = (args: any) => {
	const [range, setRange] = useState<{ startDate?: Date; endDate?: Date }>({});

	return (
		<DateRangePicker
			{...args}
			startDate={range.startDate}
			endDate={range.endDate}
			onChange={(val) => setRange(val)}
		/>
	);
};

export const Default: Story = {
	render: Wrapper,
	args: {
		placeholder: 'Select date range',
		title: 'Billing Period',
	},
};

export const WithInitialValue: Story = {
	render: Wrapper,
	args: {
		title: 'Analytics Range',
		startDate: new Date(2025, 0, 1),
		endDate: new Date(2025, 0, 31),
	},
};

export const Disabled: Story = {
	render: Wrapper,
	args: {
		title: 'Disabled Picker',
		disabled: true,
	},
};

export const ConstrainedRange: Story = {
	render: Wrapper,
	args: {
		title: 'Limited Range',
		minDate: new Date(2024, 0, 1),
		maxDate: new Date(2026, 11, 31),
	},
};
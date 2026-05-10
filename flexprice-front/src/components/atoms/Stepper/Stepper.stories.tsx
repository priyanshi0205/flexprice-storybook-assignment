import type { Meta, StoryObj } from '@storybook/react';
import Stepper from './Stepper';

const meta: Meta<typeof Stepper> = {
	title: 'Molecules/Stepper',
	component: Stepper,
	tags: ['autodocs'],
	argTypes: {
		activeStep: {
			control: { type: 'number', min: 0 },
		},
		steps: {
			control: 'object',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Stepper>;

/**
 * DEFAULT — Basic stepper flow
 */
export const Default: Story = {
	args: {
		activeStep: 1,
		steps: [
			{ label: 'Account Details' },
			{ label: 'Billing Info' },
			{ label: 'Confirmation' },
		],
	},
};

/**
 * FIRST STEP ACTIVE — Initial state
 */
export const FirstStep: Story = {
	args: {
		activeStep: 0,
		steps: [
			{ label: 'Account Details' },
			{ label: 'Billing Info' },
			{ label: 'Confirmation' },
		],
	},
};

/**
 * LAST STEP COMPLETED — Final state
 */
export const Completed: Story = {
	args: {
		activeStep: 2,
		steps: [
			{ label: 'Account Details' },
			{ label: 'Billing Info' },
			{ label: 'Confirmation' },
		],
	},
};

/**
 * MANY STEPS — Real-world onboarding flow
 */
export const LongStepper: Story = {
	args: {
		activeStep: 2,
		steps: [
			{ label: 'Start' },
			{ label: 'Profile' },
			{ label: 'Plan Selection' },
			{ label: 'Payment' },
			{ label: 'Review' },
			{ label: 'Done' },
		],
	},
};
import type { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';

const meta: Meta<typeof Loader> = {
	title: 'Molecules/Loader',
	component: Loader,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof Loader>;

/**
 * DEFAULT — Full loader with animated quotes
 */
export const Default: Story = {
	render: () => <Loader />,
};

/**
 * PAGE LOADER — Full screen loading state
 */
export const PageLoader: Story = {
	render: () => (
		<div className="h-screen w-full">
			{/* @ts-ignore */}
			<Loader />
		</div>
	),
};

/**
 * CENTERED PREVIEW — Compact demo in a container
 */
export const InCard: Story = {
	render: () => (
		<div className="h-64 w-full flex items-center justify-center border rounded">
			<Loader />
		</div>
	),
};
import type { Meta, StoryObj } from '@storybook/react';
import AppSidebar from './SideBar';
import { MemoryRouter } from 'react-router';

const meta: Meta<typeof AppSidebar> = {
	title: 'Organisms/Sidebar',
	component: AppSidebar,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<div className="h-screen w-[280px] border">
					<Story />
				</div>
			</MemoryRouter>
		),
	],
};

export default meta;

type Story = StoryObj<typeof AppSidebar>;

export const Default: Story = {};

export const Collapsed: Story = {
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => (
			<MemoryRouter>
				<div className="h-screen w-[80px] border">
					<Story />
				</div>
			</MemoryRouter>
		),
	],
};
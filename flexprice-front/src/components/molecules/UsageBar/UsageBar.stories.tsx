import type { Meta, StoryObj } from '@storybook/react';
import UsageBar from './UsageBar';

const meta: Meta<typeof UsageBar> = {
  title: 'Molecules/UsageBar',
  component: UsageBar,
};

export default meta;

type Story = StoryObj<typeof UsageBar>;

export const Default: Story = {
  args: {
    label: 'API Usage',
    used: 40,
    total: 100,
    unit: '%',
  },
};

export const Full: Story = {
  args: {
    label: 'Storage',
    used: 100,
    total: 100,
  },
};

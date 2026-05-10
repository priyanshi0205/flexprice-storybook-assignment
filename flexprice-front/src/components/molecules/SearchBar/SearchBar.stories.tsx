import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar';
import { useState } from 'react';

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return <SearchBar value={val} onChange={setVal} />;
  },
};

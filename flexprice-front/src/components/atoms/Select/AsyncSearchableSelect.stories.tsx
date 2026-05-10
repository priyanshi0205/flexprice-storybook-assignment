import type { Meta, StoryObj } from '@storybook/react';
import AsyncSearchableSelect from './AsyncSearchableSelect';

type User = {
  id: string;
  name: string;
};

const meta: Meta<typeof AsyncSearchableSelect<User>> = {
  title: 'Components/Select/AsyncSearchableSelect',
  component: AsyncSearchableSelect,
};

export default meta;

type Story = StoryObj<typeof AsyncSearchableSelect<User>>;

// fake API
const mockSearch = async (query: string) => {
  const data = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alex Johnson' },
  ];

  return data
    .filter((u) => u.name.toLowerCase().includes(query.toLowerCase()))
    .map((u) => ({
      value: u.id,
      label: u.name,
      data: u,
    }));
};

export const Default: Story = {
  args: {
    search: {
      searchFn: mockSearch,
    },
    extractors: {
      valueExtractor: (u) => u.id,
      labelExtractor: (u) => u.name,
    },
  },
};
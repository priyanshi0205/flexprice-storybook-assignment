import type { Meta, StoryObj } from '@storybook/react';
import AsyncMultiSearchableSelect from './AsyncMultiSearchableSelect';

type Tag = {
  id: string;
  label: string;
};

const meta: Meta<typeof AsyncMultiSearchableSelect<Tag>> = {
  title: 'Components/Select/AsyncMultiSearchableSelect',
  component: AsyncMultiSearchableSelect,
};

export default meta;

type Story = StoryObj<typeof AsyncMultiSearchableSelect<Tag>>;

const mockSearch = async (query: string) => {
  const items = [
    { id: '1', label: 'React' },
    { id: '2', label: 'Vue' },
    { id: '3', label: 'Angular' },
  ];

  return items
    .filter((i) => i.label.toLowerCase().includes(query.toLowerCase()))
    .map((i) => ({
      value: i.id,
      label: i.label,
      data: i,
    }));
};

export const Default: Story = {
  args: {
    search: {
      searchFn: mockSearch,
    },
    extractors: {
      valueExtractor: (t) => t.id,
      labelExtractor: (t) => t.label,
    },
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import SearchableSelect from './SearchableSelect';

const meta: Meta<typeof SearchableSelect> = {
  title: 'Components/Select/SearchableSelect',
  component: SearchableSelect,
};

export default meta;

type Story = StoryObj<typeof SearchableSelect>;

export const Default: Story = {
  args: {
    label: 'Framework',
    options: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'angular', label: 'Angular' },
    ],
  },
};

export const WithSearch: Story = {
  args: {
    label: 'Country',
    searchPlaceholder: 'Search country...',
    options: [
      { value: 'in', label: 'India' },
      { value: 'us', label: 'USA' },
      { value: 'uk', label: 'UK' },
      { value: 'jp', label: 'Japan' },
    ],
  },
};
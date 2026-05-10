import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import FlexPriceSelect from './Select';
import SearchableSelect from './SearchableSelect';

const options = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana' },
];

describe('FlexPriceSelect', () => {
	test('renders label and placeholder', () => {
		render(<FlexPriceSelect label="Fruit" placeholder="Select fruit" options={options} />);

		expect(screen.getByText('Fruit')).toBeInTheDocument();
		expect(screen.getByText('Select fruit')).toBeInTheDocument();
	});

	test('opens dropdown and selects option', () => {
		const onChange = vi.fn();

		render(
			<FlexPriceSelect label="Fruit" placeholder="Select fruit" options={options} onChange={onChange} />
		);

		fireEvent.click(screen.getByRole('button'));

		fireEvent.click(screen.getByText('Apple'));

		expect(onChange).toHaveBeenCalled();
	});
});


describe('SearchableSelect', () => {
  const options = [
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' },
  ];

  it('renders placeholder', () => {
    render(<SearchableSelect options={options} />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('opens popover on click', () => {
    render(<SearchableSelect options={options} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Option A')).toBeInTheDocument();
  });
});
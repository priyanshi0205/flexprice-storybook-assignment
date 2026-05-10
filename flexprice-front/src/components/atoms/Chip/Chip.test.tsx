import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

import Chip from './Chip';

describe('Chip Component', () => {
	it('renders chip label', () => {
		render(<Chip label='Active' />);

		expect(screen.getByText('Active')).toBeInTheDocument();
	});

	it('renders icon', () => {
		render(<Chip label='Success' icon={<span>✓</span>} />);

		expect(screen.getByText('✓')).toBeInTheDocument();
	});

	it('calls onClick when clicked', () => {
		const handleClick = vi.fn();

		render(<Chip label='Clickable' onClick={handleClick} />);

		fireEvent.click(screen.getByRole('button'));

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('does not call onClick when disabled', () => {
		const handleClick = vi.fn();

		render(<Chip label='Disabled' onClick={handleClick} disabled />);

		fireEvent.click(screen.getByRole('button'));

		expect(handleClick).not.toHaveBeenCalled();
	});

	it('renders disabled state', () => {
		render(<Chip label='Disabled' disabled />);

		expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
	});
});
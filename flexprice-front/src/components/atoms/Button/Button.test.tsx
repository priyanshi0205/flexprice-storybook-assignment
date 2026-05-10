import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';

import Button from './Button';

describe('Button Component', () => {
	it('renders button with text', () => {
		render(<Button>Click Me</Button>);

		const button = screen.getByRole('button', {
			name: /click me/i,
		});

		expect(button).toBeInTheDocument();
	});

	it('renders disabled button', () => {
		render(<Button disabled>Disabled</Button>);

		const button = screen.getByRole('button');

		expect(button).toBeDisabled();
	});

	it('renders loading state', () => {
		render(<Button isLoading>Loading</Button>);

		const button = screen.getByRole('button');

		expect(button).toBeDisabled();
	});

	it('calls onClick handler', () => {
		const handleClick = vi.fn();

		render(<Button onClick={handleClick}>Submit</Button>);

		const button = screen.getByRole('button');

		fireEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('applies correct variant classes', () => {
		render(<Button variant='destructive'>Delete</Button>);

		const button = screen.getByRole('button');

		expect(button.className).toContain('bg-destructive');
	});

	it('applies correct size classes', () => {
		render(<Button size='lg'>Large Button</Button>);

		const button = screen.getByRole('button');

		expect(button.className).toContain('h-10');
	});
});
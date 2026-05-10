import { render, screen, fireEvent } from '@testing-library/react';
import PricingCard from './PricingCard';
import type { PricingCardProps } from './PricingCard';
import { PlanType } from '@/constants/planTypes';
import { vi } from 'vitest';

// mock navigate
const mockNavigate = vi.fn();

vi.mock('react-router', async () => {
	const actual = await vi.importActual<any>('react-router');
	return {
		...actual,
		useNavigate: () => mockNavigate,
	};
});

const baseProps = {
	id: 'plan_1',
	name: 'Pro Plan',
    description: 'Best plan for testing',
	price: {
		amount: '29',
		currency: 'USD',
		billingPeriod: 'monthly',
		displayType: PlanType.FIXED,
	},
	entitlements: Array.from({ length: 4 }).map((_, i) => ({
		id: String(i),
		feature_id: `feat_${i}`,
		name: `Feature ${i}`,
		type: 'STATIC',
		value: '10',
	})),
	usageCharges: Array.from({ length: 4 }).map((_, i) => ({
		meter_name: `Metric ${i}`,
		billing_model: 'FLAT_FEE',
		amount: '0.01',
		currency: 'USD',
	})),
} satisfies PricingCardProps;

describe('PricingCard', () => {
	it('renders plan name', () => {
		render(<PricingCard {...baseProps} />);
		expect(screen.getByText('Pro Plan')).toBeInTheDocument();
	});

	it('navigates on View Plan click', () => {
		render(<PricingCard {...baseProps} />);
		fireEvent.click(screen.getByText('View plan'));
		expect(mockNavigate).toHaveBeenCalled();
	});

	it('expands usage charges', () => {
		render(<PricingCard {...baseProps} showUsageCharges />);
		fireEvent.click(screen.getByText(/\+.*more/i));
		expect(screen.getAllByText(/Metric/).length).toBeGreaterThan(3);
	});

	it('expands entitlements', () => {
		render(<PricingCard {...baseProps} />);
		fireEvent.click(screen.getAllByText(/\+.*more/i)[0]);
		expect(screen.getAllByText(/Feature/).length).toBeGreaterThan(3);
	});

	it('does not show View plan in preview mode', () => {
		render(<PricingCard {...baseProps} isPreview />);
		expect(screen.queryByText('View plan')).not.toBeInTheDocument();
	});
});
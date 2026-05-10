import type { Meta, StoryObj } from '@storybook/react';
import PricingCard from './PricingCard';
import { PlanType } from '@/constants/planTypes';

const meta: Meta<typeof PricingCard> = {
	title: 'Molecules/PricingCard',
	component: PricingCard,
	tags: ['autodocs'],
	argTypes: {
		isPreview: { control: 'boolean' },
		useModernChrome: { control: 'boolean' },
		showUsageCharges: { control: 'boolean' },
	},
};

export default meta;

type Story = StoryObj<typeof PricingCard>;

// ---------------- MOCK DATA ----------------
const baseProps = {
	id: 'plan_1',
	name: 'Pro Plan',
	price: {
		amount: '29',
		currency: 'USD',
		billingPeriod: 'monthly',
		displayType: PlanType.FIXED,
	},
	entitlements: [
		{
			id: '1',
			feature_id: 'feat_1',
			name: 'Projects',
			type: 'STATIC' as const,
			value: '10',
		},
		{
			id: '2',
			feature_id: 'feat_2',
			name: 'API Access',
			type: 'BOOLEAN' as const,
			value: true,
		},
	],
	usageCharges: [
		{
			meter_name: 'API Requests',
			billing_model: 'FLAT_FEE',
			amount: '0.01',
			currency: 'USD',
		},
	],
};

// ---------------- STORIES ----------------

/**
 * DEFAULT — Standard pricing card
 */
export const Default: Story = {
	args: {
		...baseProps,
		showUsageCharges: true,
	},
};

/**
 * FREE PLAN — No price
 */
export const FreePlan: Story = {
	args: {
		...baseProps,
		price: {
			amount: '0',
			currency: 'USD',
			billingPeriod: 'monthly',
			displayType: PlanType.FREE,
		},
	},
};

/**
 * HEAVY USAGE PLAN — shows expand/collapse
 */
export const ManyUsageCharges: Story = {
	args: {
		...baseProps,
		showUsageCharges: true,
		usageCharges: Array.from({ length: 6 }).map((_, i) => ({
			meter_name: `Metric ${i + 1}`,
			billing_model: 'FLAT_FEE',
			amount: '0.01',
			currency: 'USD',
		})),
	},
};

/**
 * MANY ENTITLEMENTS — test "Show more"
 */
export const ManyEntitlements: Story = {
	args: {
		...baseProps,
		entitlements: Array.from({ length: 6 }).map((_, i) => ({
			id: String(i),
			feature_id: `feat_${i}`,
			name: `Feature ${i}`,
			type: 'STATIC',
			value: `${i * 10}`,
		})),
	},
};

/**
 * PREVIEW MODE — onboarding / AI view
 */
export const PreviewMode: Story = {
	args: {
		...baseProps,
		isPreview: true,
		showUsageCharges: true,
	},
};

/**
 * MODERN CHROME — product UI mode
 */
export const ModernChrome: Story = {
	args: {
		...baseProps,
		useModernChrome: true,
		showUsageCharges: true,
	},
};

/**
 * EMPTY STATE — no entitlements
 */
export const EmptyEntitlements: Story = {
	args: {
		...baseProps,
		entitlements: [],
	},
};
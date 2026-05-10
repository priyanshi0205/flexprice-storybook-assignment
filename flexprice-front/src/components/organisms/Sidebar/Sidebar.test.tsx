import { render, screen } from '@testing-library/react';
import AppSidebar from './SideBar';
import { MemoryRouter } from 'react-router';

const renderSidebar = () => {
	return render(
		<MemoryRouter>
			<AppSidebar />
		</MemoryRouter>,
	);
};

describe('Sidebar (Organism)', () => {
	it('renders sidebar navigation', () => {
		renderSidebar();

		expect(screen.getByText('Home')).toBeInTheDocument();
		expect(screen.getByText('Billing')).toBeInTheDocument();
	});

	it('renders product catalog section', () => {
		renderSidebar();

		expect(screen.getByText('Product Catalog')).toBeInTheDocument();
		expect(screen.getByText('Plans')).toBeInTheDocument();
	});

	it('renders footer links', () => {
		renderSidebar();

		expect(screen.getByText('Documentation')).toBeInTheDocument();
	});

	it('renders pricing promo card when enabled', () => {
		renderSidebar();

		// promo card text
		expect(
			screen.getByText(/Describe your Pricing/i)
		).toBeInTheDocument();
	});
});
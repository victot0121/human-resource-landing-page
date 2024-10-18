import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';

test('renders Navbar with links', () => {
    render(<Navbar />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
});
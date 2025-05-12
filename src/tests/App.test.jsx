import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from '@testing-library/user-event';
import Home from '../Home';
import { BrowserRouter, createMemoryRouter, createBrowserRouter, RouterProvider } from 'react-router';
import routes from '../routes';
import { MemoryRouter } from 'react-router';

describe('App', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });
    it('renders App component', () => {
        const { container } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        expect(container).toMatchSnapshot();
    })
    it('should navigate to Home page after its button click', async () => {
        const router = createBrowserRouter(routes); 
        render(<RouterProvider router={router}/>)
        const user = userEvent.setup();
        
        const homeButton = screen.getByRole('button', { name: 'Home' });
        expect(homeButton).toHaveClass('button');

        const link = homeButton.querySelector('.link');
        expect(link).toBeInTheDocument();

        expect(link).toHaveClass('link');

        await user.click(homeButton);
        
        const headings = screen.getAllByRole("heading", { level: 1 }); 
        expect(headings).toHaveLength(3); 
        expect(headings[0]).toHaveTextContent(/curated./i);
        expect(headings[1]).toHaveTextContent(/effortless./i);
        expect(headings[2]).toHaveTextContent(/yours./i);

        expect(router.state.location.pathname).toBe('/');
    })
});
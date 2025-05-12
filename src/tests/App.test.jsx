import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from '@testing-library/user-event';
import Home from '../Home';
import { BrowserRouter, createMemoryRouter, RouterProvider } from 'react-router';
import routes from '../routes';
import { MemoryRouter } from 'react-router';

describe('App', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });
    it('renders App component', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    })
    it('should navigate to Home page after its button click', async () => {
        // const router = createMemoryRouter(routes); 
        // render(<RouterProvider router={router}/>)
        const user = userEvent.setup();

        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        const homeButton = screen.getByRole('button', { name: 'Home' });
        expect(homeButton).toHaveClass('button');

        const link = homeButton.querySelector('.link');
        expect(link).toBeInTheDocument();

        expect(link).toHaveClass('link');

        await user.click(homeButton);
        
        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument(); 
        const h1Elements = screen.getByRole("heading", { level: 1 });
        expect(h1Elements).toBeInTheDocument();
        expect(h1Elements).toHaveTextContent(/curated./);
        // expect(screen.getAllByRole("heading", {level: 1}).textContent).toMatch(/curated. effortless. yours./i);
    })
});
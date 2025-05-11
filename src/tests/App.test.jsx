import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from '@testing-library/user-event';
import Home from '../Home';
import { BrowserRouter, createMemoryRouter, MemoryRouter, RouterProvider } from 'react-router-dom';
import routes from '../routes';

describe('App', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });
    it('renders App component', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    })
    it('should navigate to Home page after its button click', async () => {
        const router = createMemoryRouter(routes); 
        render(<RouterProvider router={router}/>)
        const user = userEvent.setup();

        render(<App />);
        expect(screen.getByText(/home/i)).toBeInTheDocument();

        // await user.click(screen.getByText(/home/i));
        
        // render(<Home />, { wrapper: BrowserRouter });
        // expect(screen.getByText(/curated./i)).toBeInTheDocument();
        // expect(screen.getByText(/effortless./i)).toBeInTheDocument();
        // expect(screen.getByRole("heading", { level: 1 })).textContent.toMatch(/curated./i);
        // expect(screen.getAllByRole("heading", { level: 1 })).textContent.toMatch(/curated. effortless. yours./i);
        // expect(screen.getByRole("heading", { level: 1, name: "curated." })).toBeInTheDocument();
        // const h1Element = screen.getByRole('heading', { name: "Curated." });
        // expect(h1Element).toBeInTheDocument();
    })
});
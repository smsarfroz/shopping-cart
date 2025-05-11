import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import App from "../App";


describe('App', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });
    it('renders App component', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    })
});
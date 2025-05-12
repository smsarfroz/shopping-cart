import { vi, describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import Shop from '../Components/Shop/Shop';
import { userEvent } from '@testing-library/user-event';
import { useOutletContext } from 'react-router-dom';
import { jest } from '@jest/globals';

describe('Shop', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });
})

jest.mock('../ItemCard/ItemCard', () => (props) => (
  <div data-testid="item-card">{JSON.stringify(props)}</div>
));
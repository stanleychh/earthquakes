import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Table } from './Table';

afterEach(cleanup);

describe('Basic Render', () => {
    it('should render the Table component', () => {
        const { container } = render(<Table />);
        const selector = container.querySelector('.ReactTable');

        expect(selector).not.toBeNull();
    });

    it('should render pagination in Table component', () => {
        const { container } = render(<Table />);
        const selector = container.querySelector('.pagination-bottom');

        expect(selector).not.toBeNull();
    });

    it('should render filter in Table component if `filterable` is provided', () => {
        const { container } = render(<Table filterable />);
        const selector = container.querySelector('.-filters');

        expect(selector).not.toBeNull();
    });

    it('should render jump page input if `showPageJump` is provided', () => {
        const { container } = render(<Table showPageJump />);
        const selector = container.querySelector('.-pageJump');

        expect(selector).not.toBeNull();
    });
});

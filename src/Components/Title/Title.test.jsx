import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Title } from './Title';

afterEach(cleanup);

describe('Basic Render', () => {
    it('should render the Title component', () => {
        const { container } = render(<Title />);
        const selector = container.querySelector('h3');

        expect(selector).not.toBeNull();
    });

    it('should render the title if `title` is provided', () => {
        const { container } = render(<Title title="foo" />);
        const selector = container.querySelector('h3');
        const expected = 'foo';

        expect(selector.textContent).toEqual(expected);
    });

    it('should render the subtitle if `subtitle` is provided', () => {
        const { container } = render(<Title subtitle="bar" />);
        const selector = container.querySelector('p');
        const expected = 'bar';

        expect(selector.textContent).toEqual(expected);
    });
});

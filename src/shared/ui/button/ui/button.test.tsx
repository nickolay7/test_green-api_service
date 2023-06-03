import { render, screen } from '@testing-library/react';
import { Button } from './button';
import { ElementTheme } from '../../../types/ui';

describe('button test', () => {
    beforeEach(() => {
        render(<Button variant={ElementTheme.CLEAR}>TEST</Button>);
    });

    test('has in the document', () => {
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('contains a class', () => {
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});

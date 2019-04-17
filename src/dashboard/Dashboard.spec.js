// Test away
import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer'; 
import 'jest-dom/extend-expect';
import Display from '../display/Display';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('Dashboard renders', () => {

        expect(render(<Dashboard />)).not.toBeNull();
    });

    it('Dashboard should show controls and display', () => {
        const {getByText } = render(<Dashboard />)

        expect(getByText(/Unlocked/i)).toBeInTheDocument();
        expect(getByText(/Open/i)).toBeInTheDocument();
        expect(getByText(/Lock Gate/i)).toBeInTheDocument();
        expect(getByText(/Close Gate/i)).toBeInTheDocument();
        
    });


});


// Test away!
import React from 'react';
import { render,  cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer'; 
import 'jest-dom/extend-expect';
import Display from './Display';

afterEach(cleanup) 


describe('<Display />', () => {
    it('should display if gate is closed', () => {
        const { getByText } = render(<Display closed={true}/>)
        expect(getByText(/Closed/i)).toBeInTheDocument();
    });

    it('should display that the gate is opened if it is unlocked', () => {
        const { getByText } = render(<Display closed={false}/>)
        expect(getByText(/Open/i)).toBeInTheDocument();
    });

    it('should default to the red-led class when locked/close', () => {
        const { getByText } = render(<Display closed={true} locked={true}/>)

        const locked = getByText(/locked/i);
        expect(locked).toHaveClass('red-led');
    });

    it('should default to the green-led class when unlocked', () => {
        const { getByText } = render(<Display closed={false} locked={false}/>)

        expect(getByText(/open/i)).toHaveClass('led green-led');

    });

    it('should have unlocked green, closed red for unlocked but door is closed', () => {
        const { getByText } = render(<Display closed={true} locked={false}/>)

        expect(getByText(/closed/i)).toHaveClass('led red-led');
        
    });
})
// Test away!
import React from 'react';
import { render,  fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer'; 
import 'jest-dom/extend-expect';

import Controls from './Controls';

afterEach(cleanup) 


describe('<Controls />', () => {

    it('should provide buttons to toggle closed and locked states', () => {
        const { getByText }  = render(<Controls locked={false} closed={false}/>)

        const lockButton = getByText(/lock Gate/i)
        const closeButton = getByText(/close/i)

        expect(lockButton).toBeInTheDocument();
        expect(closeButton).toBeInTheDocument();
    })

    it('should provide buttons to toggle unlock and open states', () => {
        const { getByText }  = render(<Controls  locked={true} closed={true}/>)

        const unlockButton = getByText(/unlock Gate/i)
        const openButton = getByText(/open gate/i)
        // const lockButton = getByText(/lock Gate/i)
        // const closeButton = getByText(/close gate/i)

        fireEvent.click(unlockButton)
        fireEvent.click(openButton)
        // fireEvent.click(closeButton)
        // fireEvent.click(lockButton)
  
      
    

        expect(unlockButton).toBeInTheDocument();
        expect(openButton).toBeInTheDocument();
    }) 

    it('should expect open gate to be disabled', () => {

        const { getByText }  = render(<Controls locked={true} closed={true}/>)

        const closeButton = getByText(/open gate/i)
        const lockButton = getByText(/unlock Gate/i)
       

        fireEvent.click(lockButton)
        fireEvent.click(closeButton)

        expect(getByText(/Open Gate/i)).toBeDisabled();
        
    })

    it('should expect the locked toggle button to be disabled if the gate is open', () => {

     
        const { getByText }  = render(<Controls />)
       
        expect(getByText(/Lock Gate/i)).toBeDisabled();

        
    });

    it('should expect the locked toggle button to be disabled if the gate is open', () => {

     
        const { getByText }  = render(<Controls locked={true} closed={false}/>)
       
        expect(getByText(/Close Gate/i)).toBeDisabled();

        
    })


});

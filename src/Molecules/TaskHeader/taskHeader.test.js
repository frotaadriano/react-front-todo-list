import React from 'react';
import { shallow } from 'enzyme';
import TaskHeader from './taskHeader';

// describe('TaskHeader', () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<TaskHeader debug />);
  
//     expect(component).toMatchSnapshot();
//   });
// }); 

describe('TaskHeader', () => {
    it('should render correctly with no props', () => {
        const component = shallow(<TaskHeader/>);
        
        expect(component).toMatchSnapshot();
      });
}); 
 


import React from 'react';
import renderer from 'react-test-renderer';
import Support from "../Components/Pages/Support";

describe('Components/CourseItem', () =>{
   it('test 01', () =>{
       const tree = renderer
           .create(<Support/>);
       expect(tree).toMatchSnapshot();

   })
});
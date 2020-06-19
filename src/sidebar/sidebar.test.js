import React from "react";
import { render } from '@testing-library/react';
import Sidebar from '.'


describe('Sidebar behavior', () => {

  it('should be rendered', () => {
    const props = [
      {
        text: 'label A',
        open: true,
        children: [
          {
            text: 'label B',
            open: true,
            children: [
              {
                text: 'label C',
              }
            ]
          }
        ]
      },
      {
        text: 'label A',
        open: true,
        children: [
          {
            text: 'label B',
            open: true,
            children: [
              {
                text: 'label C',
              }
            ]
          }
        ]
      }
    ]

    const component = render(<Sidebar items={props} />);
    expect(component).toBeTruthy();
    expect(component.getAllByRole('component').length).toEqual(6);
  });

});

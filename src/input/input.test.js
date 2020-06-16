import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Input from '.'


describe('Input behavior', () => {

  it('should be rendered', () => {
    const onChange = jest.fn();
    const component = render(<Input value="some text" onChange={onChange} />);
    const element = component.getByDisplayValue(/some text/);

    expect(element.closest('input')).toBeTruthy();
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();

    fireEvent.change(element, { target: { value: 'changed' } });

    expect(onChange).toBeCalled();
  });

  it('should be rendered with optional data', () => {
    const component = render(<Input value="some text"
      label="label name"
      maxLength="10"
      assistText="example text" />);
    expect(component.getByText(/label name/)).toBeTruthy();
    expect(component.getByText(/example text/)).toBeTruthy();
    expect(component.getByText(/1\/10/)).toBeTruthy();
  });

  it('should be disabled', () => {
    const component = render(<Input value="some text" disabled />);
    const element = component.getByDisplayValue(/some text/i);
    expect(element.closest('input').disabled).toBeTruthy();
  });

  it('should be rendered with prefix and suffix', () => {
    const component = render(<Input value="some text"
      prefix="pre"
      suffix="suf"
      assistText="example text" />);
    expect(component.getByText(/pre/)).toBeTruthy();
    expect(component.getByText(/suf/)).toBeTruthy();
  });

  it('should have success state', () => {
    const component = render(<Input value="some text"
      success={true}
      successText="success text" />);

    expect(component.getByTestId('successIcon')).toBeTruthy();
    expect(component.getByText(/success text/)).toBeTruthy();
  });

  it('should have error state', () => {
    const component = render(<Input value="some text"
      error={true}
      success={true} // in this case error has priority
      errorText="error text" />);

    expect(component.getByTestId('errorIcon')).toBeTruthy();
    expect(component.getByText(/error text/)).toBeTruthy();
  });

  it('should be a textarea element', () => {
    const component = render(<Input value="some text" variant="textarea" />);
    const element = component.getByDisplayValue(/some text/i);
    expect(element.closest('textarea')).toBeTruthy();
  });

})

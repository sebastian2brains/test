import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Input } from '../../dist';
import '../codeStyles.css';
import '../../dist/index.css';

const propsDescriptions = {
  label: {
    propType: 'string',
    description: 'This will show this value above the field'
  },
  errorText: {
    propType: 'string',
    description: 'This will show this value below the field if the error props is true'
  },
  successText: {
    propType: 'string',
    description: 'This will show this value below the field if the success props is true'
  },
  assistText: {
    propType: 'string',
    description: 'This will show this value below the field'
  },
  maxLength: {
    propType: 'string',
    description: 'This will defined the input max length and will show a counter below the field'
  },
  type: {
    propType: 'string',
    description: 'accept just to values either text or password'
  },
  error: {
    propType: 'bool',
    description: 'input status, if it\'s true the input border will be green'
  },
  success: {
    propType: 'bool',
    description: 'input status, if it\'s true the input border will be green'
  },
  prefix: {
    propType: 'string / jsx',
    description: 'This element goes before text, it could be an string or an element like a icon but with a max-width of 16px'
  },
  suffix: {
    propType: 'string / jsx',
    description: 'This element goes after text, it could be an string or an element like a icon but with a max-width of 20px'
  },
  variant: {
    propType: 'string',
    description: 'This accept text or textarea as a value'
  },
  disabled: {
    propType: 'bool',
    description: ''
  },
  change: {
    propType: 'function',
    description: 'This function will return a new value entered into the input'
  }
}

const Red = props => <span style={{ color: 'red' }} {...props} >*</span>;

const TableComponent = ({ propDefinitions, ...propsx }) => {
  const propsMixeds = propDefinitions.map((el) => ({ ...el, ...propsDescriptions[el.property] }));

  const props = propsMixeds.map(
    ({ property, required, propType, defaultValue, description }) => {
      console.log(defaultValue);

      return (
        <tr key={property}>
          <td className="p-1">{property}
            {required && <Red />}
          </td>
          <td className="p-1" style={{ whiteSpace: "nowrap" }}>{propType}</td>
          <td className="p-1">{defaultValue !== undefined ? `${defaultValue}` : ' - '}</td>
          <td className="p-1">{description}</td>
        </tr>
      );
    }
  );

  return (
    <table style={{
      width: "100%"
    }} {...propsx} >
      <thead>
        <tr style={{ textAlign: "left" }}>
          <th>name</th>
          <th>type</th>
          <th>default</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  );
};

export const Simple = () => <Input
  maxLength={text('maxLength', '2')}
  prefix={text('prefix', '')}
  suffix={text('suffix', '')}
  type={select('type', ['text', 'password'], 'text')}
  variant={select('variant', ['text', 'textarea'], 'text')}
  assistText={text('assistText', '')}
  assistText={text('assistText', '')}
  success={boolean('success', false)}
  successText={text('successText', '')}
  error={boolean('error', false)}
  errorText={text('errorText', '')}
  disabled={boolean('disabled', false)}
  value={text('value', '')}
  placeholder={text('placeholder', '')}
  label={text('label', '')}
/>;

export default {
  title: 'Input',
  decorators: [withKnobs, withInfo],
  component: Input,
  parameters: {
    info: {
      inline: true,
      TableComponent,
      styles: {
        infoStory: {
          padding: '0px 40px 0px',
        }
      },
      text: `
        include into your project to be able to use the component styles
        ~~~js
        import 'library/dist/index.css';
        ~~~

        the basicest component form is: 

        ~~~js
        <Input value={someValue} onChange={()=>null} />
        ~~~

        change the knobs properties and you'll be able to watch its component structure below at Story Source
      `,
    },

  },
};
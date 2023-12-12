import React from 'react';
import {Switch} from '../Switch/Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
      description: 'Состояние включено/выключено.',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Состояние отключено.',
    },
    onChange: { action: 'clicked' },
  },
  args: {
    checked: false,
    disabled: false,
    label: ''
  },
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});

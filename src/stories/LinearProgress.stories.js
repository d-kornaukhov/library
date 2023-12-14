import React from 'react';
import {LinearProgress} from '../Progress/Progress';

export default {
  title: 'Components/LinearProgress',
  component: LinearProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color', description: 'Цвет' },
    width: { control: 'number', description: 'Ширина' },
    height: { control: 'number', description: 'Высота' },
    st: { control: 'object', description: 'Инлайн стили' },
  },
  args: {
    color: '',
    width: '',
    height: '',
    st: {},
  }
};

const Template = (args) => <LinearProgress {...args} />;

export const Default = Template.bind({});

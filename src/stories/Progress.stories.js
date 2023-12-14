import React from 'react';
import {Progress} from '../Progress/Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color', description: 'Цвет' },
    width: { control: 'number', description: 'Ширина' },
    height: { control: 'number', description: 'Высота' },
    st: { control: 'object', description: 'Инлайн стили' },
    progress: {control: 'number', description: 'Прогресс'},
    variant: {
      options: ['determinate', ''],
      control: { type: 'radio' },
    },
  },
  args: {
    color: '',
    width: '50',
    height: '50',
    st: {},
    progress: 100,
    variant: 'determinate',
  }
};

const Template = (args) => <Progress {...args} />;

export const Default = Template.bind({});

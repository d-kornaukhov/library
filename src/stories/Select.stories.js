import React from 'react';
import { Select, SelectItem } from '../Select/Select';

export default {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedOptionIndex: {
      control: {
        type: 'number',
        min: 0,
      },
      description: 'Индекс выбранной опции из массива options.',
    },
    label: { control: 'text' },
  },
};


const data = [
  {
    value: 1,
    children: 'Опция 1',
  },
  {
    value: 2,
    children: 'Опция 2',
  },
  {
    value: 3,
    children: 'Опция 3',
    disabled: true
  }
]

const Template = (args) => (
  <Select {...args}>
    {
      data.map((item) => (
        <SelectItem value={item.value} disabled={item.disabled}>{item.children}</SelectItem>
      ))
    }
  </Select>
);

export const Default = Template.bind({});
Default.args = {
  selectedOptionIndex: 1,
  label: 'Заголовок'
};

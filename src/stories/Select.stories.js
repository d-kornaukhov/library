import React from 'react';
import { Select } from '../Select/Select';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: {
        type: 'object',
      },
      description: 'Массив опций для выбора.',
    },
    selectedOptionIndex: {
      control: {
        type: 'number',
        min: 0,
      },
      description: 'Индекс выбранной опции из массива options.',
    },
  },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ],
  selectedOptionIndex: 1,
};

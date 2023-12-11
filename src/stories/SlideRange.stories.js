import React from 'react';
import { SlideRange } from '../SlideRange/SlideRange';

export default {
  title: 'Components/SlideRange',
  component: SlideRange,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    minValue: {
      control: {
        type: 'number',
        min: 0,
      },
      description: 'Минимальное значение для ползунка.',
    },
    maxValue: {
      control: {
        type: 'number',
        min: 0,
      },
      description: 'Максимальное значение для ползунка.',
    },
    step: {
      control: {
        type: 'number',
        min: 1,
      },
      description: 'Шаг изменения значения ползунка.',
    },
    value: {
      control: {
        type: 'number',
      },
      description: 'Текущее значение ползунка.',
    },
    showCurrentValue: {
      control: {
        type: 'boolean',
      },
      description: 'Отображать текущее значение ползунка.',
    },
    showMinMaxValues: {
      control: {
        type: 'boolean',
      },
      description: 'Отображать минимальное и максимальное значения ползунка.',
    },
    marks: {
      control: {
        type: 'boolean',
      },
      description: 'Отображать марки для шагов.',
    },
  },
  args: {
    minValue: 0,
    maxValue: 100,
    step: 1,
    value: 50,
    showCurrentValue: false,
    showMinMaxValues: false,
    marks: false
  },
};

const Template = (args) => <SlideRange {...args} />;

export const Default = Template.bind({});
Default.args = {};

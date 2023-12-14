import React, { useState, useEffect } from 'react';
import { LinearProgress } from '../Progress/Progress';

export default {
  title: 'Components/LinearProgress',
  component: LinearProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // color: {
    //   control: 'color',
    //   description: 'Цвет прогресса. Может быть представлен в формате HEX, RGB или RGBA.',
    // },
    st: {
      control: 'object',
      description: 'Дополнительные стили для кастомизации компонента.',
    },
    variant: {
      options: ['determinate', ''],
      control: { type: 'radio' },
      description: 'Вариант прогресса. "determinate" для фиксированного значения, "" для линейного прогресса.',
    },
    value: {
      control: 'number',
      description: 'Значение прогресса в процентах. Применяется только при варианте "determinate".',
    },
    showValue: {
      control: 'boolean',
      description: 'Показать прогресс. Применяется только при варианте "determinate".',
    }
  },
  args: {
    // color: '',
    variant: 'determinate',
    value: 0,
    showValue: true,
    st: {},
  },
};

const Template = (args) => <LinearProgress {...args} />;
const TemplateDeterminate = (args) => <LinearProgress {...args} />;

export const Progress = Template.bind({});
Progress.args = {
  variant: '',
};

export const ProgressDeterminate = TemplateDeterminate.bind({});
ProgressDeterminate.args = {
  variant: 'determinate',
  value: 50,
  showValue: false
};

export const ProgressDeterminateShowValue = TemplateDeterminate.bind({});
ProgressDeterminateShowValue.args = {
  variant: 'determinate',
  value: 50,
  showValue: true
};
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
    color: { control: 'color', description: 'Цвет прогресса. Может быть представлен в формате HEX, RGB или RGBA.' },
    width: { control: 'number', description: 'Ширина компонента' },
    height: { control: 'number', description: 'Высота компонента' },
    st: { control: 'object', description: 'Дополнительные стили для кастомизации компонента.' },
    value: {control: 'number', description: 'Значение прогресса в процентах. Применяется только при варианте "determinate".'},
    variant: {
      options: ['', 'determinate'],
      description: 'Вариант прогресса. "determinate" для фиксированного значения, "" для линейного прогресса.',
      control: { type: 'radio' },
    },
  },
  args: {
    color: '',
    width: 50,
    height: 50,
    st: {},
    value: 0,
    variant: '',
  }
};

const Template = (args) => <Progress {...args} />;

export const Default = Template.bind({});

export const ProgressDeterminate = Template.bind({});
ProgressDeterminate.args = {
  variant: 'determinate',
  value: 50
};
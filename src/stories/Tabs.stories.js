// Tabs.stories.js
import React from 'react';
import { Tabs, Tab } from '../Tabs/Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: {
        type: 'text',
      },
      description: 'Значение таба, который будет активен по умолчанию.',
    },
    children: {
      control: {
        type: 'object',
      },
      description: 'JSX элементы, представляющие отдельные табы.',
    },
    label: {
      control: {
        type: 'text',
      },
      description: 'Текст, отображаемый внутри таба.',
    },
    value: {
      control: {
        type: 'text',
      },
      description: 'Уникальное значение для таба.',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Отключение таба',
    },
  },
};


const data = [
  {
    label: 'Таб 1',
    value: '1',
    children: 'Контент таба 1'
  },
  {
    label: 'Таб 2',
    value: '2',
    children: 'Контент таба 2'
  },
  {
    label: 'Таб 3',
    value: '3',
    children: 'Контент таба 3',
    disabled: true,
  },
]

const Template = (args) => (
  <Tabs {...args} defaultValue={'1'}>
    {
      data.map((item) => (
        <Tab label={item.label} value={item.value} disabled={item.disabled}>
          {item.children}
        </Tab>
      ))
    }
  </Tabs>
);

export const Default = Template.bind({});
Default.args


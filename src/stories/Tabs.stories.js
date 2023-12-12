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

const Template = (args) => (
  <Tabs {...args}>
    <Tab label="Таб 1" value="1">
      Контент таба 1
    </Tab>
    <Tab label="Таб 2" value="2">
      Контент таба 2
    </Tab>
    <Tab label="Таб 3" value="3" disabled>
      Контент таба 3
    </Tab>
  </Tabs>
);

export const Default = Template.bind({});
Default.args


import React from 'react';
import { Pagination } from '../Pagination/Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    itemsPerPage: {
      control: {
        type: 'number',
      },
      description: 'Количество элементов на странице.',
    },
    totalItems: {
      control: {
        type: 'number',
      },
      description: 'Общее количество элементов для пагинации.',
    },
    visiblePages: {
      control: {
        type: 'number',
      },
      description: 'Количество видимых страниц в пагинации.',
    },
    hidePrevButton: {
      control: {
        type: 'boolean',
      },
      description: 'Скрыть кнопку "Назад".',
    },
    hideNextButton: {
      control: {
        type: 'boolean',
      },
      description: 'Скрыть кнопку "Вперед".',
    },
    showFirstButton: {
      control: {
        type: 'boolean',
      },
      description: 'Показать кнопку для первой страницы.',
    },
    showLastButton: {
      control: {
        type: 'boolean',
      },
      description: 'Показать кнопку для последней страницы.',
    },
    onPageChange: {
      action: 'onPageChange',
      description: 'Функция обратного вызова, вызываемая при изменении страницы.',
    },
  },
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemsPerPage: 10,
  totalItems: 100,
  visiblePages: 0,
  hidePrevButton: false,
  hideNextButton: false,
  showFirstButton: true,
  showLastButton: true,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

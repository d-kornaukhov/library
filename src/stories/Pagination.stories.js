import React from 'react';
import { Pagination } from '../Pagination/Pagination';

export default {
  title: 'Components/Pagination',
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
    IconFirst: {
      control: {
        type: 'string',
      },
      description: 'Иконка для кнопок первой и последней страницы'
    },
    IconNext: {
      control: {
        type: 'string',
      },
      description: 'Иконка для кнопок предыдущей и следущей страницы'
    }
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
  showFirstButton: false,
  showLastButton: false,
  IconFirst: '',
  IconNext: '',
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

export const NoPrevNextButtons = Template.bind({});
NoPrevNextButtons.args = {
  itemsPerPage: 10,
  totalItems: 100,
  visiblePages: 0,
  hidePrevButton: true,
  hideNextButton: true,
  showFirstButton: false,
  showLastButton: false,
  IconFirst: '',
  IconNext: '',
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

export const FirstAndLastButtons = Template.bind({});
FirstAndLastButtons.args = {
  itemsPerPage: 10,
  totalItems: 100,
  visiblePages: 0,
  hidePrevButton: false,
  hideNextButton: false,
  showFirstButton: true,
  showLastButton: true,
  IconFirst: '',
  IconNext: '',
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

export const ReplaceIcons = Template.bind({});
ReplaceIcons.args = {
  itemsPerPage: 10,
  totalItems: 100,
  visiblePages: 0,
  hidePrevButton: false,
  hideNextButton: false,
  showFirstButton: true,
  showLastButton: true,
  IconFirst: 'https://img.icons8.com/fluency/48/double-right.png',
  IconNext: 'https://img.icons8.com/color/48/forward.png',
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

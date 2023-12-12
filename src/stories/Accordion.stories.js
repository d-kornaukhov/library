import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '../Accordion/Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'none' },
    id: {
      control: 'none',
      description: 'Уникальный идентификатор для элемента аккордеона.',
    },
    icon: {
      control: 'none',
      description: 'URL или путь к иконке для заголовка аккордеона.',
    },
    disabled: {
      control: 'none',
      description: 'Отключает взаимодействие с аккордеоном.',
    },
  },
};

const Template = (args) => (
  <Accordion>
    <AccordionSummary id={1}>Accordion 1</AccordionSummary>
    <AccordionDetails id={1}>Accordion 1 content</AccordionDetails>


    <AccordionSummary id={2} icon={'https://img.icons8.com/ios-glyphs/30/long-arrow-down.png'}>Accordion 3</AccordionSummary>
    <AccordionDetails id={2}>Accordion 3 content</AccordionDetails>

    <AccordionSummary id={3} disabled>Accordion 2</AccordionSummary>
    <AccordionDetails id={3}>Accordion 2 content</AccordionDetails>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {};

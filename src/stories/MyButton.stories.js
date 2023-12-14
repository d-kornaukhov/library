import { MyButton } from '../MyButton/MyButton';

export default {
  title: 'Inputs/Button',
  component: MyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      description: 'Вариант кнопки. "primary" для основной, "secondary" для второстепенной.',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Размер кнопки. "small", "medium" или "large".',
    },
    children: {
      control: 'text',
      description: 'Содержимое кнопки.',
    },
    disabled: {
      control: 'boolean',
      description: 'Флаг, указывающий, отключена ли кнопка.',
    },
    styles: {
      control: 'object',
      description: 'Объект стилей для кастомизации внешнего вида кнопки.',
    },
    onClick: {
      action: 'click',
      description: 'Обработчик события нажатия на кнопку.',
    },
    onChange: {
      action: 'change',
      description: 'Обработчик события изменения состояния кнопки (например, для чекбокса).',
    },
  },
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Кнопка',
    disabled: false,
    styles: {},
    onClick: null,
    onChange: null
  }
};

const Template = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'large',
  children: 'Кнопка',
  disabled: false,
  styles: {},
  onClick: null,
  onChange: null
};

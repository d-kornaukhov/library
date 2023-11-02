import {MyButton} from '../MyButton/MyButton';

export default {
  title: 'Example/Button2',
  component: MyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text' },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    children: { control: 'text' },
  },
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Кнопка',
    disabled: false,
    styles: {},
  },
};

export const Primary = {
  args: {
    ariaLabel: 'Button',
    variant: 'primary'
  },
};
//
// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };
//
// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

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
    }
  },
  args: {
    variant: 'primary',
    size: 'large',
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
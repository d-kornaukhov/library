import { MyButton } from '../MyButton/MyButton';

export default {
  title: 'Components/Button',
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
    onClick: { action: 'click' },
  },
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Кнопка',
    disabled: false,
    styles: {},
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
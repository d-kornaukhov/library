import { CheckBox } from '../CheckBox/CheckBox';

export default {
    title: 'Components/CheckBox',
    component: CheckBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        ariaLabel: { control: 'text' },
        name: { control: 'text' },
        type: {
            options: ['radio', 'checkbox'],
            control: { type: 'radio' },
        },
    },
    args: {
        type: '',
        ariaLabel: '',
        checked: false,
        name: '',
        disabled: false,
        style: {},
    }
};

const Template = (args) => <CheckBox {...args} />;

export const Check = Template.bind({});
Check.args = {
    type: 'checkBox',
    ariaLabel: 'Чекбокс',
    disabled: false,
    checked: false,
    style: {}
};

export const Radio = Template.bind({});
Check.args = {
    type: 'radio',
    ariaLabel: 'радио кнопка',
    disabled: false,
    checked: false,
    style: {}
};
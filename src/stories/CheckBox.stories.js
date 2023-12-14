import { CheckBox } from '../CheckBox/CheckBox';

export default {
    title: 'Inputs/CheckBox',
    component: CheckBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        ariaLabel: {
            control: 'text',
            description: 'Уникальная строка, используемая для атрибута "aria-label" элемента',
        },
        name: {
            control: 'text',
            description: 'Имя элемента input',
        },
        type: {
            options: ['radio', 'checkbox'],
            control: { type: 'radio' },
            description: 'Тип элемента: "radio" для радиокнопки, "checkbox" для флажка',
        },
        checked: {
            control: 'boolean',
            description: 'Устанавливает начальное состояние флажка или радиокнопки',
        },
        disabled: {
            control: 'boolean',
            description: 'Определяет, отключен ли флажок или радиокнопка',
        },
        style: {
            control: 'object',
            description: 'Объект стилей для кастомизации внешнего вида компонента',
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
    name: 'checkBox',
    ariaLabel: 'Чекбокс',
    disabled: false,
    checked: false,
    style: {}
};

export const Radio = Template.bind({});
Radio.args = {
    type: 'radio',
    name: 'radio',
    ariaLabel: 'радио кнопка',
    disabled: false,
    checked: false,
    style: {}
};

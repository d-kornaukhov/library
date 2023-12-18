import React from 'react';
import {Skeleton} from '../Skeleton/Skeleton';

export default {
    title: 'Components/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        width: { control: 'text', description: 'Ширина компонента' },
        height: { control: 'text', description: 'Высота компонента' },
        st: { control: 'object', description: 'Дополнительные стили для кастомизации компонента.' },
        animation: {
            options: ['', 'wave'],
            description: 'Вариант анимации.',
            control: { type: 'radio' },
        },
    },
    args: {
        width: '100%',
        height: '20',
        st: {},
        animation: ''
    }
};



const Template = (args) =>
    <div style={{width: '500px'}}>
        <Skeleton {...args} />
    </div>;

    export const Default = Template.bind({});


export const waveAnimation = Template.bind({});
waveAnimation.args = {
    width: '100%',
    height: '20',
    st: {},
    animation: 'wave'
};


export const circleSkeleton = Template.bind({});
circleSkeleton.args = {
    width: '150',
    height: '150',
    st: {borderRadius: '50%'},
    animation: 'wave'
};
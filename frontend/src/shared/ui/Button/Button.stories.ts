import type { Meta, StoryObj } from '@storybook/react';
import { ThemeButton, Button } from './Button';
import 'app/styles/index.scss';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes

};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {

    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
    },
};

export const Outlined : Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

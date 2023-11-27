import type { Meta, StoryObj } from '@storybook/react';
import 'tailwindcss/tailwind.css';
import PlusButton from './plus-button';

const meta: Meta<typeof PlusButton> = {
    title: 'features/explorer/atoms/PlusButton',
    component: PlusButton,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof PlusButton>;

export const Empty: Story = {
    args: {
        children: 'Voir plus'
    }
};
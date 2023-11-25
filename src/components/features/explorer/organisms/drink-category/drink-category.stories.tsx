import type { Meta, StoryObj } from '@storybook/react';
import 'tailwindcss/tailwind.css';
import DrinkCategory from './drink-category';

const meta: Meta<typeof DrinkCategory> = {
    title: 'features/explorer/organisms/DrinkCategory',
    component: DrinkCategory,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof DrinkCategory>;

export const Empty: Story = {};
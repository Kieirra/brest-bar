import type { Meta, StoryObj } from '@storybook/react';
import 'tailwindcss/tailwind.css';
import ExplorerTitle from './explorer-title';

const meta: Meta<typeof ExplorerTitle> = {
    title: 'features/explorer/molecules/ExplorerTitle',
    component: ExplorerTitle,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof ExplorerTitle>;

export const Empty: Story = {};
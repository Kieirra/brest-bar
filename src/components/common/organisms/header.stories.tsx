import type { Meta, StoryObj } from '@storybook/react';
import Header from './header';

const meta: Meta<typeof Header> = {
    title: 'components/common/organisms/Header',
    component: Header,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Empty: Story = {};
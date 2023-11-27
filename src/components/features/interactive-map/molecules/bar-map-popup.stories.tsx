import type { Meta, StoryObj } from '@storybook/react';
import 'tailwindcss/tailwind.css';
import BarMapPopup from './bar-map-popup';
import { Category } from '../../../../../types/bar';

const meta: Meta<typeof BarMapPopup> = {
    title: 'features/interactive-map/molecules/BarMapPopup',
    component: BarMapPopup,
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof BarMapPopup>;

export const Empty: Story = {
    args: {
        bar:{
            name: "La Javanaise Bar Brest",
            address: "40 Quai de la Douane, 29200 Brest, France",
            website: "https://www.facebook.com/lajavanaise29200/",
            category: Category.CAVE,
            rating: 4.3,
            ratingCount: 15,
            phone: "06 95 52 55 72",
            openingHours: [
                "lundi: Fermé",
                "mardi: Fermé",
                "mercredi: Fermé",
                "jeudi: Fermé",
                "vendredi: 22:00 - 04:00",
                "samedi: 22:00 - 04:00",
                "dimanche: Fermé",
            ]
        }
    },
    decorators: [
        (Story) => (
            <div className="inline-block bg-ngrey-800 p-4 rounded-md">
                <Story />
            </div>
        ),
    ],
};
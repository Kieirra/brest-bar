import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.sky,
                secondary: colors.orange,
                ngrey: colors.slate,
                accent: colors.indigo,
            },
        },
    },
    plugins: [],
};
export default config;

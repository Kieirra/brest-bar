import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {
            nextConfigPath: path.resolve(__dirname, "../next.config.js"),
        },
    },
    docs: {
        autodocs: "tag",
    },
    staticDirs: ["../public"],
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                "@": path.resolve(__dirname, "../src"),
                "@public": path.resolve(__dirname, "../public"),
            };
        }
        return config;
    },
};
export default config;

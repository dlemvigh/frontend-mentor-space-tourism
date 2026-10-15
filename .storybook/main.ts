import type { StorybookConfig } from '@storybook/nextjs-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
  // The Next app uses @tailwindcss/turbopack; Storybook runs on Vite, so it needs the Vite plugin.
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, { plugins: [tailwindcss()] });
  },
};
export default config;

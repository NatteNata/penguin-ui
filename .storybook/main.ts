import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@chromatic-com/storybook',
		'@storybook/experimental-addon-test',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			resolve: {
				alias: [
					{
						find: '@',
						replacement: '/src',
					},
					{
						find: '@components',
						replacement: '/src/components',
					},
					{
						find: '@utils',
						replacement: '/src/utils',
					},
				],
			},
		})
	},
}
export default config
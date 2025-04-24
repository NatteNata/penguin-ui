import { Button, Dialog } from '@components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Dialog> = {
	argTypes: {
		title: {
			type: 'string',
			description: 'Editable in controls',
		},
		description: {
			type: 'string',
			description: 'Editable in controls',
		},
		buttonTitle: {
			type: 'string',
			description: 'Editable in controls',
		},
	},
	component: Dialog,
	decorators: [
		Story => (
			<div
				className={
					'flex min-h-40 items-center justify-start bg-dark-900 px-20 py-12'
				}
			>
				<Story />
			</div>
		),
	],
	tags: ['autodocs'],
	title: 'Components/Dialog',
}

type Story = StoryObj<typeof Dialog>

export default meta

export const Default: Story = {
	args: {
		title: 'Email sent',
		description: 'We have sent a link to confirm your email to epam@epam.com',
		buttonTitle: 'OK',
		trigger: (
			<>
				<Button variant='primary' type='button'>
					Show modal
				</Button>
			</>
		),
	},
}

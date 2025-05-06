import { Button, DialogA } from '@components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DialogA> = {
	argTypes: {
		title: {
			type: 'string',
			description: 'Editable in controls',
		},
		description: {
			type: 'string',
			description: 'Editable in controls',
		},
		closeButtonTitle: {
			type: 'string',
			description: 'Editable in controls',
		},
	},
	component: DialogA,
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

type Story = StoryObj<typeof DialogA>

export default meta

export const NoActionButton: Story = {
	args: {
		title: 'Email sent',
		description: 'We have sent a link to confirm your email to epam@epam.com',
		closeButtonTitle: 'OK',
		trigger: (
			<>
				<Button variant='primary' type='button'>
					Show modal
				</Button>
			</>
		),
	},
}

export const WithActionButton: Story = {
	args: {
		title: 'Close Post',
		description:
			'Do you really want to quit editing the post? If you close changes won’t be saved.',
		closeButtonTitle: 'Yes',
		actionButtonTitle: 'No',
		trigger: (
			<>
				<Button variant='primary' type='button'>
					Show modal
				</Button>
			</>
		),
	},
}
import * as RadixDialog from '@radix-ui/react-dialog'
import type { ReactNode } from 'react'

import { IconClose } from '@assets/icons/components'
import { Button, Card, Typography } from '@components'

type Props = {
	trigger?: ReactNode | string
	title: ReactNode | string
	description: ReactNode | string
	buttonTitle: string
	children?: ReactNode
}
export const Dialog = ({ buttonTitle, description, title, trigger }: Props) => {
	return (
		<RadixDialog.Root>
			<RadixDialog.Trigger>{trigger}</RadixDialog.Trigger>
			<RadixDialog.Portal>
				<RadixDialog.Overlay className='fixed inset-0 bg-dark-900' />
				<RadixDialog.Content className='-translate-y-1/2 -translate-x-1/2 fixed top-1/2 left-1/2 rounded-md text-light-100 shadow'>
					<Card className='flex flex-col gap-y-6 bg-dark-300'>
						<div className='flex items-center justify-between border-dark-100 border-b px-6 py-4'>
							<RadixDialog.Title>
								<Typography
									variant='h1'
									asElement='h1'
									className='text-light-100'
								>
									{title}
								</Typography>
							</RadixDialog.Title>
							<RadixDialog.Close>
								<IconClose />
							</RadixDialog.Close>
						</div>
						<RadixDialog.Description className='px-6 pt-8 pb-5'>
							<Typography
								variant='regular_text_16'
								asElement='p'
								className='font-inter-400 font-light text-light-100'
							>
								{description}
							</Typography>
						</RadixDialog.Description>
						<div className='mt-8 space-x-6 text-right'>
							<RadixDialog.Close className='px-6 py-4'>
								<Button variant='primary' className='mb-5'>
									{buttonTitle}
								</Button>
							</RadixDialog.Close>
						</div>
					</Card>
				</RadixDialog.Content>
			</RadixDialog.Portal>
		</RadixDialog.Root>
	)
}

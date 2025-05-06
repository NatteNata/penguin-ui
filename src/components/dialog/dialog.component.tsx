import * as RadixDialog from '@radix-ui/react-dialog'
import type { ReactNode } from 'react'

import { IconClose } from '@assets/icons/components'
import { Button, Card, Typography } from '@components'

type RadixDialogProps = React.ComponentProps<typeof RadixDialog.Root>

type Props = RadixDialogProps & {
	trigger?: ReactNode | string
	title: ReactNode | string
	description: ReactNode | string
	closeButtonTitle: string
	actionButtonTitle?: string
}
export const DialogA = ({
	trigger,
	title,
	description,
	closeButtonTitle,
	actionButtonTitle,
	open,
	onOpenChange,
}: Props) => {
	return (
		<RadixDialog.Root open={open} onOpenChange={onOpenChange}>
			<RadixDialog.Trigger>{trigger}</RadixDialog.Trigger>
			<RadixDialog.Portal>
				<RadixDialog.Overlay className='fixed inset-0 bg-dark-900/70 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]' />
				<RadixDialog.Content className='-translate-y-1/2 -translate-x-1/2 fixed top-1/2 left-1/2 rounded-md text-light-100 shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]'>
					<Card className='flex flex-col gap-y-6 bg-dark-300'>
						<div className='flex items-center justify-between border-dark-100 border-b px-6 py-4'>
							<RadixDialog.Title asChild>
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
						<RadixDialog.Description className='px-6 pt-8 pb-5' asChild>
							<Typography
								variant='regular_text_16'
								asElement='p'
								className='font-inter-400 font-light text-light-100'
							>
								{description}
							</Typography>
						</RadixDialog.Description>
						<div className='mt-8 mb-5 flex items-center justify-end space-x-6 px-6'>
							<RadixDialog.Close asChild>
								<Button variant={actionButtonTitle ? 'ghost' : 'primary'}>
									{closeButtonTitle}
								</Button>
							</RadixDialog.Close>
							{actionButtonTitle && (
								<Button variant='primary'> {actionButtonTitle} </Button>
							)}
						</div>
					</Card>
				</RadixDialog.Content>
			</RadixDialog.Portal>
		</RadixDialog.Root>
	)
}
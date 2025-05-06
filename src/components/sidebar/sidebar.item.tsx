import { Button } from '@components'
import { cn } from '@utils'
import type { ReactNode } from 'react'

type Props = {
	id: string
	active: boolean
	onClick: (acitve: string) => void
	children: ReactNode
	className?: string
}

export function SidebarItem({
	id,
	active,
	children,
	onClick,
	className,
}: Props) {
	return (
		<Button
			variant='ghost'
			type='button'
			id={id}
			onClick={() => onClick(id)}
			className={cn(
				'flex w-full gap-4 px-4 py-2 font-medium text-light-100 transition-colors hover:text-primary-100 focus:border-2 focus:border-primary-700',
				active && 'font-bold text-primary-500',
				className,
			)}
		>
			{children}
		</Button>
	)
}
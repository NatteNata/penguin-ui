import type { ReactNode } from 'react'

import { cn } from '../../utils'

type Props = {
	children?: ReactNode
	className?: string
}

export const Header = ({ children, className }: Props) => {
	return (
		<header
			className={cn(
				'flex h-20 items-center justify-between border-dark-300 border-b bg-dark-700',
				className,
			)}
		>
			{children}
		</header>
	)
}
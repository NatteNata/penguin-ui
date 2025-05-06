import { cn } from '@utils'
import type { ReactNode } from 'react'

export function SidebarGroup({
	children,
	className,
}: { children: ReactNode; className?: string }) {
	return (
		<div
			className={cn(
				'flex flex-col items-center justify-items-start pb-16',
				className,
			)}
		>
			{children}
		</div>
	)
}
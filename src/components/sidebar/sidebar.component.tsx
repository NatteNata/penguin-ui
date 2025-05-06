import { cn } from '@utils'
import { type ReactNode, useState } from 'react'
import { SidebarContext } from './sidebar.context.tsx'

type Props = {
	children: ReactNode
	className?: string
}

export function SidebarRoot({ children, className }: Props) {
	const [isCollapsed, setIsCollapsed] = useState(false)

	return (
		<SidebarContext.Provider
			value={{ isCollapsed, toggle: () => setIsCollapsed(prev => !prev) }}
		>
			<aside
				className={cn(
					'h-screen border-dark-300 border-r bg-background transition-all duration-300',
					isCollapsed ? 'w-16' : 'w-52',
					className,
				)}
			>
				<nav className='flex flex-col items-start justify-items-start pt-18'>
					{children}
				</nav>
			</aside>
		</SidebarContext.Provider>
	)
}
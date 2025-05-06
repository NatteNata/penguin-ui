import { createContext, useContext } from 'react'

type SidebarContextType = {
	isCollapsed: boolean
	toggle: () => void
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
	undefined,
)

export const useSidebarContext = () => {
	const context = useContext(SidebarContext)
	if (!context) {
		throw new Error('useSidebar must be defined')
	}
	return context
}
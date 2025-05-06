import { useSidebarContext } from '@components/sidebar/sidebar.context.tsx'

export function SidebarToggle() {
	const { toggle } = useSidebarContext()

	return (
		<button
			className='absolute top-4 right-[-12px] h-6 w-6 rounded-full bg-primary-400 text-light-100 text-sm'
			type='button'
			onClick={toggle}
		>
			⇄
		</button>
	)
}
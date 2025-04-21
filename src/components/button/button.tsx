import type { ComponentPropsWithoutRef } from 'react'
export const Button = (props: ComponentPropsWithoutRef<'button'>) => {
	return (
		<button
			type='button'
			className='rounded bg-emerald-800 px-4 py-2 text-white text-xl'
			{...props}
		>
			Test button
		</button>
	)
}
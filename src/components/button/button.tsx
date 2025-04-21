import type { ComponentPropsWithoutRef } from 'react'
export const Button = (props: ComponentPropsWithoutRef<'button'>) => {
	return (
		<button type='button' {...props}>
			Test button
		</button>
	)
}

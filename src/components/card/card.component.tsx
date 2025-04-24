import { cn } from '@utils'
import {
	type ComponentPropsWithoutRef,
	type ElementType,
	type ForwardedRef,
	type JSX,
	forwardRef,
} from 'react'

type CardProps<T extends ElementType = 'div'> = {
	asElement?: T
} & {
	ref?: ForwardedRef<T>
} & ComponentPropsWithoutRef<T>

export const Card = forwardRef(
	<T extends ElementType = 'div'>(
		{ asElement, className, ...restProps }: CardProps<T>,
		ref: ForwardedRef<T>,
	) => {
		const Component = (asElement ?? 'div') as ElementType

		return (
			<Component
				className={cn(
					'flex border border-dark-300 bg-dark-500 font-inter',
					className,
				)}
				ref={ref}
				{...restProps}
			/>
		)
	},
) as <T extends ElementType = 'div'>(props: CardProps<T>) => JSX.Element

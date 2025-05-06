import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	forwardRef,
} from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cn } from '@utils'

type Props = {
	asChild?: boolean
	fullWidth?: boolean
	variant?: 'ghost' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<ElementRef<'button'>, Props>(
	(
		{ asChild, className, fullWidth, variant = 'primary', ...restProps },
		ref,
	) => {
		const Comp = asChild ? Slot : 'button'

		return (
			<Comp
				className={cn(
					'box-border flex cursor-pointer items-center gap-2 rounded p-1.5 px-6 font-inter text-light-100 transition-colors ease-in-out disabled:pointer-events-none disabled:opacity-80',
					variant === 'primary' &&
						'bg-primary-500 text-light-100 hover:bg-primary-100 active:bg-primary-700' +
							' focus:border-2 focus:border-primary-700 focus:bg-primary-500 disabled:bg-primary-900',
					variant === 'secondary' &&
						'bg-dark-300 text-light-100 hover:bg-dark-100 focus:border focus:border-primary-300 active:bg-dark-400 disabled:bg-dark-500',
					variant === 'outlined' &&
						'border border-primary-500 bg-inherit text-primary-500 hover:border-primary-100 hover:text-primary-100' +
							' focus:border-2 focus:border-primary-700 active:border active:border-primary-700 disabled:border-primary-900 ',
					variant === 'ghost' &&
						'bg-inherit text-primary-500 hover:text-primary-100 active:border-none ',
					' focus:border-2 focus:border-primary-700 ',
					fullWidth && 'flex w-full justify-center',
					className,
				)}
				ref={ref}
				{...restProps}
			/>
		)
	},
)
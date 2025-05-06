// 'use client'

import {
	type ComponentPropsWithoutRef,
	type ReactNode,
	type Ref,
	forwardRef,
	useState,
} from 'react'

import { IconEye, IconEyeOffOutline, IconSearch } from '@assets'
import { cn, useGenerateId } from '@utils'

type Props = {
	helperMessage?: string
	label?: ReactNode | string
	hasError?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(
	(props: Props, ref: Ref<HTMLInputElement>) => {
		const {
			className,
			helperMessage,
			hasError,
			id,
			inputMode,
			label,
			name,
			placeholder,
			required,
			type = 'text',
			...restProps
		} = props
		const finalId = useGenerateId(id)

		const [inputType, setInputType] = useState(type)

		const toggleMode = () => {
			if (inputType === 'text') {
				setInputType('password')
			}
			if (inputType === 'password') {
				setInputType('text')
			}
		}

		return (
			<div className={'my-6'}>
				{label && (
					<Label
						className={'block'}
						htmlFor={finalId}
						label={label}
						required={required}
					/>
				)}
				<div className={cn('group relative block')}>
					<input
						autoComplete={name}
						className={cn(
							'block rounded-sm border-2 border-dark-100 bg-dark-500 shadow-light-900 shadow-sm placeholder:text-light-900 focus:placeholder:invisible',
							'peer w-full truncate px-3 py-1.5 text-base/6',
							'hover:border hover:border-light-900 hover:bg-inherit group-hover:text-light-100' +
								'focus-visible:border-none focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-500',
							'active:border active:bg-inherit active:text-light-100 active:placeholder:invisible' +
								' active:border-light-100 active:stroke-light-100',
							'invalid:border-none invalid:ring-2 invalid:ring-red-500',
							hasError && 'border-red-500 ring-2 ring-red-500',
							'remove-autofill bg-dark-900',
							type === 'search' && 'pl-10',
							type === 'password' && 'pr-10',
							className,
						)}
						id={finalId}
						inputMode={inputMode}
						name={name}
						placeholder={placeholder}
						ref={ref}
						type={inputType}
						{...restProps}
					/>
					{type === 'search' && (
						<span
							className={cn(
								'absolute inset-y-0 left-0 flex items-center pl-2',
								'stroke-light-700 group-hover:stroke-light-100 group-active:stroke-light-100',
							)}
						>
							<IconSearch />
						</span>
					)}
					{type === 'password' && (
						<span
							className={cn(
								'-right-2 absolute inset-y-2 items-center pr-4',
								'stroke-light-700 group-hover:stroke-light-100 group-active:stroke-light-100',
							)}
							onClick={toggleMode}
							onKeyDown={toggleMode}
						>
							{inputType === 'password' && <IconEye height={28} width={28} />}
							{inputType === 'text' && (
								<IconEyeOffOutline height={28} width={28} />
							)}
						</span>
					)}
					<HelperMessage errorMessage={helperMessage} />
				</div>
			</div>
		)
	},
)

type LabelProps = {
	label: ReactNode
	required?: boolean
} & ComponentPropsWithoutRef<'label'>

export const Label = ({
	className,
	htmlFor,
	label,
	required,
	...restProps
}: LabelProps) => {
	return (
		<label
			className={cn(
				'block text-light-900 text-sm/6',
				required && "after:ml-0.5 after:text-red-500 after:content-['*']",
				className,
			)}
			htmlFor={htmlFor}
			{...restProps}
		>
			{label}
		</label>
	)
}

type HelperMessageProps = {
	errorMessage?: string
} & ComponentPropsWithoutRef<'span'>

export const HelperMessage = ({
	className,
	errorMessage,
	...restProps
}: HelperMessageProps) => {
	return errorMessage ? (
		<span
			className={cn('mt-4 text-danger-500 text-sm', className)}
			{...restProps}
		>
			{errorMessage}
		</span>
	) : null
}

Input.displayName = 'Input'
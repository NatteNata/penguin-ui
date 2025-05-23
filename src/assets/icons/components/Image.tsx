import { type Ref, type SVGProps, forwardRef, memo } from 'react'
const SvgImage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		height={'24'}
		ref={ref}
		viewBox={'0 0 24 24'}
		width={'24'}
		xmlns={'http://www.w3.org/2000/svg'}
		{...props}
	>
		<path
			d={
				'M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M6 5h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L5 17.7V6a1 1 0 0 1 1-1'
			}
			fill={'currentColor'}
		/>
		<path
			d={'M8 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3'}
			fill={'currentColor'}
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgImage)
const Memo = memo(ForwardRef)

export default Memo

import { type Ref, type SVGProps, forwardRef, memo } from 'react'
const SvgMaximizeOutline = (
	props: SVGProps<SVGSVGElement>,
	ref: Ref<SVGSVGElement>,
) => (
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
				'm20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095M5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0'
			}
			fill={'currentColor'}
		/>
		<path
			d={
				'M13 10h-1V9a1 1 0 0 0-2 0v1H9a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2'
			}
			fill={'currentColor'}
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgMaximizeOutline)
const Memo = memo(ForwardRef)

export default Memo

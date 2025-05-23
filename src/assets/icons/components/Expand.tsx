import { type Ref, type SVGProps, forwardRef, memo } from 'react'
const SvgExpand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
				'M20 5a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L18 7.42V10a1 1 0 0 0 2 0zm-9.29 8.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42'
			}
			fill={'currentColor'}
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgExpand)
const Memo = memo(ForwardRef)

export default Memo

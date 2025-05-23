import { type Ref, type SVGProps, forwardRef, memo } from 'react'
const SvgEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		ref={ref}
		{...props}
	>
		<path d='M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0' />
		<circle cx='12' cy='12' r='3' />
	</svg>
)
const ForwardRef = forwardRef(SvgEye)
const Memo = memo(ForwardRef)

export default Memo
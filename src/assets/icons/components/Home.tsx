import { type Ref, type SVGProps, forwardRef, memo } from 'react'
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		height={'24'}
		ref={ref}
		viewBox={'0 0 24 24'}
		width={'24'}
		xmlns={'http://www.w3.org/2000/svg'}
		{...props}
	>
		<path d={'M14 14h-4v7h4z'} fill={'currentColor'} />
		<path
			d={
				'M20.42 10.18 12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44'
			}
			fill={'currentColor'}
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgHome)
const Memo = memo(ForwardRef)

export default Memo

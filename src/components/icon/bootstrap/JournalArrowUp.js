import * as React from 'react';

function SvgJournalArrowUp(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path
				fillRule='evenodd'
				d='M8 11a.5.5 0 00.5-.5V6.707l1.146 1.147a.5.5 0 00.708-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L7.5 6.707V10.5a.5.5 0 00.5.5z'
			/>
			<path d='M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z' />
			<path d='M1 5v-.5a.5.5 0 011 0V5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V8h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1z' />
		</svg>
	);
}

export default SvgJournalArrowUp;

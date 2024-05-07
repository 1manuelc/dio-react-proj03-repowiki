import PropTypes from 'prop-types';

import { MagnifyingGlass } from '@phosphor-icons/react';

export default function Input({ updateSearchFn, getRepoFn }) {
	return (
		<div className='w-full flex items-center justify-end gap-2'>
			<input
				type='text'
				className='p-2 w-auto md:w-96 rounded-lg text-sm bg-neutral-950'
				placeholder='user/repo'
				onChange={(e) => updateSearchFn(e.target.value)}
			></input>
			<button
				onClick={() => getRepoFn()}
				className='p-2 pl-6 pr-6 text-center rounded-lg text-sm bg-slate-800 hover:bg-slate-700 active:bg-slate-900 transition-colors'
			>
				<MagnifyingGlass className='text-lg' weight='bold'></MagnifyingGlass>
			</button>
		</div>
	);
}

Input.propTypes = {
	updateSearchFn: PropTypes.func,
	getRepoFn: PropTypes.func,
};

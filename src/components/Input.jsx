import PropTypes from 'prop-types';

export default function Input({ updateSearchFn, getRepoFn }) {
	return (
		<div className='flex gap-2 items-center justify-center h-full w-full flex-col md:flex-row'>
			<input
				type='text'
				className='h-full p-2 pl-3 pr-3 w-full md:w-72 rounded-lg text-sm bg-neutral-950'
				placeholder='user/repo'
				onChange={(e) => updateSearchFn(e.target.value)}
			></input>
			<button
				onClick={() => getRepoFn()}
				className='p-2 pl-6 pr-6 w-full  text-center md:w-fit rounded-lg text-sm bg-slate-800 hover:bg-slate-700 active:bg-slate-900 transition-colors'
			>
				Buscar
			</button>
		</div>
	);
}

Input.propTypes = {
	updateSearchFn: PropTypes.func,
	getRepoFn: PropTypes.func,
};

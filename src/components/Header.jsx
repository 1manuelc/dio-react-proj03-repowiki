import Input from './Input';

import PropTypes from 'prop-types';

export default function Header({ updateSearchFn, getRepoFn }) {
	return (
		<header className='p-4 pl-6 pr-6 flex flex-col md:flex-row gap-4 justify-around items-center bg-neutral-900'>
			<div className='left-zone flex items-center justify-center md:justify-start gap-5'>
				<img
					className='h-8'
					src='https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png'
					alt='GitHub Logo'
				/>

				<h1 className='text-xl font-bold text-gray-300'>RepoWiki</h1>
			</div>
			<div className='right-zone w-fit'>
				<Input updateSearchFn={updateSearchFn} getRepoFn={getRepoFn}></Input>
			</div>
		</header>
	);
}

Header.propTypes = {
	updateSearchFn: PropTypes.func,
	getRepoFn: PropTypes.func,
};

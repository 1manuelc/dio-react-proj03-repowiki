import Input from './Input';

import PropTypes from 'prop-types';

export default function Header({ updateSearchFn, getRepoFn }) {
	return (
		<header className='h-fit pt-6 pb-6 pl-12 pr-12 bg-neutral-900 flex flex-col md:flex-row gap-6 md:gap-0 justify-around items-center'>
			<div className='left-zone h-full flex items-center justify-center md:justify-start gap-5'>
				<img
					className='h-9'
					src='https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png'
					alt='GitHub Logo'
				/>

				<h1 className='text-xl font-bold text-gray-300'>RepoWiki</h1>
			</div>
			<div className='right-zone'>
				<Input updateSearchFn={updateSearchFn} getRepoFn={getRepoFn}></Input>
			</div>
		</header>
	);
}

Header.propTypes = {
	updateSearchFn: PropTypes.func,
	getRepoFn: PropTypes.func,
};

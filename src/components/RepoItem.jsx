import PropTypes from 'prop-types';

import { Trash } from '@phosphor-icons/react';

export default function RepoItem({ name, description, url, onRemove }) {
	return (
		<div className='p-4 pl-8 pr-8 bg-neutral-900 flex flex-col gap-2 rounded-xl'>
			<span className='flex items-center justify-between'>
				<a
					href={url}
					target='_blank'
					referrerPolicy='no-referrer'
					className='text-lg font-bold text-gray-400 hover:text-gray-100 transition-colors overflow-hidden text-ellipsis'
				>
					{name}
				</a>

				<Trash
					alt='Trash icon'
					onClick={() => onRemove()}
					className='cursor-pointer text-xl text-red-600 hover:text-red-400'
				></Trash>
			</span>
			{description ? limitTextByLength(description, 64) : <p>Sem descrição</p>}
		</div>
	);
}

const limitTextByLength = (text, len) => {
	return text.slice(0, len) + '...';
};

RepoItem.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	description: PropTypes.string,
	onRemove: PropTypes.func,
};

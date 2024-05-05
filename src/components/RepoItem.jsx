import PropTypes from 'prop-types';

export default function RepoItem({ name, description, url }) {
	return (
		<div className='p-4 pl-8 pr-8 bg-neutral-900 flex flex-col gap-2 rounded-xl'>
			<a
				href={url}
				target='_blank'
				referrerPolicy='no-referrer'
				className='text-lg font-bold text-gray-400'
			>
				{name}
			</a>
			{description ? <p>Description</p> : ''}
		</div>
	);
}

RepoItem.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	description: PropTypes.string,
};

import PropTypes from 'prop-types';

import RepoItem from './RepoItem';

export default function RepoList({ reposArray, onRemoveRepo }) {
	const handleItemsRender = () => {
		return reposArray?.length > 0 ? (
			reposArray.map((repo) => {
				return (
					<RepoItem
						{...repo}
						key={repo.name}
						onRemove={() => onRemoveRepo(repo)}
					></RepoItem>
				);
			})
		) : (
			<p>Nenhum repositório para mostrar</p>
		);
	};

	return (
		<div className='flex flex-col p-12 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-white'>
			{handleItemsRender()}
		</div>
	);
}

RepoList.propTypes = {
	reposArray: PropTypes.array,
	onRemoveRepo: PropTypes.func,
};

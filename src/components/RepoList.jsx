import PropTypes from 'prop-types';

import RepoItem from './RepoItem';

export default function RepoList() {
	return (
		<div className='flex flex-col p-12 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
			<RepoItem
				name='user/repo'
				description='fast description'
				url=''
			></RepoItem>
			<RepoItem
				name='user/repo'
				description='fast description'
				url=''
			></RepoItem>
			<RepoItem
				name='user/repo'
				description='fast description'
				url=''
			></RepoItem>
			<RepoItem
				name='user/repo'
				description='fast description'
				url=''
			></RepoItem>
		</div>
	);
}

RepoList.propTypes = {
	updateItemsFn: PropTypes.func,
};

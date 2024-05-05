import Header from '../components/Header';
import RepoList from '../components/RepoList';

import api from '../api/api';

import { useState } from 'react';

function App() {
	const [search, setSearch] = useState('');
	const [repos, setRepos] = useState([]);

	const handleRepoSearch = async () => {
		const response = await api.get(search);
		const data = response.data;
		const parsedData = {
			name: data.full_name,
			description: data.description,
			url: data.html_url,
		};

		setRepos((prev) => [...prev, parsedData]);
	};

	return (
		<>
			<div className='App h-dvh bg-neutral-950 text-white'>
				<Header
					updateSearchFn={setSearch}
					getRepoFn={handleRepoSearch}
				></Header>
				<main>
					<RepoList></RepoList>
				</main>
			</div>
		</>
	);
}

export default App;

import Header from '../components/Header';
import RepoList from '../components/RepoList';

import api from '../api/api';

import { useState } from 'react';

function App() {
	const [search, setSearch] = useState('');
	const [repos, setRepos] = useState([]);

	const handleRepoSearch = async () => {
		try {
			if (search === '')
				throw new Error('Por favor, digite um repositório válido.');

			const response = await api.get(search);

			const data = response.data;
			const parsedData = {
				name: data.full_name,
				description: data.description,
				url: data.html_url,
			};

			handleAddRepo(parsedData);
		} catch (error) {
			error.request?.status === 404
				? alert('Repositório não encontrado!')
				: alert(error.message);
		}
	};

	const handleAddRepo = (repo) => {
		let foundSameRepo = false;
		repos.forEach((arrRepo) => {
			if (arrRepo.name === repo.name) foundSameRepo = true;
		});

		if (!foundSameRepo) setRepos((prev) => [...prev, repo]);
		else alert('Repositório já existente');
	};

	const handleRemoveRepo = (repoToRemove) => {
		setRepos((prevRepos) =>
			prevRepos.filter((repo) => repo.name !== repoToRemove.name)
		);
	};

	return (
		<>
			<div className='App min-h-dvh bg-neutral-950 text-white'>
				<Header
					updateSearchFn={setSearch}
					getRepoFn={handleRepoSearch}
				></Header>
				<main className='relative'>
					<RepoList
						reposArray={repos}
						onRemoveRepo={handleRemoveRepo}
					></RepoList>
				</main>
			</div>
		</>
	);
}

export default App;

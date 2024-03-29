import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const fetchRepo = async () => {
  const response = await fetch(
    'https://api.github.com/users/lucignation/repos',
    {
      next: {
        revalidate: 60,
      },
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 1500));

  return await response.json();
};

const ReposPage = async () => {
  const repos = await fetchRepo();

  const renderRepos = repos.map((repo) => (
    <li key={repo.id}>
      <Link href={`/code/repos/${repo.name}`} key={repo.id}>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <div className='repo-details'>
          <span>
            <FaStar /> {repo.stargazers_count}
          </span>
          <span>
            <FaCodeBranch /> {repo.forks_count}
          </span>
          <span>
            <FaEye /> {repo.watchers_count}
          </span>
        </div>
      </Link>
    </li>
  ));

  return (
    <div className='repos-container'>
      <h2>Repositories</h2>
      <ul className='repo-list'>{renderRepos}</ul>
    </div>
  );
};

export default ReposPage;

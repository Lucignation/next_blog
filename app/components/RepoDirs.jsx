import Link from 'next/link';

const fetchRepoContent = async (name) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(
    `https://api.github.com/repos/Lucignation/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return await response.json();
};

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContent(name);
  const dirs = contents.filter((content) => content.type === 'dir');

  console.log('repo content ', contents);
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;

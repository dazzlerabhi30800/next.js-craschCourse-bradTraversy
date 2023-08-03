const fetchRepoByName = async (name) => {
  const response = await fetch(
    `https://api.github.com/repos/dazzlerabhi30800/${name}`
  );

  await new Promise((res) => setTimeout(res, 2000));

  const repo = await response.json();
  return repo;
};

const RepoPage = async ({ params: { name } }) => {
  const repo = await fetchRepoByName(name);
  return (
    <div className="card">
      <h1>{repo.name}</h1>
      <p style={{ margin: "5px 0" }}>{repo.full_name}</p>
    </div>
  );
};

export default RepoPage;

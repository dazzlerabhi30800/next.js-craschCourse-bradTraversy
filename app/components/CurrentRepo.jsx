import Image from "next/image";
const fetchRepo = async (name) => {
  const response = await fetch(
    `https://api.github.com/repos/dazzlerabhi30800/${name}`
  );
  const repo = await response.json();

  return repo;
};

const CurrentRepo = async ({ name }) => {
  const repo = await fetchRepo(name);
  console.log(repo);
  return (
    <div style={{ margin: "5px 0" }}>
      <h1>{repo.name}</h1>
      <p style={{ margin: "5px 0" }}>Repo name :- {repo.full_name}</p>
      <span style={{ display: "block", margin: "8px 0" }}>
        Full Name :- {repo.owner.login}
      </span>
      <Image
        unoptimized
        style={{ borderRadius: "10px", margin: "8px auto" }}
        src={repo.owner.avatar_url}
        width={70}
        height={70}
        alt={repo.name}
      />
    </div>
  );
};

export default CurrentRepo;

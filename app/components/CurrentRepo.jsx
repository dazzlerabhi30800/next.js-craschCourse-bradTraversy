import Image from "next/image";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
const fetchRepo = async (name) => {
  const response = await fetch(
    `https://api.github.com/repos/dazzlerabhi30800/${name}`
  );
  const repo = await response.json();

  return repo;
};

const CurrentRepo = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <div>
      <h1>{repo.name}</h1>
      <p style={{ margin: "5px 0" }}>Repo name :- {repo.full_name}</p>
      <span style={{ display: "block", margin: "8px 0" }}>
        Full Name :- {repo.owner.login}
      </span>
      <div className="details--container">
        <Image
          unoptimized
          style={{ borderRadius: "10px", margin: "8px 0" }}
          src={repo.owner.avatar_url}
          width={50}
          height={50}
          alt={repo.name}
        />
        <div className="details--list">
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
      </div>
    </div>
  );
};

export default CurrentRepo;

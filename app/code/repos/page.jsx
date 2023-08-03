import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    "https://api.github.com/users/dazzlerabhi30800/repos"
  );

  // wait 1 second
  const repos = await response.json();
  return repos;
};

const CodeRepo = async () => {
  const repos = await fetchRepos();
  return (
    <div className="repos--container">
      <h1>This is Code Repo Page</h1>
      <ul className="repos--links">
        {repos.map(
          ({
            id,
            name,
            description,
            stargazers_count,
            forks_count,
            watchers_count,
          }) => {
            return (
              <li className="card" key={id}>
                <Link className="code--link" href={`/code/repos/${name}`}>
                  <h2>{name}</h2>
                  <p>
                    {description ? description : "No Description Available"}
                  </p>
                  <div className="details--list">
                    <span>
                      <FaStar /> {stargazers_count}
                    </span>
                    <span>
                      <FaCodeBranch /> {forks_count}
                    </span>
                    <span>
                      <FaEye /> {watchers_count}
                    </span>
                  </div>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default CodeRepo;

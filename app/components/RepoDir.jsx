import Link from "next/link";

const fetchRepoContents = async (name) => {
  const contents = await fetch(
    `https://api.github.com/repos/dazzlerabhi30800/${name}/contents`,
    {
      next: { revalidate: 60 },
    }
  );

  const repoContents = await contents.json();
  return repoContents;
};
const RepoDir = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  //   const dirs = contents.filter((content) => content.type === "dir");
  console.log(contents);
  return (
    <div>
      <h2>Repo Content</h2>
      <ul
        style={{
          flexDirection: "column",
          alignItems: "start",
          margin: "8px 10px",
          listStyleType: "disc",
          fontSize: ".9rem",
          fontWeight: "500",
        }}
      >
        {contents.map((content, index) => (
          <li key={index}>
            <Link href={`/code/repos/${name}/${content.path}`}>
              {content.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDir;

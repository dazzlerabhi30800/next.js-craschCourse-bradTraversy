import Link from "next/link";
// import CurrentRepo from "app/components/CurrentRepo";
import CurrentRepo from "app/components/CurrentRepo";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card" style={{ color: "#000" }}>
      <Link href="/code/repos">Back To Repo</Link>
      <CurrentRepo name={name} />
      {/* <Header /> */}
    </div>
  );
};

export default RepoPage;

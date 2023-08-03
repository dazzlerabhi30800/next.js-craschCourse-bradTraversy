import CurrentRepo from "app/components/CurrentRepo";
import RepoDir from "app/components/RepoDir";
import Link from "next/link";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card" style={{ color: "#000" }}>
      <Link className="backBtn" href="/code/repos">
        Back To Repo
      </Link>
      <Suspense fallback={<div>Loading Repo...</div>}>
        <CurrentRepo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
        <RepoDir name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;

import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link className="logo" href="/">
          <h1 style={{ margin: "5px", width: "fit-content" }}>DA</h1>
        </Link>
        <ul className="links">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about/team">About Dazzler Abhi</Link>
          </li>

          <li>
            <Link href="/code/repos">Visit Our Code Repo</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

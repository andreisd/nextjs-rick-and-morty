import styles from "../components/Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/characters">
            <a>Characters</a>
          </Link>
        </li>
        <li>
          <Link href="/episodes">
            <a>Episodes</a>
          </Link>
        </li>
        <li>
          <Link href="/locations">
            <a>Locations</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

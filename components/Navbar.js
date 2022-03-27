import styles from "../components/Navbar.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Navbar() {

  const router = useRouter();

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
        },
      }}
      className={styles.menu}
    >
      <ul>
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={router.pathname == "/characters" ? "active" : ""}>
          <Link href="/characters">
            <a>Characters</a>
          </Link>
        </li>
        <li className={router.pathname == "/episodes" ? "active" : ""}>
          <Link href="/episodes">
            <a>Episodes</a>
          </Link>
        </li>
        <li className={router.pathname == "/locations" ? "active" : ""}>
          <Link href="/locations">
            <a>Locations</a>
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}

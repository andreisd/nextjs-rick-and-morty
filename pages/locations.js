import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const defaultEndpoint = "https://rickandmortyapi.com/api/location";

export async function getServerSideProps() {
  try {
    const res = await fetch(defaultEndpoint);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("Fetch error: ", error);
  }
}

export default function Locations({ data }) {
  const { info, results: defaultResults = [] } = data;
  const [results, updateResults] = useState(defaultResults);
  const [page, updatePage] = useState({
    ...info,
    current: defaultEndpoint,
  });

  const { current } = page;

  useEffect(() => {
    if (current === defaultEndpoint) return;

    async function request() {
      const res = await fetch(current);
      const nextData = await res.json();
      updatePage({
        current,
        ...nextData.info,
      });

      if (!nextData.info?.prev) {
        updateResults(nextData.results);
        return;
      }
      updateResults((prev) => {
        return [...prev, ...nextData.results];
      });
    }

    request();
  }, [current]);

  function handleLoadMore() {
    updatePage((prev) => {
      return {
        ...prev,
        current: page?.next,
      };
    });
  }

  function handleOnSubmitSearch(e) {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "query");
    const value = fieldQuery.value || "";
    const endpoint = `https://rickandmortyapi.com/api/location/?name=${value}`;

    updatePage({
      current: endpoint,
    });
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>Locations </h1>
          <p>List of all locations</p>
          <form className={styles.search} onSubmit={handleOnSubmitSearch}>
            <input name="query" type="search" />
            <button>Search</button>
          </form>
        </div>

        <ul className={styles.grid}>
          {results.map((result) => {
            const { id, name, type, dimension } = result;
            return (
              <motion.li
                key={id}
                className={styles.episode}
                whileHover={{
                  scale: [1, 1.08, 1.05],
                  position: "relative",
                  rotate: [0, 7, -7, 2],
                  transition: {
                    duration: 0.3,
                  },
                  filter: [
                    "hue-rotate(0) contrast(100%)",
                    "hue-rotate(360deg) contrast(200%)",
                    "hue-rotate(-45deg) contrast(300%)",
                    "hue-rotate(0deg) contrast(100%)",
                  ],
                  boxShadow: "0px 3px 0px 3px rgba(151, 206, 76, 1)",
                }}
              >
                <Link href="/episode/[id]" as={`/episode/${id}`}>
                  <a>
                    <h3>{name}</h3>
                    <p>{type}</p>
                    <p>{dimension}</p>
                  </a>
                </Link>
              </motion.li>
            );
          })}
        </ul>
        <div className="button">
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      </main>
    </div>
  );
}

import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import Portal from "../public/portal.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
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
        className={styles.hero}
      >
        <h1>Rick and Morty Wiki </h1>
        <p>Fun website showing info about Rick and Morty TV Show</p>
        <div className={styles.image}>
          <Image src={Portal} alt="Portal" />
        </div>
      </motion.div>
    </>
  );
}

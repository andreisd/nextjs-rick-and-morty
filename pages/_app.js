import Layout from "../components/Layout";
import "../styles/globals.scss";
import { motion, AnimatePresence } from "framer-motion";
export default function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            y: "20%",
            opacity: 0,
            scale: 0.95,
            transition: {
              type: "tween",
            },
            filter: [
              "hue-rotate(0) contrast(100%)",
              "hue-rotate(16deg) contrast(100%)",
              "hue-rotate(-16deg) contrast(200%)",
              "hue-rotate(0deg) contrast(100%)",
            ],
          },
          pageAnimate: {
            y: "0%",
            opacity: 1,
            scale: 1,
            transition: {
              type: "tween",
            },
            filter: [
              "hue-rotate(0) contrast(100%)",
              "hue-rotate(16deg) contrast(100%)",
              "hue-rotate(-16deg) contrast(200%)",
              "hue-rotate(0deg) contrast(100%)",
            ],
          },
          pageExit: {
            y: "20%",
            opacity: 0,
            scale: 0.95,
            transition: {
              type: "tween",
            },
            filter: [
              "hue-rotate(0) contrast(100%)",
              "hue-rotate(16deg) contrast(100%)",
              "hue-rotate(-16deg) contrast(200%)",
              "hue-rotate(0deg) contrast(100%)",
            ],
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}

import Layout from "../components/layout";
import "../styles/globals.scss";
import { motion, AnimatePresence } from "framer-motion";
export default function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial='pageInitial'
        animate='pageAnimate'
        exit='pageExit'
        variants={{
          pageInitial: {
            opacity: 0,
            scale: 0,
          },
          pageAnimate: {
            opacity: 1,
            scale: 1,
          },
          pageExit: {
            filter: 'invert()',
            opacity: 0,
            scale: 0,
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

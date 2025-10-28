import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from './components/Header'
import Footer from './components/Footer'
import Top from './pages/Top'
import About from './pages/About'
import Work from './pages/Work'

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Top /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/work" element={<Page><Work /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import KvSection from '../components/top/KvSection'
import WorkSection from '../components/top/WorkSection'
import AboutSection from '../components/top/AboutSection'
import ContactSection from '../components/top/ContactSection'

const Top = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <main className='siteContent topPage'>
      <KvSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}

export default Top;
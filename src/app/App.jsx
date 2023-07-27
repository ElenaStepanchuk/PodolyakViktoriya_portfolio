import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  // BackgroundContainer,
  Header,
  Loader,
  // Footer,
  // News,
} from '../components';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
const Portfolio = lazy(() => import('../pages/portfolio/Portfolio'));
const Contact = lazy(() => import('../pages/contact/Contact'));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Suspense>
      {/* <News /> */}
      {/* <Footer /> */}
    </div>
  );
};

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
const Works1 = lazy(() => import('../pages/works1/Works1'));
const Works2 = lazy(() => import('../pages/works2/Works2'));
const Works3 = lazy(() => import('../pages/works3/Works3'));
const MyPictures = lazy(() => import('../pages/myPictures/MyPictures'));
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
          <Route path="portfolio" element={<Portfolio />}>
            <Route path="works1" element={<Works1 />} />
            <Route path="works2" element={<Works2 />} />
            <Route path="works3" element={<Works3 />} />
            <Route path="myPictures" element={<MyPictures />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Suspense>
      {/* <News /> */}
      {/* <Footer /> */}
    </div>
  );
};

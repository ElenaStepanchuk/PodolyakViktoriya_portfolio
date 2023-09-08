// import { ImageViewer } from 'react-image-viewer-dv';
import { Link, Outlet } from 'react-router-dom';

import css from './portfolioComponent.module.css';
import work1 from '../../img/portfolio/firstWork/houseWidthMoreFlors.png';
import work2 from '../../img/portfolio/secondWork/1ORBKportfolio.png';
import work3 from '../../img/portfolio/thirdWork/1title.png';
import myPictures from '../../img/portfolio/myPicture/1.JPG';
// import work5 from '../../img/portfolio/34.JPG';
// import work6 from '../../img/portfolio/35.JPG';
// import work7 from '../../img/portfolio/36.JPG';
// import work8 from '../../img/portfolio/37.JPG';
// import work9 from '../../img/portfolio/38.JPG';
// import work10 from '../../img/portfolio/39.JPEG';

const arrayGalleryWorks = [
  { preview: work1, original: work1, description: 'work 1', to: 'works1' },
  { preview: work2, original: work2, description: 'work 2', to: 'works2' },
  { preview: work3, original: work3, description: 'work 3', to: 'works3' },
  {
    preview: myPictures,
    original: myPictures,
    description: 'myPictures',
    to: 'myPictures',
  },
  // { preview: work5, original: work5, description: 'work 5' },
  // { preview: work6, original: work6, description: 'work 6' },
  // { preview: work7, original: work7, description: 'work 7' },
  // { preview: work8, original: work8, description: 'work 8' },
  // { preview: work9, original: work9, description: 'work 9' },
  // { preview: work10, original: work10, description: 'work 10' },
];

const CreateGallery = () => {
  return arrayGalleryWorks.map(
    ({ preview, original, description, to }, index) => {
      return (
        <div className={css.gallery__item} key={index}>
          <Link className={css.nav_link} to={to}>
            <img
              className={css.gallery__image}
              src={preview}
              data-source={original}
              data-index={index}
              alt={description}
            />
          </Link>
        </div>
      );
    }
  );
};

const PortfolioComponent = () => {
  return (
    <div className={css.container_portfolio}>
      <h1 className={css.title_portfolio}>Portfolio</h1>
      <div className={css.gallery_portfolio}>
        <div className={css.gallery}>
          <CreateGallery />
        </div>
        <Outlet />;
      </div>
    </div>
  );
};

export default PortfolioComponent;

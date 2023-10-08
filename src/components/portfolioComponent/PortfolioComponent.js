import { Link, Outlet } from 'react-router-dom';

import css from './portfolioComponent.module.css';
import work1 from '../../img/portfolio/firstWork/houseWidthMoreFlors.png';
import work2 from '../../img/portfolio/secondWork/1ORBKportfolio.png';
import work3 from '../../img/portfolio/thirdWork/1title.png';
import myPictures from '../../img/portfolio/myPicture/1.JPG';

import SelectLenguage from 'components/selectLenguage';

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
      <SelectLenguage top={'10px'} right={'0'} />
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

import css from './portfolioComponent.module.css';
import testPhoto from '../../img/about/sambuca.jpg';

const PortfolioComponent = () => {
  const arrayGalleryPhotos = [
    testPhoto,
    testPhoto,
    testPhoto,
    testPhoto,
    testPhoto,
    testPhoto,
    testPhoto,
    testPhoto,
  ];

  return (
    <div className={css.container_portfolio}>
      <h1 className={css.title_portfolio}>Portfolio</h1>
      <div className={css.gallery_portfolio}>
        <ul className={css.gallery_list}>
          {arrayGalleryPhotos.map(item => {
            return (
              <li className={css.gallery_item} key={item}>
                <img src={item} alt={item} />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default PortfolioComponent;

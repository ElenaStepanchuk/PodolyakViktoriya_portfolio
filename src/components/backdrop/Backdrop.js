import css from './backdrop.module.css';

const Backdrop = ({ children }) => {
  return <div className={css.backdrop}>{children}</div>;
};
export default Backdrop;

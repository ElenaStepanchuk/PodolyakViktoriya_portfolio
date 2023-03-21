import { Outlet } from 'react-router-dom';
import { Navigation } from 'components';

// import headerBg from '../../img/bg/headerBg.jpg';

const HeaderWrapper = ({ children }) => {
  return <div>{children}</div>;
};

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <Navigation />
      </HeaderWrapper>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Header;

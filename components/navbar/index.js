import PropTypes from 'prop-types';
import Link from 'next/link';
import HamburgerMenu from 'react-hamburger-menu';

import Wrapper from '@components/navbar/Navbar.style';
import Cart from '../../public/cart.svg';

const Navbar = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen(!open);
  };

  const navStyles = {
    zIndex: '2',
  };

  return (
    <Wrapper>
      <div style={navStyles}>
        <HamburgerMenu
          isOpen={open}
          menuClicked={() => handleClick()}
          width={33}
          height={22}
          strokeWidth={2}
          rotate={0}
          color='black'
          borderRadius={0}
        />
      </div>
      <h1>
        <Link href='/'>
          <a>REPAIREL</a>
        </Link>
      </h1>
      <Link href='/checkout'>
        <a
          style={navStyles}
          className='header__summary snipcart-checkout snipcart-summary'
        >
          <img src={Cart} style={{ display: 'block' }}></img>
        </a>
      </Link>
    </Wrapper>
  );
};
Navbar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
export default Navbar;

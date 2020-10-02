import Link from 'next/link';
import PropTypes from 'prop-types';
import Logo from '../../public/repairel-logo.svg';

import { Wrapper, MenuList, MenuListItem, MenuLogo } from './Menu.style';
import Socials from '@components/socials';

const Menu = ({ open, setOpen }) => {
  const handleLinkClick = () => {
    setOpen(!open);
  };

  const menu = ['shop', 'about', 'faq'];
  const menuItems = menu.map((item, index) => {
    return (
      <MenuListItem key={index}>
        <Link key={index} href={item === 'shop' ? '/' : `/${item}`}>
          <a onClick={() => handleLinkClick()}>{item}</a>
        </Link>
      </MenuListItem>
    );
  });

  return (
    <Wrapper open={open}>
      <MenuLogo src={Logo}></MenuLogo>
      <MenuList>{menuItems}</MenuList>
      <Socials></Socials>
    </Wrapper>
  );
};

Menu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
export default Menu;

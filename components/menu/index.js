import Link from 'next/link';

import { Wrapper } from './Menu.style';

const Menu = () => {
  const handleLinkClick = () => {
    // close menu
  };

  const menu = ['about', 'shop', 'faq'];
  const menuItems = menu.map((item, index) => {
    return (
      <Link key={index} onClick={handleLinkClick()} href={`/${item}`}>
        <a>{item}</a>
      </Link>
    );
  });

  return <Wrapper>{menuItems}</Wrapper>;
};
export default Menu;

import Link from "next/link";

import Logo from "../../public/repairel-logo.svg";

import { Wrapper, MenuList, MenuListItem, MenuLogo } from "./Menu.style";
import Socials from '@components/socials'

const Menu = () => {
  const handleLinkClick = () => {
    // close menu
  };

  const menu = ["shop", "about", "faq"];
  const menuItems = menu.map((item, index) => {
    return (
      <MenuListItem key={index}>
        <Link key={index} onClick={handleLinkClick()} href={`/${item}`}>
          <a>{item}</a>
        </Link>
      </MenuListItem>
    );
  });

  return (
    <Wrapper>
      <MenuLogo src={Logo}></MenuLogo>
      <MenuList>{menuItems}</MenuList>
      <Socials></Socials>
    </Wrapper>
  );
};
export default Menu;

import React from "react";
import Wrapper from "@components/navbar/Navbar.style";
import HamburgerMenu from "react-hamburger-menu";
import Link from "next/link";
import Cart from '../../public/cart.svg'

const Navbar = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen(!open);
  };

  const navStyles = {
    zIndex: "100",
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
          color="black"
          borderRadius={0}
        />
      </div>
      <h1>
        <Link href="/">
          <a>REPAIREL</a>
        </Link>
      </h1>
      <Link href='/checkout'>
          <a style={navStyles}>
            <img src={Cart} style={{display: "block"}}></img>
          </a>
        </Link>
    </Wrapper>
  );
};

export default Navbar;

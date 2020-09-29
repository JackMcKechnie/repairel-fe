import React from "react";
import Wrapper from "@components/navbar/Navbar.style";
import HamburgerMenu from "react-hamburger-menu";
import Link from "next/link";

const Navbar = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <div>
        <HamburgerMenu
          isOpen={open}
          menuClicked={() => handleClick()}
          width={30}
          height={20}
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
      <p>
        <Link href="/checkout">cart</Link>
      </p>
    </Wrapper>
  );
};

export default Navbar;

import React from 'react';
import Wrapper from '@components/navbar/Navbar.style';
import HamburgerMenu from 'react-hamburger-menu';
// import Menu from '@components/menu';

const Navbar = () => {
  // const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    // setOpen(!true);
  };
  return (
    <Wrapper>
      <div>
        <HamburgerMenu
          isOpen={!open}
          menuClicked={handleClick()}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color='black'
          borderRadius={0}
        />
      </div>
      <h1>REPAIREL</h1>
      <p>cart</p>
    </Wrapper>
  );
};

export default Navbar;

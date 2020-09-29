import Navbar from "@components/navbar";
import Menu from "@components/menu";


const Header = () => {
    const [open, setOpen] = React.useState(false);
  return (
        <header>
          <Menu open={open} setOpen={setOpen} />
          <Navbar open={open} setOpen={setOpen} />
        </header>
  );
};
export default Header;
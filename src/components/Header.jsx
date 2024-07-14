
import { NAV_ITEMS } from "../utils/constants";
import HorizontalNavBar from "../design/components/HorizontalNavBar";

const Header = () => {
  return (
    <HorizontalNavBar navItems={NAV_ITEMS} />
  );
};
export default Header;

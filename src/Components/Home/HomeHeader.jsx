import NavBar from "./HomeNavbar";
import MobileNavBar from "./HomeMobile";

function Header(props) {
  return (
    <div className={`Header h-1/10 bg-coolblue-100 ${props.className}`}>
      <h1 className="w-2/6 text-4xl font-nue font-stretch-expanded pl-8">SG</h1>
      <NavBar Style="hidden w-4/6 md:block" NavStyle="normalNav" />
      <MobileNavBar />
    </div>
  );
}

export default Header;

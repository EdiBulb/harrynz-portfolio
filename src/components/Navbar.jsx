import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link to="/">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/education">Education</Link>
      <Link to="/certificate">Certificate</Link>
      <Link to="/extra">Extra Activity</Link>
    </nav>
  );
};

export default Navbar;

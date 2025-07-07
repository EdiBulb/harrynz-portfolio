
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <ul className="flex justify-center space-x-6 py-4 text-gray-800 dark:text-white">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#education" className="hover:text-blue-500">Education</a></li>
        <li><a href="#certificate" className="hover:text-blue-500">Certificate</a></li>
        <li><a href="#extra" className="hover:text-blue-500">Extra</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

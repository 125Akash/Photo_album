// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 h-16 body-font border-b-4">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0"
            href="/"
          >
            <img
              className=" h-14"
              src="https://freepngimg.com/thumb/graphic_design/55592-3-gallery-free-hq-image.png"
              alt="Logo"
            />
            <span className="ml-3 text-xl">Photo-Album-Master</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

import { NavLink, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 transition-all duration-300 ${
      isActive
        ? 'text-primary font-semibold'
        : 'dark:text-gray-300 text-gray-700 hover:text-primary'
    }`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={linkClass}>
          {({ isActive }) => (
            <>
              Home
              {isActive && (
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-primary w-4/5 -translate-x-1/2 rounded-full animate-underline"></span>
              )}
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={linkClass}>
          {({ isActive }) => (
            <>
              About
              {isActive && (
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-primary w-4/5 -translate-x-1/2 rounded-full animate-underline"></span>
              )}
            </>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact" className={linkClass}>
          {({ isActive }) => (
            <>
              Contact
              {isActive && (
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-primary w-4/5 -translate-x-1/2 rounded-full animate-underline"></span>
              )}
            </>
          )}
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#001219] shadow-sm py-4 px-4 md:px-8 lg:px-12">
      <div className="flex justify-between items-center  mx-auto">
        {/* Logo and mobile menu */}
        <div className="flex items-center ">
          {/* Mobile hamburger menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <GiHamburgerMenu
                size={24}
                className="dark:text-white text-gray-800"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-[#2F2F2F] rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="text-xl font-bold flex items-center"
          >
            <span className="text-primary font-serif">MAHIR</span>
            <span className="dark:text-white text-gray-800">DAVES</span>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-6">{links}</ul>
        </div>

        {/* Profile section */}
        <div className="flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1_qB-e9yzSxsU19fGSKwQPQ8grVh6G_6s/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-outline btn-primary btn-sm text-gray-300">
              Resume
            </button>
          </a>

          <div className="avatar">
            <div className="w-10 rounded-full border-2 border-primary">
              <img
                src="https://i.ibb.co/Zz0Qx0Hy/Simple-Profile.png"
                alt="Profile"
                className="dark:brightness-90"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

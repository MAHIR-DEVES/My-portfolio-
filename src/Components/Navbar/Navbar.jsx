import { NavLink, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToSection = id => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToTop = id => {
    window.top.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = (
    <>
      <li>
        <button
          onClick={() => scrollToTop()}
          className="relative px-3 py-2 transition-all duration-300 text-white hover:text-primary"
        >
          Home
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection('about')}
          className="relative px-3 py-2 transition-all duration-300 text-white hover:text-primary"
        >
          About
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection('skill')}
          className="relative px-3 py-2 transition-all duration-300 text-white hover:text-primary"
        >
          Skill
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection('project')}
          className="relative px-3 py-2 transition-all duration-300 text-white hover:text-primary"
        >
          Project
        </button>
      </li>

      <li>
        <button
          onClick={() => scrollToSection('contact')}
          className="relative px-3 py-2 transition-all duration-300 text-white hover:text-primary"
        >
          Contact
        </button>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50  bg-[#001219] shadow-sm py-4  px-4 sm:px-0">
      <div className="flex justify-between items-center max-w-7xl  mx-auto">
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
            href="https://drive.google.com/file/d/1J2OIGHJ7k2ArwEs-80LrIFyDDlmTlmTM/view?usp=drive_link"
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

import { Link } from "react-scroll";

const Header = () => {
  const apiKey = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  console.log("data of env file pleas chak it ",apiKey)
  return (
    <>
      <nav className="flex flex-col overflow-x-hidden sm:flex-row md:justify-between items-center px-4 sm:px-10 py-4 w-full gap-4 smgap-0">
        {/* LinkedIn Badge */}
        <a className="text-green-500" href="public\MERN resume.pdf" download="Muzammil_Resume.pdf">
  <button>Download Resume</button>
</a>

        <div className="px-4 py-2 bg-green-500 rounded-full text-white text-sm drop-shadow-[0px_1px_3px_green]">
          <a href="https://www.linkedin.com/in/muzammil1244" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

        {/* Email */}
        <a
          className="text-blue-200 cursor-pointer text-sm border-b border-blue-300 hover:text-white transition text-center"
          href="mailto:muzammil84464@gmail.com"
        >
          <i className="fas fa-envelope mr-1"></i> muzammil84464@gmail.com
        </a>

        {/* Menu Links */}
        <ul className="w-full md:w-1/2 flex flex-wrap justify-center gap-2 md:gap-0 md:justify-around items-center text-green-400 bg-gray-900 rounded-full text-sm drop-shadow-[0px_1px_3px_green] px-4 py-2">
          <li className="px-2">
            <Link to="Projects" smooth={true} duration={700}>
              Project
            </Link>
          </li>
          <li className="px-2">
            <Link to="Skills" smooth={true} duration={700}>
              Skill
            </Link>
          </li>
          <li className="px-2">
            <Link to="Certification" smooth={true} duration={700}>
              Certification
            </Link>
          </li>
          <li className="px-2">
            <Link to="Blog" smooth={true} duration={700}>
              Blog
            </Link>
          </li>
          <li className="px-2">
            <Link to="Contect" smooth={true} duration={700}>
              Contect
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

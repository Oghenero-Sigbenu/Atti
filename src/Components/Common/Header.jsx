import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../img/atti.png";
import { navLinks } from "../../helpers/data";
import MobileNavbar from "./MobileNavbar";
// import { LogoutIcon } from "@heroicons/react/outline";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setHover] = useState(false);
  const [scroll, setScroll] = useState(false);

  const pageLink = window.location.pathname;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 200)
      );
    }
  }, []);
  return (
    <header
      className={`sticky uppercase top-0 z-[20] bg-white  shadow-sm  text-primary  ${
        scroll && "shadow"
      }`}
    >
      <div className="flex justify-between bg-white items-center py-8 max-w-[90%] lg:max-w-[85%] mx-auto text-sm text-black">
        <div className="flex flex-row gap-10 items-center w-full">
          <Link to="/" className="flex ">
            <div>
              <img src={Logo} alt="logo" className="w-[50px]" />
            </div>
            <p className="text-[.6rem] leading-3 ml-4 font-extrabold text-blue  w-[250px]">
              Atti Naomi's <br></br>
              Foundation<br></br>
              <span className="text-primary font-light">
                Save lives, sing the word.
              </span>
            </p>
          </Link>

          <nav className="hidden lg:block w-[90%]  ">
            <ul className="flex gap-6 justify-end items-center w-full">
              {navLinks?.map(({ path, title, sub }, i) => (
                <li className="" key={i}>
                  <Link
                    to={path}
                    // onMouseEnter={() => setHover(true)}
                    // onMouseLeave={() => setHover(false)}
                  >
                    <span
                      className={`${
                        pageLink === path && "text-primary  font-semibold"
                      } flex gap-1  relative ${
                        sub && "dropdown dropdown-hover"
                      }`}
                      h
                      onMouseEnter={() => setHover(sub && true)}
                      onMouseLeave={() => setHover(sub && false)}
                    >
                      <label
                        tabIndex="0"
                        className={`${
                          pageLink === path &&
                          "text-primary font-extrabold border-b-4 border-[#56bff4] pb-2"
                        } cursor-pointer hover:text-primary  text-primary text-[1rem] font-medium`}
                      >
                        {title}
                      </label>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* mobile menu start */}
        <MenuAlt3Icon
          className="lg:hidden w-8 text-primary cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
        {menuOpen && (
          <div
            className="fixed left-0 right-0 bottom-0 h-screen w-full lg:hidden bg-[#0000003d] z-[99999]"
            onClick={() => setMenuOpen(false)}
          >
            <AnimatePresence>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                className="fixed top-0 left-0 bg-[#f9f9f9] h-screen overflow-y-scroll"
                onClick={(e) => e.stopPropagation()}
              >
                <MobileNavbar setMenuOpen={setMenuOpen} pageLink={pageLink} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
        {/* mobile menu end */}
      </div>
    </header>
  );
}

export default Header;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { XIcon } from "@heroicons/react/outline";
import { navLinks } from "../../helpers/data";

const MobileNavBar = ({ pageLink, setMenuOpen }) => {
  const [, setPageReady] = useState(false);

  useEffect(() => {
    setPageReady(true);
  }, []);
  // const handleLogout = () => {
  //   localStorage.clear();
  //   window.location.reload(false);
  // };

  return (
    <aside className="flex flex-col gap-6 py-8 px-6  h-full">
      <div className="px-2 flex justify-between items-center  mt-2 mb-4">
        <Link to="/">
          {/* <img
            src={Logo}
            alt="logo"
            className="w-[30px] mr-8"
            onClick={() => setMenuOpen(false)}
          /> */}
        </Link>
        <XIcon
          className="w-5 text-red-500 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
      </div>

      <nav>
        <ul className="flex flex-col gap-4">
          {navLinks?.map(({ path, title, sub }, i) =>
            sub ? (
              <details key={i}>
                <summary
                  className="flex  items-center cursor-pointer"
                  key={title}
                >
                  <h2 className=" font-normal capitalize">{title}</h2>
                  {/* <ChevronDownIcon className="w-3 " /> */}
                </summary>
              </details>
            ) : (
              <Link
                to={path}
                key={i}
                className={`${
                  pageLink === path && "text-primary font-semibold"
                } text-black hover:text-accent capitalize`}
                onClick={() => setMenuOpen(false)}
              >
                {title}
              </Link>
            )
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default MobileNavBar;

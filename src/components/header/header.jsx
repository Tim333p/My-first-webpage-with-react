import { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(false);
  const [navStyle, setNavStyle] = useState({});

  const openClose = () => {
    setTransition(true);
    setOpen((o) => !o);
  };

  useEffect(() => {
    if (transition) {
      if (open) {
        setNavStyle({
          transform: "translateX(0%)",
          opacity: 1,
        });
      } else {
        setNavStyle({
          transform: "translateX(-100%)",
          opacity: 0,
        });
      }
      const timeOut = setTimeout(() => setTransition(false), 300);
      return () => clearTimeout(timeOut);
    }
  }, [open, transition]);

  const sideTitles = [
    "Home",
    "Subbed Anime",
    "Dubbed Anime",
    "Most Popular",
    "Movies",
    "TV Series",
    "OVAs",
    "ONAs",
    "Specials",
    "Events",
    "HiAnime App",
  ];

  return (
    <div className="bg-primary h-20">
      <div className="grid grid-cols-6 gap-1">
        <div
          onClick={openClose}
          className="hamburger flex flex-col items-center justify-center w-16 mt-2"
        >
          <div className="w-8 h-1 bg-white rounded-lg mb-1.5"></div>
          <div className="w-8 h-1 bg-white rounded-lg mb-1.5"></div>
          <div className="w-8 h-1 bg-white rounded-lg"></div>
        </div>
        <nav
          style={{
            ...navStyle,
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: open ? "translateX(0%)" : "translateX(-100%)",
            opacity: open ? 1 : 0,
          }}
          className="nav-bar z-20 fixed left-0 top-0 bottom-0 w-1/6 bg-gray-700 bg-opacity-95"
        >
          <ul className="h-full flex flex-col">
            <div className="flex">
              <div
                onClick={openClose}
                className="arrow w-8 h-8 mt-9 -mb-11 ml-5 flex flex-col items-center justify-center"
              >
                <div className="bg-white h-1 w-3 rounded-md -rotate-45"></div>
                <div className="bg-white h-1 w-3 rounded-md rotate-45 mt-0.5 "></div>
              </div>
              <div>
                <h3 className="mt-9 -mb-10 font-bold text-white text-lg">
                  Close menu
                </h3>
              </div>
            </div>
            <button className="border-solid bg-gray-600 rounded-3xl h-12 px-24 text-xl  mt-20">
              Community
            </button>
            {sideTitles.map((title, index) => (
              <li
                key={index}
                className="border-solid border-gray-500 border-b-2 pb-3 mt-6"
              >
                <a className="text-white text-2xl pl-3" href="/">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center h-20 -ml-60 w-48">
          <img
            className="w-52 h-12"
            src="https://hianime.to/images/logo.png?v=0.1"
          />
        </div>
        <div className="-ml-80">
          <input
            placeholder="Search anime"
            className="mt-6 border-2 h-10 w-96 border-green-700"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

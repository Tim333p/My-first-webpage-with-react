import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import Buttons from "../../utilities/buttons";

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

  const genre = [
    "Action",
    "Cars",
    "Dementia",
    "Drama",
    "Fantasy",
    "Adventure",
    "Comedy",
    "Demons",
    "Ecchi",
    "Game",
  ];

  const genreColors = {
    Action: "text-green-200",
    Cars: "text-orange-400",
    Dementia: "text-blue-500",
    Drama: "text-green-500",
    Fantasy: "text-yellow-500",
    Adventure: "text-pink",
    Comedy: "text-purple-500",
    Demons: "text-indigo-500",
    Ecchi: "text-teal-500",
    Game: "text-orange-500",
  };

  return (
    <header className="bg-primary h-20 bg-opacity-95 right-0 left-0 fixed z-30">
      <div className="grid grid-cols-5 gap-1">
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
          <ul className="scroll-bar h-full flex flex-col overflow-auto">
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
            <button className="border-solid bg-gray-600 rounded-3xl px-24 py-3 text-xl  mt-20">
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
            <div>
              <h4 className="text-white text-2xl pl-3 mt-6 mb-5">Genre</h4>
              <ul className="pl-3 grid grid-cols-2 gap-y-3">
                {genre.map((type, index) => (
                  <li
                    key={index}
                    className={`text-xl mt-2 ${genreColors[type]}`}
                  >
                    <a href="/">{type}</a>
                  </li>
                ))}
              </ul>
            </div>
          </ul>
        </nav>
        <div className="flex items-center h-20 -ml-80 w-48">
          <img
            className="w-52 h-12 cursor-pointer"
            src="https://hianime.to/images/logo.png?v=0.1"
            href="/"
          />
        </div>
        <div className="absolute left-72 col-span-2 ">
          <input
            placeholder="Search anime"
            className="mt-5 border-2 h-12 w-96 border-black"
            type="text"
          />
          <button className="absolute text-white border-solid bg-black top-7 right-3 py-1 px-2 rounded-md z-10">
            Filter
          </button>
        </div>
        <div className="flex items-center -ml-20">
          <SocialIcon
            url="https://discord.com/"
            className="mr-3"
            style={{ height: 40, width: 40 }}
            target="_blank"
            fgColor=""
          />
          <SocialIcon
            url="https://instagram.com"
            className="mr-3"
            style={{ height: 40, width: 40 }}
            target="_blank"
            fgColor=""
          />
          <SocialIcon
            url="https://www.reddit.com/"
            className="mr-3"
            style={{ height: 40, width: 40 }}
            target="_blank"
            fgColor=""
          />
          <SocialIcon
            url="https://twitter"
            className="mr-3"
            style={{ height: 40, width: 40 }}
            target="_blank"
            fgColor=""
          />
        </div>
        <div className="flex items-center justify-end -mr-80">
          <Buttons name="Login" />
        </div>
      </div>
    </header>
  );
};

export default Header;

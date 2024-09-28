import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import Buttons from "../../utilities/buttons";
import t from "../../data/types";

const colors = [
  "text-red-100",
  "text-blue-300",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
  "text-orange-400",
  "text-pink-200",
  "text-teal-500",
  "text-indigo-500",
  "text-gray-500",
  "text-lime-300",
  "text-amber-500",
  "text-rose-400",
  "text-cyan-500",
  "text-emerald-200",
  "text-violet-500",
  "text-fuchsia-500",
  "text-sky-400",
  "text-stone-300",
  "text-red-500",
  "text-yellow-100",
  "text-green-300",
  "text-blue-500",
  "text-purple-500",
  "text-orange-500",
  "text-pink-500",
];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(false);
  const [navStyle, setNavStyle] = useState({});

  const [close, setClose] = useState(false);

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
    <header className="bg-primary h-20 bg-opacity-95 right-0 left-0 fixed z-30 font-sans">
      <div className="grid grid-cols-5 gap-1">
        <div
          onClick={openClose}
          className="hamburger flex flex-col items-center justify-center w-16 mt-2 cursor-pointer"
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
          className="nav-bar z-40 fixed left-0 top-0 bottom-0 w-1/6 bg-gray-700 bg-opacity-80 backdrop-blur-md"
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
            <button className="border-solid bg-gray-600 rounded-3xl w-72 py-3 text-xl ml-3 mt-20">
              Community
            </button>
            {sideTitles.map((title, index) => (
              <li
                key={index}
                className="border-solid border-gray-500 border-b-2 pb-3 mt-6"
              >
                <a
                  className="text-white text-2xl pl-3 hover:text-pink"
                  href="/"
                >
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
                {!close && (
                  <div
                    onClick={() => setClose(true)}
                    className="cursor-pointer text-white text-lg font-normal"
                  >
                    <span className="font-semibold text-2xl mr-1">+</span>
                    More
                  </div>
                )}

                {close && (
                  <div className="grid grid-cols-2 gap-x-40 gap-y-5 text-nowrap mt-3 text-xl mb-3">
                    {t[0].name.map((item, index) => (
                      <div
                        key={`item ${index}`}
                        className={`cursor-pointer ${randomColor()}`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </ul>
            </div>
          </ul>
        </nav>

        {open && (
          <div
            onClick={openClose}
            className="fixed inset-0 bg-primary backdrop-blur-lg bg-opacity-85 z-30"
          ></div>
        )}

        <div className="flex items-center h-20 -ml-80 w-48">
          <img
            className="w-52 h-12 cursor-pointer"
            src="https://hianime.to/images/logo.png?v=0.1"
            href="/"
          />
        </div>
        <div className="absolute left-[18.5rem] col-span-2 ">
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

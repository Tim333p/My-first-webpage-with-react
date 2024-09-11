import { useState } from "react";


const ToolTip = ({ children, item }) => {
  const [tooltipStyle, setTooltipStyle] = useState({
    opacity: 0,
    left: 0,
    top: 0,
    transition: "opacity 0.3s ease-in-out",
    visible: "hidden",
    pointerEvents: "none"
  });

  const [activeItem, setActiveItem] = useState(null);

  const openToolTipHandler = (event, item) => {
    const tooltipX = event.clientX + 30; 
    const tooltipY = event.clientY - 130;

    setTooltipStyle( (prevStyle)  => ({
      ...prevStyle,
      left: `${tooltipX}px`,
      top: `${tooltipY}px`,
      opacity: 1,
      visible: "visible",
      pointerEvents: "auto"
    }));

    setActiveItem(item); 

  };

  const closeToolTipHandler = () => {
    setTooltipStyle((prevStyle) => ({
      ...prevStyle,
      opacity: 0,
      visible: "hidden",
      pointerEvents: "none"
    }));
  };

  return (
    <div
      className="relative"
      onMouseEnter={(e) => openToolTipHandler(e, item)}
      onMouseLeave={closeToolTipHandler}
    >
      {children}

      {activeItem && (
        <div
          key={`tooltip-${activeItem.name}`}
          style={tooltipStyle}
          className={`fixed w-96 h-[28rem] m-3 z-50 p-4 space-y-2 rounded-xl shadow-xl`}
        >
          <div className="absolute inset-0 bg-gray-600/50 blur-lg backdrop-brightness-75 rounded-xl"></div>

          <div className="relative">
            <div className="w-full h-20">
              <h1 className="text-white font-medium text-xl">{activeItem.name}</h1>
              <div className="flex items-center mt-5">
                <div className="inline-block">⭐</div>
                <h1 className="text-gray-300 inline-block mr-3">{activeItem.rating}</h1>
                <div className="inline-block ml-0.5 bg-pink px-2 py-0.5 rounded-l-md">
                  <span>{activeItem.resolution}</span>
                </div>
                <div className="flex items-center ml-0.5 bg-green-400">
                  <img
                    className="w-5 inline-block ml-1.5 my-1"
                    src="https://cdn-icons-png.flaticon.com/512/1620/1620709.png"
                    alt=""
                  />
                  <span className="ml-0.5 pr-2 text-sm font-medium">{activeItem.title}</span>
                </div>
                <div className="flex items-center ml-0.5 bg-blue-300 rounded-r-md">
                  <img
                    className="w-5 inline-block ml-1 my-1"
                    src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png"
                    alt=""
                  />
                  <span className="text-sm pr-2 font-medium">{activeItem.dub}</span>
                </div>
                <div className="flex items-center w-auto h-auto bg-pink ml-16 rounded-md">
                  <span className="font-medium text-base px-1">{activeItem.type}</span>
                </div>
              </div>
            </div>

            <div className="w-full h-48 mt-16">
              <p className="font-light text-gray-300 text-sm ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus distinctio illo sapiente. Quia maxime aspernatur fuga tempora vero et beatae...
              </p>
              <ul className="mt-3">
                <li className="text-gray-300 text-sm">
                  Japanese: <span className="text-white text-sm ml-1">Anime</span>
                </li>
                <li className="text-gray-300 text-sm">
                  Synonyms: <span className="text-white text-sm ml-1">OP</span>
                </li>
                <li className="text-gray-300 text-sm">
                  Aired: <span className="text-white text-sm ml-1">Oct 20, 1999</span>
                </li>
                <li className="text-gray-300 text-sm">
                  Status: <span className="text-white text-sm ml-1">Currently Airing</span>
                </li>
                <li className="text-gray-300 text-sm">
                  Genres: <span className="text-white text-sm ml-1">Action, Adventure, Comedy, Drama, Fantasy, Shounen, Super Power</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-row items-center justify-center mt-2">
              <button className="flex bg-pink w-72 h-12 items-center justify-center rounded-3xl">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-black border-b-[10px] border-b-transparent rounded-ms inline-block"></div>
                <span className="ml-2">Watch now</span>
              </button>
              <button className="bg-white ml-3 rounded-[100%] flex items-center justify-center hover:opacity-95">
                <span className="font-medium text-3xl px-4 py-2">+</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolTip;

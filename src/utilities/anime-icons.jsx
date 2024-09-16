import results from "../data/search-results";
import ToolTip from "./tooltip";

const reduceChar = (item, maxchar) => {
  return item.length > maxchar ? item.substring(0, maxchar) + "..." : item;
};

const AnimeIcons = ({items = results}) => {
  return (
    <>
      {items.map((items, index) => (
        <ToolTip key={index} item={items}><div
          key={`items ${index}`}
          className="w-56 h-96 m-3 z-50 overflow-hidden group"
        >
          <div className="w-full h-80 relative overflow-hidden">
            <img
              className="h-full w-full duration-150 group-hover:blur-[10px] absolute"
              src={items.image}
              alt="poster"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-[#201f31]  opacity-100 cursor-pointer"></div>
            <div className="w-0 h-0 border-t-[25px] border-t-transparent border-l-[40px] border-l-white border-b-[25px] border-b-transparent absolute z-30 rounded-xl inset-0 m-auto opacity-0 duration-150 group-hover:opacity-100 cursor-pointer"></div>
            <div className="absolute z-30 flex bottom-3">
              <div className="text-black text-lg bg-green-400 w-16 rounded-l-md ml-3 flex items-center justify-center h-6 font-medium ">
                <img
                  className="h-5 inline-block"
                  src="https://cdn-icons-png.flaticon.com/512/1620/1620709.png"
                  alt="title"
                />
                <span className="ml-1">{items.title}</span>
              </div>
              <div className="text-black text-lg bg-blue-300 w-16 rounded-r-md ml-0.5 flex items-center justify-center h-6 font-medium ">
                <img
                  className="h-5 inline-block"
                  src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png"
                  alt="dub"
                />
                <span className="">{items.dub}</span>
              </div>
            </div>
          </div>
          <div className="w-full h-24">
            <h1 className="text-white text-lg font-semibold mt-1 cursor-pointer hover:text-pink">
              {reduceChar(items.name, 20)}
            </h1>
            <h1 className="text-gray-400 text-lg font-thin inline-block mt-2">
              {items.type}
              <span className="text-gray-400 text-lg mx-3">·</span>
            </h1>
            <h1 className="text-gray-400 text-lg font-thin inline-block mt-2">
              {items.duration}
            </h1>
          </div>
        </div>
        </ToolTip>
      ))}
    </>
  );
};

export default AnimeIcons;

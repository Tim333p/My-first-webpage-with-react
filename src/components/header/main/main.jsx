import {useState} from "react";
import options from "../../../data/options";
import dates from "../../../data/dates";
import list from "../../../data/list-of-genre";
import Button from "../../../utilities/buttons";
import popular from "../../../data/most-popular";
import AnimeIcons from "../../../utilities/anime-icons"
import TollTip from "../../../utilities/tooltip";
import ToolTip from "../../../utilities/tooltip";
import ToolTip2 from "../../../utilities/toolTip2";

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

const reduceChar = (word, maxLength) => {
  return word.length > maxLength ? word.substring(0, maxLength) + '...' : word;
}

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

const mainItem = [
  {
    item: [
      "Action",
      "Adventure",
      "Cars",
      "Comedy",
      "Crime",
      "Dementia",
      "Demons",
      "Drama",
      "Dub",
      "Ecchi",
      "Family",
      "Fantasy",
      "Game",
      "Gourmet",
      "Harem",
      "Historical",
      "Horror",
      "Isekai",
      "Josei",
      "Kids",
      "Magic",
      "Martial Arts",
      "Mecha",
    ]
  },
  {
    item: [
      "Military",
      "Music",
      "Mystery",
      "Parody",
      "Police",
      "Psychological",
      "Romance",
      "Samurai",
      "School",
      "Sci-Fi",
      "Seinen",
      "Shoujo",
      "Shoujo Ai",
      "Shounen",
      "Shounen Ai",
      "Slice of Life",
      "Space",
      "Sports",
    ]
  }
]

const Main = () => {

  const [open, setOpen] = useState(false);

  return (
    <main className="z-0 absolute bg-primary right-0 left-0 font-sans h-full">
      <div className=" grid grid-cols-4 bg-primary">

        {/* This is main content with span 3 */}
        <div className="col-span-3">
          <div className="absolute bg-gray-700 left-3 right-1/4 top-24 h-2/3 mt-12 rounded-3xl">
            <h1 className="text-white font-medium text-2xl pt-9 pl-9">Filter</h1>
            {options.map((filter, index) => (
              <div key={`filter ${index}`} className="mt-11 ml-8 border-solid border-gray-400 border inline-block py-2 pl-3 pr-7 rounded-lg">
                <span className="text-white mr-3">{filter.name}</span>
                <select className="text-pink custom-select bg-transparent" name={`options${index + 1}`} id={`options${index + 1}`}>
                  {filter[`options${index + 1}`].map((option, optIndex) => (
                    <option key={`option ${index} ${optIndex}`} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            {dates.map((item, index) => (
              <div key={`item ${index}`} className="mt-11 ml-8 border-solid border-gray-400 border inline-block py-2 pl-3 pr-7 rounded-lg">
                <span className="text-white mr-3">{item.name}</span>

                {item.y && (
                  <select className="text-pink custom-select bg-transparent" >
                    {item.y.map((year, optIndex) => (
                      <option key={`year ${index} ${optIndex}`} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                )}

                {item.m && (
                  <select className="text-pink custom-select bg-transparent ml-2">
                    {item.m.map((month, optIndex) => (
                      <option key={`month ${index} ${optIndex}`} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                )}

                {item.d && (
                  <select className="text-pink custom-select bg-transparent ml-2">
                    {item.d.map((day, optIndex) => (
                      <option key={`day ${index} ${optIndex}`} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                )}

                {item.opt && (
                  <select className="text-pink custom-select bg-transparent ml-2">
                    {item.opt.map((opt, optIndex) => (
                      <option key={`sort ${index} ${optIndex}`} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}
            <div> 
              <h1 className="text-white font-medium text-2xl pt-9 pl-9">Genre</h1>
              <div className="w-11/12 pb-4">
              {list[0].items.map((itemss, index) => (
                <div key={`genre ${index}`}
                className=" text-white border-solid border-gray-400 border inline-block px-3 py-2 rounded-lg ml-9 mt-4 cursor-pointer duration-200 hover:text-pink -mr-7">{itemss}</div>
              ))}
              </div>
              <Button  name="Filter"/>
            </div>
          </div>
          <div className="h-auto w-9/12  mt-[52rem]">
            <h1 className="text-pink font-medium text-3xl ml-3 mb-3">Search results for: <span className="italic">one piece</span></h1>
            <div className="grid grid-cols-6 w-full h-auto gap-x-[14.9rem]"><AnimeIcons/></div>
          </div>
          
        </div>

        {/* This is grid with span 1 most popular and genre */}
        <div className="mt-20">
          <h1 className="text-pink text-3xl font-semibold ml-8 mt-8">Most Popular</h1>
          <div className="bg-gray-700 w-10/12 h-auto ml-8 mt-6 flex items-center justify-center">
              <div className="w-11/12 h-auto my-5 ">


                {popular.map((item, index) => <div key={`item ${index}`} className="w-full h-32 border-solid border-gray-500 border-b flex mt-2">
                  <ToolTip2 key={index} item={item}><img className=" w-20 h-28 mt-2 rounded-lg cursor-pointer" src={item.image} alt="onePiece image" /></ToolTip2>
                  <div className="w-full h-full ml-20">
                    <h1 className="text-white font-bold text-lg mt-7 ml-3 hover:text-pink cursor-pointer">{item.name}</h1>
                    <div className="bg-green-400  font-semibold justify-center w-1/4 ml-3 mt-2 rounded-l-md inline-block"><img className="w-5 mr-1 ml-1 py-1 inline-block" src="https://cdn-icons-png.flaticon.com/512/1620/1620709.png" alt="" /><span className="mt-0.5">{item.title}</span></div>
                    <div className="bg-blue-300  font-semibold justify-center w-1/4 ml-0.5 inline-block "><img className="w-5  ml-1 py-1 inline-block" src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png" alt="" /><span className="mt-0.5">{item.dub}</span></div>
                    <h1 className="text-gray-500 inline-block text-2xl absolute mt-1 ml-1">·</h1>
                    <h1 className="text-gray-400 inline-block ml-4 text-lg">TV</h1>
                    <span className="text-gray-500 absolute text-3xl font-bold right-16 -mt-3 cursor-pointer hover:text-pink">+</span>
                  </div>
                </div>)}


              </div>
          </div>

          <div>
            <h1 className="text-pink font-semibold text-3xl mt-12 ml-8">Genres</h1>
            <div className="bg-gray-700 w-10/12 h-auto flex items-center justify-center ml-8 mt-7">
              <div className="w-11/12 h-auto my-5 ">
                {open ? <div className="w-11/12 h-auto my-5 grid grid-cols-3 gap-x-8">
                  {list[0].items.map((item, index) => <button key={`item ${index}`} className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>{reduceChar(item, 8)}</button>)}
                </div> : 
                <div className="w-11/12 h-auto my-5 grid grid-cols-3 gap-x-8">
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Action</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Adventure</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Cars</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Comedy</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Crime</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Dementia</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Demons</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Drama</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Dub</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Ecchi</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Family</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Fantasy</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Game</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Gourmet</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Harem</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Historical</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Horror</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Isekai</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Josei</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Kids</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Magic</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Martial Arts</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Mecha</button>
                  <button className={`text-lg border-solid pl-3 pr-14 py-3 text-nowrap hover:bg-gray-600 ${randomColor()}`}>Military</button>
                </div>
                }
                <div className="flex justify-center">
                  <button onClick={() => setOpen(!open)} className="text-white font-semibold text-lg border-solid bg-gray-600 w-full py-3 rounded-lg duration-150 hover:bg-gray-500">{open ? 'Show less' : 'Show more'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Main;


import options from "../../../data/options";
import dates from "../../../data/dates";
import list from "../../../data/list-of-genre";
import Button from "../../../utilities/buttons";
import popular from "../../../data/most-popular";

const Main = () => {
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
        </div>

        {/* This is grid with span 1 most popular and genre */}
        <div className="mt-20">
          <h1 className="text-pink text-3xl font-semibold ml-8 mt-8">Most Popular</h1>
          <div className="bg-gray-700 w-10/12 h-auto ml-8 mt-6 flex items-center justify-center">
              <div className="w-11/12 h-auto my-5 ">


                {popular.map((item, index) => <div key={`item ${index}`} className="w-full h-32 border-solid border-gray-500 border-b flex mt-2">
                  <img className=" w-20 h-28 mt-2 rounded-lg cursor-pointer" src={item.image} alt="onePiece image" />
                  <div className="w-full h-full">
                    <h1 className="text-white font-bold text-lg mt-7 ml-3 hover:text-pink cursor-pointer">{item.name}</h1>
                    <div className="bg-green-400  font-semibold justify-center w-1/4 ml-3 mt-2 rounded-l-md inline-block"><img className="w-5 mr-1 ml-1 py-1 inline-block" src="https://cdn-icons-png.flaticon.com/512/1620/1620709.png" alt="" /><span className="mt-0.5">{item.title}</span></div>
                    <div className="bg-blue-300  font-semibold justify-center w-1/4 ml-0.5 inline-block "><img className="w-5 mr-1 ml-1 py-1 inline-block" src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png" alt="" /><span className="mt-0.5">{item.dub}</span></div>
                    <h1 className="text-gray-500 inline-block text-2xl absolute mt-1 ml-1">·</h1>
                    <h1 className="text-gray-400 inline-block ml-4 text-lg">TV</h1>
                    <span className="text-gray-500 absolute text-3xl font-bold right-16 -mt-3 cursor-pointer">+</span>
                  </div>
                </div>)}


              </div>
          </div>

          <div>
            <h1 className="text-pink font-semibold text-3xl mt-12 ml-8">Genres</h1>
            <div className="bg-gray-700 w-10/12 h-auto flex items-center justify-center ml-8 mt-7">
              <div className="bg-green-500 w-11/12 h-10 my-5">

              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Main;


import results from '../data/search-results';

const AnimeIcons = () => {
  return (
    <>
        {results.map((items, index) => <div key={`items ${index}`} className="w-56 h-96 m-3 z-50">
            <div className="w-full h-80 relative">
                <img className="h-full w-full" src={items.image} alt="poster" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-[#201f31]  opacity-100"></div>
                <div className="absolute z-20 flex bottom-3">
                    <div className="text-white text-lg bg-green-400 w-16 rounded-l-md ml-3 flex items-center justify-center h-6 "><img className="h-5 inline-block" src="https://cdn-icons-png.flaticon.com/512/1620/1620709.png" alt="title" /><span className="ml-1">{items.title}</span></div>
                    <div className="text-white text-lg bg-blue-300 w-16 rounded-r-md ml-0.5 flex items-center justify-center h-6 "><img className="h-5 inline-block" src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png" alt="dub" /><span className="">{items.dub}</span></div>
                </div>
            </div>
            <div className="w-full h-24">
                <h1 className="text-white text-lg font-semibold mt-1">{items.name}</h1>
                <h1 className="text-gray-400 text-lg font-thin inline-block mt-2">{items.type}<span className="text-gray-400 text-lg mx-3">·</span></h1>
                <h1 className="text-gray-400 text-lg font-thin inline-block mt-2">{items.duration}</h1>
            </div>
        </div>)}
    </>
  )
}

export default AnimeIcons
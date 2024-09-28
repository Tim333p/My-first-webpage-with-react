import { SocialIcon } from "react-social-icons";
import letters from "../../../../data/alphabet";

const Fotter = () => {
  return (
    <>
      <div className="bg-primary z-50 w-full h-[35rem] absolute bottom-[-320%]">
        <div className="mt-44 ml-6 flex flex-row items-center border-solid border-b border-gray-700 pb-8 mr-4">
          <img className="inline-block w-52" src="https://hianime.to/images/logo.png?v=0.1" alt="logo" />
          <div className="inline-block ml-12 border-solid border-l border-gray-700">
            <div className="pl-12 py-1">
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
          </div>
        </div>
        <div className="flex ml-6 mt-8 items-center">
            <h1 className="text-white text-3xl font-medium">A-Z LIST</h1>
            <div className="ml-6 border-solid border-l border-gray-700">
                <p className="text-white text-xl pl-6">Searching anime order by alphabet name A to Z.</p>
            </div>
        </div>
        <div className="ml-4 mt-8">
            {letters[0].letter.map((items, index) =>  (<button key={index} className="text-white font-bold text-2xl bg-gray-700 px-3 py-1 rounded-lg ml-2 hover:bg-pink cursor-pointer">{items}</button>))}
        </div>
        <div className="ml-6 mt-24">
          <div className="text-white">Recreator: Timotej Radobikcy</div>
          <div className="text-white">Email: radobickytimotej@gmail.com</div>
        </div>
      </div>
    </>
  );
};

export default Fotter;

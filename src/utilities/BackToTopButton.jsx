import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTopButton && (
        <button
          onClick={scrollUp}
          className="bg-white fixed bottom-6 right-6 w-16 h-16 z-50 flex items-center justify-center rounded-full duration-200 hover:bg-gray-300"
        >
          <MdOutlineKeyboardArrowUp size={50} />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;

import React,{useState, useEffect} from 'react';

const Hero = ({bgImage, text, paragraph }) => {
   const [bgHeight, setBgHeight] = useState('100vh');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // Change 768 to your desired breakpoint for mobile
        setBgHeight('140vh');
      } else {
        setBgHeight('85vh');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})`, height: bgHeight }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden p-4"> {/* Added overflow-hidden */}
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center font-raleway">{text}</h1>
        <div className="max-w-6xl	 text-white text-base lg:text-lg md:text-2xl sm:text-xl xs:text-base text-center my-8 mx-1 md:mx-9 leading-9 tracking-wider font-extrabold font-montserrat overflow-auto max-h-40vh"> {/* Applied max height and overflow auto */}
          <p>{paragraph}</p>
        </div>
        <button
          type="button"
          className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;

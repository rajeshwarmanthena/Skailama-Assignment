import React from 'react';

const Button = () => {
  return (
    <button
      className={`
        h-[3%] w-[5%] 
        font-bold rounded border border-[3px] 
        bg-[#28264b] hover:bg-transparent hover:text-[#28264b]
        flex items-center justify-center
        sm:h-[40px] sm:w-[40px] md:h-[48px] md:w-[48px] lg:h-[56px] lg:w-[56px]
      `}
    >
      Add
    </button>
  );
};

export default Button;

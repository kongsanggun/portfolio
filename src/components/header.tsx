import React, { useEffect, useState } from 'react';

const HeaderComp = () => {
  return (
    <header>
      <div className = "w-full h-28 sm:h-36 flex items-center justify-center border-b-[1.5px] border-b-[#BEC0D7]">
        <div className= 'w-auto h-full mx-2 sm:mx-5 text-[#121316] dark:text-[#F9F9FB] flex items-center justify-center font-["JetBrains_Mono"] font-extrabold duration-200'>
          <a className = "w-auto h-full text-base sm:text-2xl mr-2 sm:mr-10 flex items-center justify-center hover:text-[#BEC0D7] dark:hover:text-[#a9b5cf] duration-150" href="#S1">Profile</a>
          <a className = "w-auto h-full text-base sm:text-2xl mr-2 sm:mr-10 flex items-center justify-center hover:text-[#BEC0D7] dark:hover:text-[#a9b5cf] duration-150" href="#S2">Skills</a>
          <a className = "w-auto h-full text-base sm:text-2xl mr-2 sm:mr-10 flex items-center justify-center hover:text-[#BEC0D7] dark:hover:text-[#a9b5cf] duration-150" href="#S3">Timeline</a>
          <a className = "w-auto h-full text-base sm:text-2xl flex items-center justify-center hover:text-[#BEC0D7] dark:hover:text-[#a9b5cf] duration-150" href="#S4">Projects</a>
        </div>
      </div>
    </header>
  )
}

export default HeaderComp; 
import React, { useEffect, useState } from 'react';

const HeaderComp = () => {
  return (
    <footer className='w-full flex justify-center'>
      <div className = 'w-[60%] h-auto text-[#121316] dark:text-[#F9F9FB] font-["Nanum_Gothic"] text-sm sm:text-base py-6 sm:py-8 border-t-[0.5px] border-t-[#BEC0D7] flex justify-center'>
        (c) 2022 Snom All rights reserved.
      </div>
    </footer>
  )
}

export default HeaderComp;
import React, { useEffect, useState } from 'react';

const HeaderComp = () => {
  return (
      <div className = "w-full h-auto flex items-center justify-center py-4 sm:py-6 border-b-[1px] border-b-[#BEC0D7]">
        <div className = "my-6 sm:my-10 text-[#121316] dark:text-[#F9F9FB] text-4xl sm:text-6xl md:text-8xl flex text-center flex-col font-['Black_Han_Sans'] duration-200">
          <p className = "mb-3 sm:mb-5 md:mb-7"> 안녕하세요. </p>
          <p className = "mb-3 sm:mb-5 md:mb-7"> 꾸준히 생각하는 사람 </p>
          <p> 개발자 공상현입니다. </p>
        </div>
      </div>
  )
}

export default HeaderComp;
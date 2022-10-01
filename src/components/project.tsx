import React, { useEffect, useState } from 'react';

const HeaderComp = () => {
  return (
    <div className = "w-full h-auto text-[#F9F9FB] dark:text-[#232438] font-extrabold py-3 sm:py-4 border-b-[1.5px] border-b-[#BEC0D7] flex flex-col items-center">
      <div id = "S4" className = 'text-[#121316] dark:text-[#F9F9FB] text-3xl sm:text-5xl my-2 sm:my-5 font-["JetBrains_Mono"] font-bold w-[auto] h-auto duration-200'>Projects</div>
      
      <div className = "relative bg-[#9ba5bb] w-[90%] max-w-[720px] h-[150px] sm:h-[200px] mt-5 mb-2 rounded-md font-['Nanum_Gothic'] text-xl sm:text-3xl">
        <img className = "w-full h-full opacity-50 hover:opacity-80 blur-sm duration-150" src='./img/project_1_1.jpeg' alt="깃헙 바로가기"/>
        <div className = 'absolute bottom-[calc(50%-14px)] left-[calc(50%-105px)] sm:bottom-[calc(50%-18px)] sm:left-[calc(50%-157.5px)]'> Face Accessary Studio </div>
      </div>
      <div className = "relative bg-[#9ba5bb] w-[90%] max-w-[720px] h-[150px] sm:h-[200px] mt-5 mb-2 rounded-md font-['Nanum_Gothic'] text-xl sm:text-3xl">
        <img className = "w-full h-full opacity-50 hover:opacity-80 blur-sm duration-150" src='./img/project_2_1.jpg' alt="깃헙 바로가기"/>
        <div className = 'absolute bottom-[calc(50%-14px)] left-[calc(50%-80px)] sm:bottom-[calc(50%-18px)] sm:left-[calc(50%-120px)]'> Special Function </div>
      </div>
      <div className = "relative bg-[#9ba5bb] w-[90%] max-w-[720px] h-[150px] sm:h-[200px] mt-5 mb-2 rounded-md font-['Nanum_Gothic'] text-xl sm:text-3xl">
        <img className = "w-full h-full opacity-50 hover:opacity-80 blur-sm duration-150" src='./img/project_3_1.jpg' alt="깃헙 바로가기"/>
        <div className = 'absolute bottom-[calc(50%-14px)] left-[calc(50%-66.6px)] sm:bottom-[calc(50%-18px)] sm:left-[calc(50%-100px)]'> 태고 서열표 웹 </div>
      </div>
    </div>
  )
}

export default HeaderComp;
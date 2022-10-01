import React, { useEffect, useState } from 'react';

const HeaderComp = () => {
  return (
    <div className = "w-full h-auto text-[#121316] py-3 sm:py-4 border-b-[1.5px] border-b-[#BEC0D7] flex flex-col items-center">
      <div id = "S3" className = 'dark:text-[#F9F9FB] text-3xl sm:text-5xl my-2 sm:my-5 font-["JetBrains_Mono"] font-bold w-[auto] h-auto duration-200'>Timeline</div>
        <div className = "bg-[#E1E3EC] w-[90%] max-w-[720px] h-[auto] py-5 mt-2 mb-10 text-base sm:text-base my-2 font-['Nanum_Gothic'] font-bold rounded-md">
          <div className = "w-full h-[70px] sm:h-[90px] pl-3 flex items-center justify-start"> 세종대학교 재학 (2017.2 – 2023.2) </div>
          <div className = "w-full h-[70px] sm:h-[90px] pl-3 flex items-center justify-start"> 세종대학교 SW경시대회 수상 (2017.11) </div>
          <div className = "w-full h-[70px] sm:h-[90px] pl-3 flex items-center justify-start"> 육군 만기제대 (2018.6 – 2020.1)</div>
          <div className = "w-full h-[70px] sm:h-[90px] pl-3 flex items-center justify-start"> 리눅스 자격증 2급 취득 (2020.1) </div>
          <div className = "w-full h-[70px] sm:h-[90px] pl-3 flex items-center justify-start"> 캡스톤 프로젝트 - Face Accessary Studio 개발 (2022.3.24 – 2022.6.3)</div>
          <div className = "w-full h-[70px] sm:h-[90px] pl-3 flex items-center justify-start"> 개인 토이 프로젝트 - 태고 서열표 웹 개발 (2022.6.10 – 2022.8.1)</div>
          <div className = "w-full h-[70px] sm:h-[90px] pl-3 flex items-center justify-start"> 정보처리기사 취득 (2022. 9)</div>
          <div className = "w-full h-[70px] sm:h-[90px] pl-3 flex items-center justify-start"> 팀 프로젝트 - Special Function 개발 (2022.8.2 – 2022.9.8)</div>
        </div>
    </div>
  )
}


export default HeaderComp;
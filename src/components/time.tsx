import React, { useEffect, useState } from 'react';

const HeaderComp = () => {
  return (
    <div className="w-full h-auto text-[#121316] py-6 sm:py-8 border-b-[1.5px] border-b-[#BEC0D7] flex flex-col items-center">
      <div id="S3" className='dark:text-[#F9F9FB] text-3xl sm:text-5xl my-2 sm:my-5 font-["JetBrains_Mono"] font-bold w-[auto] h-auto duration-200'>Timeline</div>

      <ol className="relative border-l border-[#BEC0D7] font-['Nanum_Gothic'] pb-6 mt-10 mb-12 max-w-[80%] sm:max-w-[60%]">
        <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]"/>
          <div className='h-4 mb-4 sm:h-6 sm:mb-6'/>
          <h3 className="mb-1 sm:mb-3 text-lg sm:text-2xl font-semibold text-[#121316] dark:text-[#F9F9FB]">세종대학교 재학</h3>
          <time className="block mb-2 sm:mb-4 text-sm sm:text-base font-normal leading-none text-gray-400 dark:text-gray-500">2017.2 – 2023.2</time>
        </li>
        
        <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]"/>
          <div className='h-4 mb-4 sm:h-6 sm:mb-6'/>
          <h3 className="mb-1 sm:mb-3 text-lg sm:text-2xl font-semibold text-[#121316] dark:text-[#F9F9FB]">세종대학교 SW경시대회 입상</h3>
          <time className="block mb-2 sm:mb-4 text-sm sm:text-base font-normal leading-none text-gray-400 dark:text-gray-500">2017.11</time>
          <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400"> 교내에서 알고리즘 대회에 참가하여 입상하였습니다. 이 수상을 계기로 개발에 관심을 가지게 되었습니다. </p>
        </li>

        <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]"/>
          <div className='h-4 mb-4 sm:h-6 sm:mb-6'/>
          <h3 className="mb-1 sm:mb-3 text-lg sm:text-2xl font-semibold text-[#121316] dark:text-[#F9F9FB]">육군 만기제대</h3>
          <time className="block mb-2 sm:mb-4 text-sm sm:text-base font-normal leading-none text-gray-400 dark:text-gray-500">2018.6 – 2020.1</time>
          <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400"> 무사히 군복무를 마쳤습니다. </p>
        </li>

        <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]"/>
          <div className='h-4 mb-4 sm:h-6 sm:mb-6'/>
          <h3 className="mb-1 sm:mb-3 text-lg sm:text-2xl font-semibold text-[#121316] dark:text-[#F9F9FB]">리눅스 자격증 2급 취득</h3>
          <time className="block mb-2 sm:mb-4 text-sm sm:text-base font-normal leading-none text-gray-400 dark:text-gray-500">2020.1</time>
          <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400"> 군 복무 중 저의 전공와 관련된 자격증을 취득하였습니다. 특히 네트워크랑 여러가지 명령어를 배울 수 있는 기회가 되었습니다.</p>
        </li>

        <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]"/>
          <div className='h-4 mb-4 sm:h-6 sm:mb-6'/>
          <h3 className="mb-1 sm:mb-3 text-lg sm:text-2xl font-semibold text-[#121316] dark:text-[#F9F9FB]">HTML 웹 개발 스터티 진행</h3>
          <time className="block mb-2 sm:mb-4 text-sm sm:text-base font-normal leading-none text-gray-400 dark:text-gray-500">2020.6 - 2020.7</time>
          <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400"> 단순히 강의에서 끝나는 것을 넘어 위 스터디를 통하여 웹 개발의 기초를 다졌던 기회였습니다. </p>
        </li>

        <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]"/>
          <div className='h-4 mb-4 sm:h-6 sm:mb-6'/>
          <h3 className="mb-1 sm:mb-3 text-lg sm:text-2xl font-semibold text-[#121316] dark:text-[#F9F9FB]">캡스톤 프로젝트 - Face Accessary Studio 개발</h3>
          <time className="block mb-2 sm:mb-4 text-sm sm:text-base font-normal leading-none text-gray-400 dark:text-gray-500">2022.3.24 – 2022.6.3</time>
          <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">이 떄 React를 처음 사용하여 개발하는 데 많은 시간이 들었지만 기초를 다지는 기회가 되었습니다.</p>
        </li>

        <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]"/>
          <div className='h-4 mb-4 sm:h-6 sm:mb-6'/>
          <h3 className="mb-1 sm:mb-3 text-lg sm:text-2xl font-semibold text-[#121316] dark:text-[#F9F9FB]">개인 토이 프로젝트 - 태고 서열표 웹 개발</h3>
          <time className="block mb-2 sm:mb-4 text-sm sm:text-base font-normal leading-none text-gray-400 dark:text-gray-500">2022.6.10 – 2022.8.1</time>
          <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400"> 단독으로 서버랑 프런트 엔드 두 방명으로 웹 개발을 진행하였습니다. </p>
        </li>

        <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]"/>
          <div className='h-4 mb-4 sm:h-6 sm:mb-6'/>
          <h3 className="mb-1 sm:mb-3 text-lg sm:text-2xl font-semibold text-[#121316] dark:text-[#F9F9FB]">정보처리기사 취득</h3>
          <time className="block mb-2 sm:mb-4 text-sm sm:text-base font-normal leading-none text-gray-400 dark:text-gray-500">2022. 9</time>
          <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">교내에서 배웠던 CS를 복습할 수 있었습니다.</p>
        </li>

        <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]"/>
          <div className='h-4 mb-4 sm:h-6 sm:mb-6'/>
          <h3 className="mb-1 sm:mb-3 text-lg sm:text-2xl font-semibold text-[#121316] dark:text-[#F9F9FB]">팀 프로젝트 - Special Function 개발</h3>
          <time className="block mb-2 sm:mb-4 text-sm sm:text-base font-normal leading-none text-gray-400 dark:text-gray-500">2022.8.2 – 2022.9.8</time>
          <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">현 업무에서 사용하고 있는 여러 지식을 배우면서 상황에 따라 유용하게 사용할 기회가 되었습니다.</p>
        </li>

        <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]"/>
          <div className='h-4 mb-4 sm:h-6 sm:mb-6'/>
          <h3 className="mb-1 sm:mb-3 text-lg sm:text-2xl font-semibold text-[#121316] dark:text-[#F9F9FB]">GS ITM C;luv 3기 활동</h3>
          <time className="block mb-2 sm:mb-4 text-sm sm:text-base font-normal leading-none text-gray-400 dark:text-gray-500">2022.11.01 – 2022.12.31</time>
          <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li>

        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]"/>
      </ol>

    </div>
  )
}


export default HeaderComp;

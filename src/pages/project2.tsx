import React, { useEffect, useState } from 'react';

import Header from '../components/project-header'
import Footer from '../components/footer'

function App() {

  var num = 0

  const Darkmode = () => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  }

  const puls = () => {
    num = (num + 1) % 5;
    pre()
  };

  const mi = () => {
    if (num === 0) num = 5 
    num = (num - 1) % 5;
    pre()
  };

  const pre = () => {
    let a = document.getElementById('p0') as HTMLElement
    let b = document.getElementById('p1') as HTMLElement
    let c = document.getElementById('p2') as HTMLElement
    let d = document.getElementById('p3') as HTMLElement
    let e = document.getElementById('p4') as HTMLElement

    let tar = document.getElementById('p'+num) as HTMLElement

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

    tar.style.display = "flex";
  }

  useEffect(() => {
    window.scrollTo(0,0)
    pre()
  }, [])

  const preview = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] flex items-center justify-center py-7 sm:py-10 border-b-[1px] border-b-[#BEC0D7] select-none">
        <div className="relative w-[60%] sm:w-[80%] h-auto mx-[10%] sm:mx-[20%] my-6 sm:my-10">
          <div className = "absolute w-[10%] h-full left-0 top-0 font-bold sm:font-extrabold text-xl sm:text-5xl bg-[#F9F9FB] dark:bg-[#121316] opacity-25 hover:opacity-60 flex items-center justify-center duration-200" onClick={() => {mi()}}>{'<'}</div>
          <div className = "absolute w-[10%] h-full right-0 top-0 font-bold fsm:ont-extrabold text-xl sm:text-5xl bg-[#F9F9FB] dark:bg-[#121316] opacity-25 hover:opacity-60 flex items-center justify-center duration-200" onClick={() => {puls()}}>{'>'}</div>
          <img id = "p0" src='./img/project_2_1.jpg' alt="" className='w-full hidden duration-200'/>
          <img id = "p1" src='./img/project_2_2.png' alt="" className='w-full hidden duration-200'/>
          <img id = "p2" src='./img/project_2_3.png' alt="" className='w-full hidden duration-200'/>
          <img id = "p3" src='./img/project_2_4.png' alt="" className='w-full hidden duration-200'/>
          <img id = "p4" src='./img/project_2_5.png' alt="" className='w-full hidden duration-200'/>
        </div>
      </div>
    )
  }

  const detail1 = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] pt-10 sm:pt-12 sm:pb-8 flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:ml-[20%] mb-5 sm:mb-0 sm:mr-5'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>개요</p>
          <p className='text-xs sm:text-sm font-thin mb-1'>개발 기간 : 2022.08.02 – 2022.09.08</p>
          <p className='text-xs sm:text-sm font-thin mb-1'>개발 인원 : 2명</p>
          <p className='text-xs sm:text-sm font-thin mb-1'>담당 역할 : API를 이용한 소셜 로그인 구현, 웹 UI 구현, REST API를 이용한 벡엔드 기능 연결, 프런트 엔드</p>
          <p className='text-xs sm:text-sm font-thin'>사용 언어 : TypeScript, React.js, Tailwind css, Node.js</p>
        </div>
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:mr-[20%]'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>설명</p>
          <p className='text-xs sm:text-sm font-thin'>Special function은 서버를 프로비저닝 하거나 구축하지 않고도 코드를 실행 할 수 있는 컴퓨팅 서비스 입니다. Special function 을 사용하면 Node 기반의 거의 모든 유형의 애플리케이션을 별도의 복잡한 설치 과정 없이 손쉽게 실행 할 수 있습니다.</p>
        </div>
      </div>
    )
  }

  const links = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] py-5 sm:py-8 flex flex-col items-center justify-center">
        <div className='w-[80%] sm:w-[60%] h-auto flex flex-col justify-center'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>관련 URL</p>
          <a className='text-xs sm:text-sm font-thin mb-1 break-words' href='https://spfunc.ml/'> 웹 링크 : https://spfunc.ml/ </a>
          <a className='text-xs sm:text-sm font-thin mb-1 break-words' href='https://github.com/team-special-week'> 깃헙 : https://github.com/team-special-week </a>
          <a className='text-xs sm:text-sm font-thin break-words' href='https://www.youtube.com/watch?v=OSPdSbOL3OA'> 영상 : https://www.youtube.com/watch?v=OSPdSbOL3OA </a>
        </div>
      </div>
    )
  }

  const timeline = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] py-5 sm:py-8 flex flex-col items-center justify-center">
        <div className='w-[80%] sm:w-[60%] h-auto flex flex-col justify-center'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>타임 라인</p>
          
          <ol className="relative border-l border-[#BEC0D7] font-['Nanum_Gothic'] pb-6 mt-5 sm:mt-10 mb-5">
            <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]" />
              <div className='h-4 mb-4 sm:h-6 sm:mb-6' />
              <h3 className="mb-1 sm:mb-3 text-base sm:text-lg font-semibold text-[#121316] dark:text-[#F9F9FB]">초기 웹 UI 개발</h3>
              <time className="block mb-2 sm:mb-4 text-xs sm:text-sm font-thin leading-none text-gray-400 dark:text-gray-500">2022.08.08 - 2022.08.12</time>
              <p className="text-xs sm:text-sm font-thin text-gray-500 dark:text-gray-400">Figma라는 사이트를 이용하여 제작한 프로토타입 UI를 기반으로 웹 UI를 작성하였습니다.</p>
            </li>
            <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]" />
              <div className='h-4 mb-4 sm:h-6 sm:mb-6' />
              <h3 className="mb-1 sm:mb-3 text-base sm:text-lg font-semibold text-[#121316] dark:text-[#F9F9FB]">소셜 로그인 구현</h3>
              <time className="block mb-2 sm:mb-4 text-xs sm:text-sm font-thin leading-none text-gray-400 dark:text-gray-500">2022.08.13 - 2022.08.15</time>
              <p className="text-xs sm:text-sm font-thin text-gray-500 dark:text-gray-400">각 소셜 사이트에 제공하는 REST API 및 npm 라이브러리를 이용하여 소셜 로그인 기능을 구현하였습니다.</p>
            </li>
            <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]" />
              <div className='h-4 mb-4 sm:h-6 sm:mb-6' />
              <h3 className="mb-1 sm:mb-3 text-base sm:text-lg font-semibold text-[#121316] dark:text-[#F9F9FB]">백엔드 API 연결</h3>
              <time className="block mb-2 sm:mb-4 text-xs sm:text-sm font-thin leading-none text-gray-400 dark:text-gray-500">2022.08.15 - 2022.08.22</time>
              <p className="text-xs sm:text-sm font-thin text-gray-500 dark:text-gray-400">Postman를 이용하여 백엔드 개발자가 구현한 API를 연결하여 정보를 나타내거나 주 기능을 구현시켰습니다.</p>
            </li>
            <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]" />
              <div className='h-4 mb-4 sm:h-6 sm:mb-6' />
              <h3 className="mb-1 sm:mb-3 text-base sm:text-lg font-semibold text-[#121316] dark:text-[#F9F9FB]">UI 수정 및 마무리 작업</h3>
              <time className="block mb-2 sm:mb-4 text-xs sm:text-sm font-thin leading-none text-gray-400 dark:text-gray-500">2022.08.23 - 2022.09.08</time>
              <p className="text-xs sm:text-sm font-thin text-gray-500 dark:text-gray-400"> Tailwand.css와 Ant Design을 이용하여 코드 및 UI를 보완하였습니다. 또한 처음 접하는 사용자를 위한 가이드 문서를 제작하였습니다. </p>
            </li>
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]"/>
          </ol>
        </div>
      </div>
    )
  }

  const detail2 = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] pb-10 sm:pt-8 sm:pb-12 flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:ml-[20%] mb-5 sm:mb-0 sm:mr-5'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>보완점</p>
          <p className='text-xs sm:text-sm font-thin mb-[6px]'> 
            - 소셜로그인 기능을 구현 할 때, 단순히 로그인 및 로그아웃 기능만 구현하여서 타임아웃 처리 및 토큰 갱신 기능을 구현을 못하였습니다. 다음 프로젝트에 로그인 기능을 구현 시에 위와 같은 기능을 추가하여 구현해봐야겠다.
          </p>
          <p className='text-xs sm:text-sm font-thin mb-[6px]'> 
            - 서버리스 코드와 관련된 정보를 좀 더 빠르게 가져오기 위하여 상태관리 라이브러리인 Redux를 적용하고 싶었으나 처음 사용하는 라이브러리고 배우는 내용이 복잡하여 적용하지 못한 것이 아쉬웠다.
          </p>
        </div>

        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:mr-[20%] '>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>후기</p>
          <p className='text-xs sm:text-sm font-thin'>
            네트워크를 활용한 어플리케이션이 많아짐에 따라 서버리스의 수요 또한 늘어나게 되었고 나중에 여러가지 기능을 구현하기 위하여 클라우드 웹 서비스를 구현해보고 싶었습니다. 
            또한 마침 이 시기에 SW 개발자 공모전이 열린 시기라서 공모전 입상과 개발 실력을 늘릴려는 등의 목적으로 프로젝트를 진행하게 되었습니다. 
            백엔드를 개발하고 있는 지인을 모집하여 제가 프론트 엔드를 담당하는 쪽으로 프로젝트를 시작하게 되었습니다. 
            약 5주 간의 개발 기간 동안 매 주 주말마다 대면 혹은 비대면 방식으로 만나 뭘 개발해야할지 토의하는 방향으로 개발하였습니다.
            중간에 CSS 관련으로 프로젝트를 다 갈아엎어야 할 위기를 직면하였지만 결국에는 코드를 수정하는 쪽으로 결정하여 무사히 프로젝트를 완성시켜 해당 보고서를 작성하고 공모전에 무사히 출품할 수 있었습니다.
            비록 공모전 입상에는 실패하였지만 개발 경험에서는 많은 것을 얻어갈 수 있었던 기회였습니다. 예를 들어 Git 같은 경우 Branch를 배포용, 기능시험용 등으로 나뉘어서 쓰는 등 Repo 파이프라인을 어떻게 관리하는 지 알 수 있었고,
            Tailwind css, Ant Design 등 사용하면 편리한 외부 CSS 라이브러리에 대해서 알 수 있었습니다. 실제로 위의 프로젝트 진행 이후로 CSS 대신 Tailwind css를 이용하여 웹 인터페이스를 제작하고 있습니다.</p>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-[#F9F9FB] dark:bg-[#232438] duration-200'>
      <Header Name={"Special Function"} />
      {preview()}
      {detail1()}
      {links()}
      {timeline()}
      {detail2()}
      <Footer />
      <div id="dark_mode" className="fixed bottom-3 sm:bottom-5 left-3 sm:left-5 bg-[#232438] hover:bg-[#b8bbc7] dark:bg-[#F9F9FB] dark:hover:bg-[#a9b5cf] rounded-full h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] px-2 py-2 duration-200" onClick={() => { Darkmode() }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-[24px] w-[24px] sm:h-[43px] sm:w-[43px] fill-[#F9F9FB] dark:fill-[#232438]">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';

import Header from '../components/project-header'
import Footer from '../components/footer'

function App() {

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

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const preview = () => {
    return (
      <div className="w-full h-auto flex items-center justify-center py-7 sm:py-10 border-b-[1px] border-b-[#BEC0D7]">
        <div className="mx-[10%] sm:mx-[20%] my-6 sm:my-10 flex duration-200">
          <img src='./img/project_2_1.jpg' alt="깃헙 바로가기" />
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
          
          <ol className="relative border-l border-[#BEC0D7] font-['Nanum_Gothic'] pb-6 mt-5 mb-5 max-w-[80%] sm:max-w-[60%]">
            <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]" />
              <div className='h-4 mb-4 sm:h-6 sm:mb-6' />
              <h3 className="mb-1 sm:mb-3 text-base sm:text-lg font-semibold text-[#121316] dark:text-[#F9F9FB]">버젼</h3>
              <time className="block mb-2 sm:mb-4 text-xs sm:text-sm font-thin leading-none text-gray-400 dark:text-gray-500">기간</time>
              <p className="text-xs sm:text-sm font-thin text-gray-500 dark:text-gray-400">개발 내역</p>
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
          <p className='text-xs sm:text-sm font-thin'>
          - 상태관리 라이브러리인 Redux를 적용하고 싶었으나 실력이 부족하여 적용하지 못 한게 아쉬웠다.
          - API 문서에서 소셜 로그인 API를 타임아웃처리 하거나 갱신을 할 수 있는 기능이 있는데 구현을 못하였다. 위 2개의 기능은 나중에 유지 보수할 경우 적용해보겠다. </p>
        </div>
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:mr-[20%] '>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>후기</p>
          <p className='text-xs sm:text-sm font-thin'>
          - 5주간 개발 기간 동안 중간에 싹 다 엎어야 할 위기도 있었지만 그것을 극복해내고 무사히 프로젝트를 완성시킨 점이 기억에 남는다.
          - 실제로 git 파이프라인을 어떻게 관리 하는지에 대해서 알게 되었던 시간이었다. (Branch를 배포용, 기능 시험용으로 나뉘어서 써야 한다는 점 등)
          - 사용하면 편리한 외부 CSS 라이브러리에 대해서 익힐 수 있었던 시간이었다. (Tailwind css, Ant Design) </p>
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

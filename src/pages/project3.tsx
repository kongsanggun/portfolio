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
          <img src='./img/project_3_1.jpg' alt="깃헙 바로가기" />
        </div>
      </div>
    )
  }

  const detail1 = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] pt-10 sm:pt-12 sm:pb-8 flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:ml-[20%] mb-5 sm:mb-0 sm:mr-5'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>개요</p>
          <p className='text-xs sm:text-sm font-thin mb-1'>개발 기간 : 2022.06.10 -2022.08.01 </p>
          <p className='text-xs sm:text-sm font-thin mb-1'>개발 인원 : 1명</p>
          <p className='text-xs sm:text-sm font-thin mb-1'>담당 역할 : 3D 모델을 웹페이지로 불러오기, 얼굴을 인식하여 화면에 적용하기 화면을 사진으로 저장하는 기능 제작하기, 프런트 엔드</p>
          <p className='text-xs sm:text-sm font-thin'>사용 언어 : TypeScript, React.js, Node.js, Puppeteer</p>
        </div>
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:mr-[20%]'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>설명</p>
          <p className='text-xs sm:text-sm font-thin'>‘태고의 달인’이라는 게임의 비공식 서열표를 수작업으로 갱신하는 것을 웹으로 통하여 자동적으로 반영이 되는 방식으로 개발을 하였습니다. 또한 사용자가 일일히 각 곡의 성적을 체크하는 것이 아닌 자동적으로 곡의 기록을 표시해 주는 연동 서비스를 추가하였습니다.</p>
        </div>
      </div>
    )
  }

  const links = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] py-5 sm:py-8 flex flex-col items-center justify-center">
        <div className='w-[80%] sm:w-[60%] h-auto flex flex-col justify-center'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>관련 URL</p>
          <a className='text-xs sm:text-sm font-thin mb-1 break-words' href='https://cutesnom.herokuapp.com/'> 웹 링크 : https://cutesnom.herokuapp.com/ </a>
          <a className='text-xs sm:text-sm font-thin break-words' href='https://github.com/kongsanggun/Taiko-Info'> 깃헙 : https://github.com/kongsanggun/Taiko-Info </a>
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
          <p className='text-xs sm:text-sm font-thin'>- 여러 가지 이유로 외부의 라이브러리를 끌어서 적용한 점이랑 적용하는 3D 모델의 수랑 용량이 크기 때문에 딜레이 시간이 생기는 편입니다.
          - 연동 서비스 같은 경우 병렬로 크롤링함에도 불구하고 가져 와야할 데이터가 많아 실행하는 시간이 길었습니다. (약 4분 소요)
          - 외부 아이디와 비밀번호를 통하여 불러오는 것이기 때문에 보안에 취약해지는 문제가 발생합니다.</p>
        </div>
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:mr-[20%] '>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>후기</p>
          <p className='text-xs sm:text-sm font-thin'>
          - 처음으로 단독으로 서버랑 프런트 엔드 웹 개발을 하느라 배울 기회가 많았습니다.
          - 추후 puppeteer 기능을 이용하여 데이터를 이미지로 변환하여 로컬 스토리지에 다운로드하는 기능과 소셜 로그인을 이용하여 웹 자체의 로그인 기능을 추가할 계획에 있다.
          - 배포 같은 경우 반쪽짜리 성공이어서 만일 여유가 된다면 개인 서버로 배포를 할 계획이 있다. </p>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-[#F9F9FB] dark:bg-[#232438] duration-200'>
      <Header Name={"태고 서열표 웹"} />
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

import React, { useEffect } from 'react';

import Header from '../components/project-header'
import Footer from '../components/footer'

function App() {

  var num = 0;

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
    num = (num + 1) % 2;
    pre()
  };

  const mi = () => {
    if (num === 0) num = 2 
    num = (num - 1) % 2;
    pre()
  };

  const pre = () => {
    let a = document.getElementById('p0') as HTMLElement
    let b = document.getElementById('p1') as HTMLElement

    let tar = document.getElementById('p'+num) as HTMLElement

    a.style.display = "none";
    b.style.display = "none";

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
          <img id = "p0" src='./img/project_3_1.jpg' alt="" className='w-full hidden duration-200'/>
          <img id = "p1" src='./img/project_3_2.png' alt="" className='w-full hidden duration-200'/>
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
          <p className='text-xs sm:text-sm font-thin mb-1'>담당 역할 : Puppeteer & Node.js를 이용한 기록 연동</p>
          <p className='text-xs sm:text-sm font-thin'>사용 언어 : TypeScript, React.js, Node.js, Puppeteer</p>
        </div>
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:mr-[20%]'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>설명</p>
          <p className='text-xs sm:text-sm font-thin'>‘태고의 달인’이라는 게임의 비공식 난이도 서열표를 웹으로 구현한 사이트입니다. 위 사이트의 주요 기능은 게임의 공식 유저 사이트인 '동더히로바'와의 기록과 연동하여 해당 기록을 서열표에 반영할 수 있는 기능입니다.</p>
        </div>
      </div>
    )
  }

  const links = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] py-5 sm:py-8 flex flex-col items-center justify-center">
        <div className='w-[80%] sm:w-[60%] h-auto flex flex-col justify-center'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>관련 URL</p>
          <p className='text-xs sm:text-sm font-thin mb-1'> 웹 링크 🖥 : <a className = 'break-words hover:cursor-pointer hover:bg-[#b8bbc7] dark:hover:bg-[#7d879c]' href='https://cutesnom.herokuapp.com/'> 웹 링크 : https://cutesnom.herokuapp.com/ </a> </p>
          <p className='text-xs sm:text-sm font-thin mb-1'> 깃헙 💻 : <a className = 'break-words hover:cursor-pointer hover:bg-[#b8bbc7] dark:hover:bg-[#7d879c]' href='https://github.com/kongsanggun/Taiko-Info'> 깃헙 : https://github.com/kongsanggun/Taiko-Info </a> </p>
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
              <h3 className="mb-1 sm:mb-3 text-base sm:text-lg font-semibold text-[#121316] dark:text-[#F9F9FB]">난이도 서열표 UI 작성</h3>
              <time className="block mb-2 sm:mb-4 text-xs sm:text-sm font-thin leading-none text-gray-400 dark:text-gray-500">2022.06.10 -2022.07.05</time>
              <p className="text-xs sm:text-sm font-thin text-gray-500 dark:text-gray-400">'태고의 달인'에 수록되어 있는 곡 정보를 이용하여 UI를 제작하였습니다.</p>
            </li>

            <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]" />
              <div className='h-4 mb-4 sm:h-6 sm:mb-6' />
              <h3 className="mb-1 sm:mb-3 text-base sm:text-lg font-semibold text-[#121316] dark:text-[#F9F9FB]">연동 기능 구현</h3>
              <time className="block mb-2 sm:mb-4 text-xs sm:text-sm font-thin leading-none text-gray-400 dark:text-gray-500">2022.07.06 -2022.07.15</time>
              <p className="text-xs sm:text-sm font-thin text-gray-500 dark:text-gray-400">Puppeteer에서 제공되는 크롤링 기능을 이용하여 유저의 기록 데이터를 수집하는 기능을 구현하였습니다.</p>
            </li>

            <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]" />
              <div className='h-4 mb-4 sm:h-6 sm:mb-6' />
              <h3 className="mb-1 sm:mb-3 text-base sm:text-lg font-semibold text-[#121316] dark:text-[#F9F9FB]">테스트 및 배포</h3>
              <time className="block mb-2 sm:mb-4 text-xs sm:text-sm font-thin leading-none text-gray-400 dark:text-gray-500">2022.07.16 -2022.08.01</time>
              <p className="text-xs sm:text-sm font-thin text-gray-500 dark:text-gray-400">주위의 지인들을 이용하여 일시적으로 서버를 열어 기능을 테스트 하였고 백엔드까지 적용이 가능한 Heroku 사이트를 이용하여 웹 페이지를 베포하였습니다.</p>
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
            - 모든 기록을 수집하기 위하여 약 1000개 이상의 페이지를 접속해야하기 때문에 병렬방식으로 정보를 수집함에도 불구하고 완료되기까지 약 4분 정도 시간이 소요되는 등 소요 시간을 줄이는 방안이 필요해보입니다.
          </p>
          <p className='text-xs sm:text-sm font-thin mb-[6px]'> 
            - 유저의 곡 기록을 가져오기 위해여 외부 아이디와 비밀번호가 필요하기 때문에 보안의 필요성이 있어보였습니다.
          </p>
          <p className='text-xs sm:text-sm font-thin mb-[6px]'> 
            - 웹 페이지를 배포시 배포 사이트의 메모리 초과로 인하여 주요 기능을 축소한 채 배포하였습니다. 추후 기회가 된다면 개인 서버 및 좀 더 나은 방법으로 배포를 하는 방안을 생각하고 있습니다.
          </p>
        </div>
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:mr-[20%] '>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>후기</p>
          <p className='text-xs sm:text-sm font-thin'>
            위 프로젝트는 평소에 제가 즐겨 하던 '태고의 달인' 게임의 난이도 서열표를 이미지로 수정하는 것이 아닌 웹 페이지를 구현하여 좀 더 쉽게 수정할 수 있는 것이 주요 동기였습니다.<br/> 
            게다가 게임 내의 유저 데이터를 가져와서 자신의 실력이 어느 정도 나타내었는지 알기 쉽게 알려 주기 위하여 연동 기능을 구현하게 되었습니다.<br/>
            위의 주 기능을 구현을 하기 위하여 아무리 웹 페이지를 조사해보아도 유저 데이터를 직접 가져오는 API가 없었습니다.<br/> 
            따라서 데이터를 가져오는 기능을 구현하기 위해서 puppeteer라는 라이브러리를 통하여 데이터를 자동으로 가져오는 기능을 구현하였습니다.<br/>  
            혼자서 개발을 하였기 때문에 설계 및 배포와 관련된 여러 가지 시행착오를 거쳤지만 배포에 문제가 생겨 비록 반쪽짜리 결과물을 낳게 되었지만,
            테스트를 통하여 해당 웹사이트를 이용한 주위 사람들의 긍정적인 반응을 직간접적으로 느끼게 되면서 개발에 대해 크나큰 자신감이 생기는 기회가 되었습니다.<br/>
            추후 웹 개발 실력을 키워서 위 웹페이지를 보완하게 된다면 puppeteer 라이브러리의 여러 기능을 이용하여 서열표를 이미지로 변환하여 로컬 스토리지에 다운로드하는 기능과
            소셜 로그인을 이용하여 웹 자체의 로그인 기능을 추가할 계획이 있습니다. 또한 백엔드 같은 경우 직접 로컬로 json을 불러오는 방식이 아닌 DB 서버를 이용하여 불러오는 방식으로 구현할 계획입니다.
          </p>
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

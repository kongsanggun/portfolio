import React, { useEffect } from 'react';

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
    num = (num + 1) % 3;
    pre()
  };

  const mi = () => {
    if (num === 0) num = 3 
    num = (num - 1) % 3;
    pre()
  };

  const pre = () => {
    let a = document.getElementById('p0') as HTMLElement
    let b = document.getElementById('p1') as HTMLElement
    let c = document.getElementById('p2') as HTMLElement

    let tar = document.getElementById('p'+num) as HTMLElement

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";

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
          <img id = "p0" src='./img/project_1_1.jpeg' alt="" className='w-full hidden duration-200'/>
          <img id = "p1" src='./img/project_1_2.jpg' alt="" className='w-full hidden duration-200'/>
          <img id = "p2" src='./img/project_1_3.jpg' alt="" className='w-full hidden duration-200'/>
        </div>
      </div>
    )
  }

  const detail1 = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] pt-10 sm:pt-12 sm:pb-8 flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:ml-[20%] mb-5 sm:mb-0 sm:mr-5'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>개요</p>
          <p className='text-xs sm:text-sm font-thin mb-1'>개발 기간 : 2022.03.24 -2022.06.03</p>
          <p className='text-xs sm:text-sm font-thin mb-1'>개발 인원 : 3명</p>
          <p className='text-xs sm:text-sm font-thin mb-1'>담당 역할 : React에 3D모델 적용, 얼굴 인식 라이브러리 적용, 기타 프런트엔드 수행</p>
          <p className='text-xs sm:text-sm font-thin'>사용 언어 : TypeScript, React.js, Three.js</p>
        </div>
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:mr-[20%]'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>설명</p>
          <p className='text-xs sm:text-sm font-thin'>카메라를 통하여 얼굴을 인식하여 고른 3D 액세서리를 덧붙여 화면에 출력 시킵니다. 또한 출력된 화면을 이미지 화면으로 캡쳐하여 로컬 스토로지에 저장하거나 SNS에 공유할 수 있습니다.</p>
        </div>
      </div>
    )
  }

  const links = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] py-5 sm:py-8 flex flex-col items-center justify-center">
        <div className='w-[80%] sm:w-[60%] h-auto flex flex-col justify-center'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>관련 URL</p>
          <p className='text-xs sm:text-sm font-thin mb-1'> 깃헙 💻 : <a className = 'break-words hover:cursor-pointer hover:bg-[#b8bbc7] dark:hover:bg-[#7d879c]' href='https://github.com/kongsanggun/AR_Randering'> https://github.com/kongsanggun/AR_Randering </a></p>
          <p className='text-xs sm:text-sm font-thin mb-1'> 영상 링크 🎥 : <a className = 'break-words hover:cursor-pointer hover:bg-[#b8bbc7] dark:hover:bg-[#7d879c]' href='https://www.youtube.com/watch?v=RStXu9YNDhM'> https://www.youtube.com/watch?v=RStXu9YNDhM </a></p>
          <p className='text-xs sm:text-sm font-thin mb-1'> 참고 라이브러리 👀 : <a className = 'break-words hover:cursor-pointer hover:bg-[#b8bbc7] dark:hover:bg-[#7d879c]' href='https://github.com/jeeliz/jeelizFaceFilter/tree/master/reactThreeFiberDemo'> https://github.com/jeeliz/jeelizFaceFilter/tree/master/reactThreeFiberDemo </a></p>
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
              <h3 className="mb-1 sm:mb-3 text-base sm:text-lg font-semibold text-[#121316] dark:text-[#F9F9FB]">계획 수립</h3>
              <time className="block mb-2 sm:mb-4 text-xs sm:text-sm font-thin leading-none text-gray-400 dark:text-gray-500"> 2022.03.24 -2022.04.19 </time>
              <p className="text-xs sm:text-sm font-thin text-gray-500 dark:text-gray-400">어떻게 웹 페이지를 제작할 것인가 팀원들끼리 계획하거나 논의하였습니다.</p>
            </li>

            <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]" />
              <div className='h-4 mb-4 sm:h-6 sm:mb-6' />
              <h3 className="mb-1 sm:mb-3 text-base sm:text-lg font-semibold text-[#121316] dark:text-[#F9F9FB]">3D 모델 적용</h3>
              <time className="block mb-2 sm:mb-4 text-xs sm:text-sm font-thin leading-none text-gray-400 dark:text-gray-500"> 2022.04.20 -2022.05.13 </time>
              <p className="text-xs sm:text-sm font-thin text-gray-500 dark:text-gray-400">Three.js와 얼굴 인식 라이브러리를 이용하여 3D 액세사리 모델이 나올 수 있도록 구현하였습니다.</p>
            </li>

            <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]" />
              <div className='h-4 mb-4 sm:h-6 sm:mb-6' />
              <h3 className="mb-1 sm:mb-3 text-base sm:text-lg font-semibold text-[#121316] dark:text-[#F9F9FB]">화면을 이미지로 저장</h3>
              <time className="block mb-2 sm:mb-4 text-xs sm:text-sm font-thin leading-none text-gray-400 dark:text-gray-500"> 2022.05.14 -2022.05.20 </time>
              <p className="text-xs sm:text-sm font-thin text-gray-500 dark:text-gray-400">촬영 버튼을 누르면 화면을 jpg화면으로 변경하는 기능을 구현하였습니다.</p>
            </li>

            <li className="ml-4 sm:ml-6 mb-4 sm:mb-6 h-auto">
              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-[#232438] rounded-full dark:bg-[#F9F9FB]" />
              <div className='h-4 mb-4 sm:h-6 sm:mb-6' />
              <h3 className="mb-1 sm:mb-3 text-base sm:text-lg font-semibold text-[#121316] dark:text-[#F9F9FB]">웹 UI 적용 및 마무리 작업</h3>
              <time className="block mb-2 sm:mb-4 text-xs sm:text-sm font-thin leading-none text-gray-400 dark:text-gray-500"> 2022.05.21 -2022.06.03 </time>
              <p className="text-xs sm:text-sm font-thin text-gray-500 dark:text-gray-400">사용자들이 쉽게 이용할 수 있도록 프런트 엔드 작업 및 마무리 작업을 진행하였습니다.</p>
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
            - 외부의 라이브러리를 사용하여 웹 페이지를 불러오거나, 불러오는 3D 모델의 수 및 불러오는 용량이 크기 때문에 적용하기까지의 시간이 30초 정도 생기는 편입니다. 다음에 딜레이 시간을 줄이기 위해서 모델을 불러올 때 전부 불러오는 것이 아닌 선택된 액세서리만 각각 불러오는 방향으로 개선하면 좋을 것 같습니다.
          </p>
          <p className='text-xs sm:text-sm font-thin mb-[6px]'> 
            - 웹 UI 제작을 담당하면서 모바일과 브라우저 둘 다 적용 할 수 있는 반응형 웹 제작으로 만들 때 어려움을 많이 겪었습니다. 떄문에 코드가 제대로 깔끔하지 않게 작성되어서 아쉬었습니다.
          </p>
          <p className='text-xs sm:text-sm font-thin'> 
            - 저를 포함한 팀원 중에서 웹 백엔드 분야를 공부한 사람들이 없어서 SNS를 통하여 공유하는 기능을 제작할 때 문제가 많이 발생하였습니다. 결국엔 반쪽짜리 기능이 되어버렸지만 다음에 기능을 보완하기 위해서 REST API를 이용하거나 로그인 기능을 활용하는 방향으로 나가가도록 하겠습니다.   
          </p>
        </div>
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:mr-[20%] '>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>후기</p>
          <p className='text-xs sm:text-sm font-thin'>
            위 프로젝트는 졸업 프로젝트의 주제인 얼굴을 인식하는 만드는 주제에 팀원 중에 AR를 접목시키면 어떠나는 의견을 적용하여 만든 프로젝트입니다.<br/>
            초기에는 웹과 앱 동시에 적용되는 React Native 위주의 개발을 고안하였지만 개발환경을 설정하는 데에 많은 어려움을 느껴 웹을 통하여 적용되는 서비스로 변하게 되었습니다.<br/>
            위의 웹 페이지를 개발하기 위하여 매주 금요일 오후마다 팀원들끼리 모아서 논의를 하면서 점차 수정하는 쪽으로 나아갔습니다.<br/>
            얼굴 인식 구현같은 경우 시간이 촉박하였기 때문에 일일이 얼굴 데이터를 모으기 보다는 외부 라이브러리를 이용하여 구현하는 쪽으로 나아갔습니다.<br/>
            3D 모델 같은 경우 외부의 3D를 이용하여 액세사리 별로 구분하였습니다. 처음에는 모자를 적용하였지만 담당 교수님의 제안으로 모자대신 안경으로 변경하게 되었습니다.<br/>  
            아쉽게도 시중에 위와 같은 기능을 가지고 있는 기능과의 차별점을 가지지 못하여 교내 대회의 입상에 실패하였지만 리엑트를 처음 접하는 만큼 어떻게 개발해야할지 알게 되는 시간이었습니다.<br/>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-[#F9F9FB] dark:bg-[#232438] duration-200'>
      <Header Name={"Face Accessary Studio"} />
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

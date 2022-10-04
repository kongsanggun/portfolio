import React, { useEffect, useState } from 'react';

const HeaderComp = () => {

  const clickA = () => {
    let a = document.getElementById('sa') as HTMLElement
    let b = document.getElementById('sb') as HTMLElement
    let c = document.getElementById('sc') as HTMLElement
    let d = document.getElementById('sd') as HTMLElement
    let e = document.getElementById('se') as HTMLElement
    let f = document.getElementById('sf') as HTMLElement

    let a_b = document.getElementById('sa_btt') as HTMLElement
    let b_b = document.getElementById('sb_btt') as HTMLElement
    let c_b = document.getElementById('sc_btt') as HTMLElement
    let d_b = document.getElementById('sd_btt') as HTMLElement
    let e_b = document.getElementById('se_btt') as HTMLElement
    let f_b = document.getElementById('sf_btt') as HTMLElement

    a.style.display = "flex";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";

    a_b.style.opacity = "1";
    a_b.style.backgroundColor = "#E1E3EC";
    b_b.style.opacity = ".5";
    b_b.style.backgroundColor = "";
    c_b.style.opacity = ".5";
    c_b.style.backgroundColor = "";
    d_b.style.opacity = ".5";
    d_b.style.backgroundColor = "";
    e_b.style.opacity = ".5";
    e_b.style.backgroundColor = "";
    f_b.style.opacity = ".5";
    f_b.style.backgroundColor = "";
  }

  const clickB = () => {
    let a = document.getElementById('sa') as HTMLElement
    let b = document.getElementById('sb') as HTMLElement
    let c = document.getElementById('sc') as HTMLElement
    let d = document.getElementById('sd') as HTMLElement
    let e = document.getElementById('se') as HTMLElement
    let f = document.getElementById('sf') as HTMLElement

    let a_b = document.getElementById('sa_btt') as HTMLElement
    let b_b = document.getElementById('sb_btt') as HTMLElement
    let c_b = document.getElementById('sc_btt') as HTMLElement
    let d_b = document.getElementById('sd_btt') as HTMLElement
    let e_b = document.getElementById('se_btt') as HTMLElement
    let f_b = document.getElementById('sf_btt') as HTMLElement

    a.style.display = "none";
    b.style.display = "flex";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";

    a_b.style.opacity = ".5";
    a_b.style.backgroundColor = "";
    b_b.style.opacity = "1";
    b_b.style.backgroundColor = "#E1E3EC";
    c_b.style.opacity = ".5";
    c_b.style.backgroundColor = "";
    d_b.style.opacity = ".5";
    d_b.style.backgroundColor = "";
    e_b.style.opacity = ".5";
    e_b.style.backgroundColor = "";
    f_b.style.opacity = ".5";
    f_b.style.backgroundColor = "";

  }

  const clickC = () => {
    let a = document.getElementById('sa') as HTMLElement
    let b = document.getElementById('sb') as HTMLElement
    let c = document.getElementById('sc') as HTMLElement
    let d = document.getElementById('sd') as HTMLElement
    let e = document.getElementById('se') as HTMLElement
    let f = document.getElementById('sf') as HTMLElement

    let a_b = document.getElementById('sa_btt') as HTMLElement
    let b_b = document.getElementById('sb_btt') as HTMLElement
    let c_b = document.getElementById('sc_btt') as HTMLElement
    let d_b = document.getElementById('sd_btt') as HTMLElement
    let e_b = document.getElementById('se_btt') as HTMLElement
    let f_b = document.getElementById('sf_btt') as HTMLElement

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "flex";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";

    a_b.style.opacity = ".5";
    a_b.style.backgroundColor = "";
    b_b.style.opacity = ".5";
    b_b.style.backgroundColor = "";
    c_b.style.opacity = "1";
    c_b.style.backgroundColor = "#E1E3EC";
    d_b.style.opacity = ".5";
    d_b.style.backgroundColor = "";
    e_b.style.opacity = ".5";
    e_b.style.backgroundColor = "";
    f_b.style.opacity = ".5";
    f_b.style.backgroundColor = "";

  }

  const clickD = () => {
    let a = document.getElementById('sa') as HTMLElement
    let b = document.getElementById('sb') as HTMLElement
    let c = document.getElementById('sc') as HTMLElement
    let d = document.getElementById('sd') as HTMLElement
    let e = document.getElementById('se') as HTMLElement
    let f = document.getElementById('sf') as HTMLElement

    let a_b = document.getElementById('sa_btt') as HTMLElement
    let b_b = document.getElementById('sb_btt') as HTMLElement
    let c_b = document.getElementById('sc_btt') as HTMLElement
    let d_b = document.getElementById('sd_btt') as HTMLElement
    let e_b = document.getElementById('se_btt') as HTMLElement
    let f_b = document.getElementById('sf_btt') as HTMLElement

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "flex";
    e.style.display = "none";
    f.style.display = "none";

    a_b.style.opacity = ".5";
    a_b.style.backgroundColor = "";
    b_b.style.opacity = ".5";
    b_b.style.backgroundColor = "";
    c_b.style.opacity = ".5";
    c_b.style.backgroundColor = "";
    d_b.style.opacity = "1";
    d_b.style.backgroundColor = "#E1E3EC";
    e_b.style.opacity = ".5";
    e_b.style.backgroundColor = "";
    f_b.style.opacity = ".5";
    f_b.style.backgroundColor = "";
  }

  const clickE = () => {
    let a = document.getElementById('sa') as HTMLElement
    let b = document.getElementById('sb') as HTMLElement
    let c = document.getElementById('sc') as HTMLElement
    let d = document.getElementById('sd') as HTMLElement
    let e = document.getElementById('se') as HTMLElement
    let f = document.getElementById('sf') as HTMLElement

    let a_b = document.getElementById('sa_btt') as HTMLElement
    let b_b = document.getElementById('sb_btt') as HTMLElement
    let c_b = document.getElementById('sc_btt') as HTMLElement
    let d_b = document.getElementById('sd_btt') as HTMLElement
    let e_b = document.getElementById('se_btt') as HTMLElement
    let f_b = document.getElementById('sf_btt') as HTMLElement

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "flex";
    f.style.display = "none";

    a_b.style.opacity = ".5";
    a_b.style.backgroundColor = "";
    b_b.style.opacity = ".5";
    b_b.style.backgroundColor = "";
    c_b.style.opacity = ".5";
    c_b.style.backgroundColor = "";
    d_b.style.opacity = ".5";
    d_b.style.backgroundColor = "";
    e_b.style.opacity = "1";
    e_b.style.backgroundColor = "#E1E3EC";
    f_b.style.opacity = ".5";
    f_b.style.backgroundColor = "";
  }

  const clickF = () => {
    let a = document.getElementById('sa') as HTMLElement
    let b = document.getElementById('sb') as HTMLElement
    let c = document.getElementById('sc') as HTMLElement
    let d = document.getElementById('sd') as HTMLElement
    let e = document.getElementById('se') as HTMLElement
    let f = document.getElementById('sf') as HTMLElement

    let a_b = document.getElementById('sa_btt') as HTMLElement
    let b_b = document.getElementById('sb_btt') as HTMLElement
    let c_b = document.getElementById('sc_btt') as HTMLElement
    let d_b = document.getElementById('sd_btt') as HTMLElement
    let e_b = document.getElementById('se_btt') as HTMLElement
    let f_b = document.getElementById('sf_btt') as HTMLElement

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "flex";

    a_b.style.opacity = ".5";
    a_b.style.backgroundColor = "";
    b_b.style.opacity = ".5";
    b_b.style.backgroundColor = "";
    c_b.style.opacity = ".5";
    c_b.style.backgroundColor = "";
    d_b.style.opacity = ".5";
    d_b.style.backgroundColor = "";
    e_b.style.opacity = ".5";
    e_b.style.backgroundColor = "";
    f_b.style.opacity = "1";
    f_b.style.backgroundColor = "#E1E3EC";
  }

  useEffect(() => {
    clickA()
  }, [])

  return (
    <div className="w-full h-auto text-[#121316] py-6 sm:py-8 border-b-[1.5px] border-b-[#BEC0D7] flex flex-col items-center">
      <div id="S2" className='dark:text-[#F9F9FB] text-3xl sm:text-5xl my-2 sm:my-5 font-["JetBrains_Mono"] font-bold w-[auto] h-auto duration-200'>Skills</div>

      <div className="w-[90%] max-w-[720px] h-[425px] sm:h-[490px] mt-5 mb-10 rounded-md border-[3px] border-[#E1E3EC] bg-[#F9F9FB] dark:bg-[#a9b5cf]">
        <div className="w-full h-[45px] sm:h-[90px] font-['JetBrains_Mono'] font-light flex items-center justify-center">
          <div id='sa_btt' className="w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#E1E3EC] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => { clickA() }}> <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="HTML5 Powered" title="HTML5 Powered" className="h-[32px] w-[32px] sm:h-[64px] sm:w-[64px]" /> </div>
          <div id='sb_btt' className="w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#E1E3EC] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => { clickB() }}> <img src='img/logo192.png' alt="React" className="h-[32px] w-[32px] sm:h-[64px] sm:w-[64px]" /> </div>
          <div id='sc_btt' className="w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#E1E3EC] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => { clickC() }}> <img src='img/nodejs.png' alt="nodejs" className="h-[32px] w-[32px] sm:h-[64px] sm:w-[64px]" /> </div>
          <div id='sd_btt' className="w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#E1E3EC] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => { clickD() }}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" className="h-[32px] w-[32px] sm:h-[64px] sm:w-[64px]"><g clipPath="url(#prefix__clip0)"><path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd" /></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath></defs></svg> </div>
          <div id='se_btt' className="w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#E1E3EC] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => { clickE() }}> <img src='img/Git-Icon-1788C.png' alt="git" className="h-[32px] w-[32px] sm:h-[64px] sm:w-[64px]" /> </div>
          <div id='sf_btt' className="w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#E1E3EC] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => { clickF() }}> <img src='img/GitHub-Mark-64px.png' alt="git_action" className="h-[32px] w-[32px] sm:h-[64px] sm:w-[64px]" /> </div>
        </div>

        <div className="w-full h-[374px] sm:h-[394px] bg-[#E1E3EC] text-[#121316] font-['Nanum_Gothic']">
          <div id='sa' className="w-full h-full hidden flex-col items-center">
            <div className='w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] mt-1 sm:mt-2 flex items-center justify-center'>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="HTML5 Powered" title="HTML5 Powered" className="h-[32px] w-[32px] sm:h-[64px] sm:w-[64px]" />
            </div>
            <div className='w-auto h-auto text-lg sm:text-2xl font-bold'>
              HTML {"&&"} CSS
            </div>
            <div className='w-[90%] sm:w-4/5 h-auto text-sm sm:text-base my-2 sm:my-4 text-gray-500'>
              <p>웹프로그래밍 강의를 접하게 되면서 알게 된 프로그래밍 언어들입니다.</p>
              <p>강의를 들으면서 알려주신 사이트를 통하여 어떻게 개발하는지 알게 되었습니다.</p>
              <p>방학 때 위의 언어들을 활용하여 웹을 구현하는 스터디를 진행하였습니다.</p>
              <p>그러나 React.js를 위주로 웹을 제작하게 되면서 순수 HTML로 웹을 제작하고 있지는 않고 있습니다.</p>
              <p>CSS 또한 Tailwand.css로 넘어가게 되면서 사용하는 빈도가 줄게 되었습니다.</p>
            </div>
          </div>

          <div id='sb' className="w-full h-full hidden flex-col items-center">
            <div className='w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] mt-1 sm:mt-2 flex items-center justify-center'>
              <img src='img/logo192.png' alt="React" className='h-[32px] w-[32px] sm:h-[64px] sm:w-[64px]' />
            </div>
            <div className='w-auto h-auto text-lg sm:text-2xl font-bold'>
              React.js
            </div>
            <div className='w-[90%] sm:w-4/5 h-auto text-sm sm:text-base my-2 sm:my-4 text-gray-500'>
              <p>졸업 프로젝트 용도로 웹 개발을 진행하였을 때 처음 접해보았습니다.</p>
              <p>위의 언어의 최대 장점은 기존 HTML로 진행하였을 때 index.html 파일을 직접 수정 및 열람할 필요 없이 개발한 내역을 바로 웹 페이지로 반영한다는 점 입니다.</p>
              <p>또한 useEffect, useState 등 React에서 지원해주는 기능이 유용하여 지금까지도 프론트 엔드를 제작할 때 쓰이고 있는 언어입니다.</p>
            </div>
          </div>

          <div id='sc' className="w-full h-full hidden flex-col items-center">
            <div className='w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] mt-1 sm:mt-2 flex items-center justify-center'>
              <img src='img/nodejs.png' alt="nodejs" className='h-[32px] w-[32px] sm:h-[64px] sm:w-[64px]' />
            </div>
            <div className='w-auto h-auto text-lg sm:text-2xl font-bold'>
              Node.js
            </div>
            <div className='w-[90%] sm:w-4/5 h-auto text-sm sm:text-base my-2 sm:my-4 text-gray-500'>
              <p>토이 프로젝트 작업 중 데이터를 가져오는 기능을 구현하기 위해여 고민 중 Node.js를 접하게 되었습니다.</p>
              <p>위의 언어와 Express를 이용하여 데이터를 요청하면 정보를 수집하여 웹페이지에 나타내는 기능을 만들었고 그 이후 로그인 기능 제작 및 직접 개발한 서버리스 예제 제작 등 많은 도움을 주었습니다.</p>
            </div>
          </div>

          <div id='sd' className="w-full h-full hidden flex-col items-center">
            <div className='w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] mt-1 sm:mt-2 flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" className="h-[32px] w-[32px] sm:h-[64px] sm:w-[64px]"><g clipPath="url(#prefix__clip0)"><path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd" /></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath></defs></svg>
            </div>
            <div className='w-auto h-auto text-lg sm:text-2xl font-bold'>
              Tailwand.css
            </div>
            <div className='w-[90%] sm:w-4/5 h-auto text-sm sm:text-base my-2 sm:my-4 text-gray-500'>
              <p>프로젝트를 진행 중 팀원이 알려 준 것을 계기로 접하게 되었습니다.</p>
              <p>별도의 css 파일을 생성하여 만들 필요 없어 className을 이용하여 css를 정할 수 있는 것이 매력적으로 느껴졌습니다.</p>
              <p>이러한 이유로 웹 개발 할 때 애용하고 있는 css입니다.</p>
            </div>
          </div>

          <div id='se' className="w-full h-full hidden flex-col items-center">
            <div className='w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] mt-1 sm:mt-2 flex items-center justify-center'>
            <img src='img/Git-Icon-1788C.png' alt="git" className="h-[32px] w-[32px] sm:h-[64px] sm:w-[64px]" />
            </div>
            <div className='w-auto h-auto text-lg sm:text-2xl font-bold'>
              Git
            </div>
            <div className='w-[90%] sm:w-4/5 h-auto text-sm sm:text-base my-2 sm:my-4 text-gray-500'>
              <p>여러 프로젝트를 통하여 다른 팀원들과 코드 수정을 수월하게 하기 위하여 자연스럽게 접하게 되었습니다.</p>
              <p>목적에 따라 branch를 나뉘어 푸시 하거나 magre하는 등이 특징입니다.</p>
              <p>코드를 공유하거나 기능을 개발하기 위하여 참고할 수 있는 용도 등으로 쓰이고 있습니다.</p>
            </div>
          </div>

          <div id='sf' className="w-full h-full hidden flex-col items-center">
            <div className='w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] mt-1 sm:mt-2 flex items-center justify-center'>
            <img src='img/GitHub-Mark-64px.png' alt="git_action" className="h-[32px] w-[32px] sm:h-[64px] sm:w-[64px]" />
            </div>
            <div className='w-auto h-auto text-lg sm:text-2xl font-bold'>
              Github Action
            </div>
            <div className='w-[90%] sm:w-4/5 h-auto text-sm sm:text-base my-2 sm:my-4 text-gray-500'>
              <p>웹 사이트 배포를 하기 위하여 지인에게 물어보면서 접하게 되었습니다.</p>
              <p>다른 배포 서비스와 달리 깃헙에서 푸시를 한다면 자동으로 배포를 하게 된다는 점에서 매력을 느껴 여기서 배포하고 있습니다.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeaderComp;
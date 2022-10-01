import React, { useEffect, useState } from 'react';

const HeaderComp = () => {

  const clickA = () => {
    let a = document.getElementById('sa') as HTMLElement
    let b = document.getElementById('sb') as HTMLElement
    let c = document.getElementById('sc') as HTMLElement
    let d = document.getElementById('sd') as HTMLElement

    let a_b = document.getElementById('sa_btt') as HTMLElement
    let b_b = document.getElementById('sb_btt') as HTMLElement
    let c_b = document.getElementById('sc_btt') as HTMLElement
    let d_b = document.getElementById('sd_btt') as HTMLElement

    a.style.display = "flex";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";

    a_b.style.opacity = "1";
    a_b.style.backgroundColor = "#a9b5cf";
    b_b.style.opacity = ".5";
    b_b.style.backgroundColor = "";
    c_b.style.opacity = ".5";
    c_b.style.backgroundColor = "";
    d_b.style.opacity = ".5";
    d_b.style.backgroundColor = "";
  }

  const clickB = () => {
    let a = document.getElementById('sa') as HTMLElement
    let b = document.getElementById('sb') as HTMLElement
    let c = document.getElementById('sc') as HTMLElement
    let d = document.getElementById('sd') as HTMLElement

    let a_b = document.getElementById('sa_btt') as HTMLElement
    let b_b = document.getElementById('sb_btt') as HTMLElement
    let c_b = document.getElementById('sc_btt') as HTMLElement
    let d_b = document.getElementById('sd_btt') as HTMLElement

    a.style.display = "none";
    b.style.display = "flex";
    c.style.display = "none";
    d.style.display = "none";
    
    a_b.style.opacity = ".5";
    a_b.style.backgroundColor = "";
    b_b.style.opacity = "1";
    b_b.style.backgroundColor = "#a9b5cf";
    c_b.style.opacity = ".5";
    c_b.style.backgroundColor = "";
    d_b.style.opacity = ".5";
    d_b.style.backgroundColor = "";

  }

  const clickC = () => {
    let a = document.getElementById('sa') as HTMLElement
    let b = document.getElementById('sb') as HTMLElement
    let c = document.getElementById('sc') as HTMLElement
    let d = document.getElementById('sd') as HTMLElement

    let a_b = document.getElementById('sa_btt') as HTMLElement
    let b_b = document.getElementById('sb_btt') as HTMLElement
    let c_b = document.getElementById('sc_btt') as HTMLElement
    let d_b = document.getElementById('sd_btt') as HTMLElement

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "flex";
    d.style.display = "none";
    
    a_b.style.opacity = ".5";
    a_b.style.backgroundColor = "";
    b_b.style.opacity = ".5";
    b_b.style.backgroundColor = "";
    c_b.style.opacity = "1";
    c_b.style.backgroundColor = "#a9b5cf";
    d_b.style.opacity = ".5";
    d_b.style.backgroundColor = "";

  }

  const clickD = () => {
    let a = document.getElementById('sa') as HTMLElement
    let b = document.getElementById('sb') as HTMLElement
    let c = document.getElementById('sc') as HTMLElement
    let d = document.getElementById('sd') as HTMLElement

    let a_b = document.getElementById('sa_btt') as HTMLElement
    let b_b = document.getElementById('sb_btt') as HTMLElement
    let c_b = document.getElementById('sc_btt') as HTMLElement
    let d_b = document.getElementById('sd_btt') as HTMLElement

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "flex";
    
    a_b.style.opacity = ".5";
    a_b.style.backgroundColor = "";
    b_b.style.opacity = ".5";
    b_b.style.backgroundColor = "";
    c_b.style.opacity = ".5";
    c_b.style.backgroundColor = "";
    d_b.style.opacity = "1";
    d_b.style.backgroundColor = "#a9b5cf";
  }

  useEffect(() => {
    clickA()
  }, [])

  return (
      <div className = "w-full h-auto text-[#121316] py-3 sm:py-4 border-b-[1.5px] border-b-[#BEC0D7] flex flex-col items-center">
        <div id = "S2" className = 'dark:text-[#F9F9FB] text-3xl sm:text-5xl my-2 sm:my-5 font-["JetBrains_Mono"] font-bold w-[auto] h-auto duration-200'>Skills</div>
        
        <div className = "bg-[#E1E3EC] w-[90%] max-w-[720px] h-[500px] sm:h-[720px] mt-5 mb-10 rounded-md">
          <div className = "w-full h-[70px] sm:h-[90px] font-['JetBrains_Mono'] font-light flex items-center justify-center"> 
            <div id = 'sa_btt' className = "w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#a9b5cf] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => {clickA()}}> <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" width="63" height="64" alt="HTML5 Powered" title="HTML5 Powered"/> </div>
            <div id = 'sb_btt' className = "w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#a9b5cf] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => {clickB()}}> <img src='img/logo192.png' alt="React" width="63" height="64"/> </div>
            <div id = 'sc_btt' className = "w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#a9b5cf] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => {clickC()}}>  <img src='img/nodejs.png' alt="nodejs" width="63" height="64"/> </div>
            <div id = 'sd_btt' className = "w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#a9b5cf] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => {clickD()}}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" className="h-[63px] w-[64px]"><g clipPath="url(#prefix__clip0)"><path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"  /></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg> </div>
          </div>

        <div className="w-full h-[430px] sm:h-[630px] text-xl sm:text-3xl bg-[#a9b5cf] text-[#121316] font-['Nanum_Gothic'] rounded-b-md">
          <div id='sa' className="w-full h-full hidden flex-col items-center">
            <div className='w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] flex items-center justify-center'>
              <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" width="63" height="64" alt="HTML5 Powered" title="HTML5 Powered" />
            </div>
            <div className='w-auto h-auto text-xl sm:text-3xl my-2 font-bold'>
              HTML
            </div>
            <div className='w-4/5 h-auto text-base sm:text-base my-2'>
              <p>대학 때 다시 웹개발을 잡게 되면서 처음에 사용했던 언어이다.</p>
              <p>방학 때 여러가지 과제 등을 통하여 위의 언어를 익혔다.</p>
              <p>그러나 React등 라이브러리 위주로 제작하게 되면서 HTML 개발 빈도는 점점 줄어들게 되었다.</p>
            </div>
          </div>

          <div id = 'sb' className = "w-full h-full hidden flex-col items-center"> 
            <div className='w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] my-1 flex items-center justify-center'>
              <img src='img/logo192.png' alt="React" width="63" height="64"/>
            </div>
            <div className='w-auto h-auto text-xl sm:text-3xl my-2 font-bold'>
              React.js
            </div>
            <div className='w-4/5 h-auto text-base sm:text-base my-2'>
              <p>현재 프론트 웹 개발을 할 때 위주로 많이 사용하는 언어이다.</p>
              <p>졸업 프로젝트를 진행 할 때 처음 접해보았다.</p>
              <p>아래의 프로젝트 대부분이 위의 언어를 기반으로 제작되었다.</p>
            </div>
          </div>

          <div id = 'sc' className = "w-full h-full hidden flex-col items-center"> 
            <div className='w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] flex items-center justify-center'>
              <img src='img/nodejs.png' alt="nodejs" width="63" height="64"/>
            </div>
            <div className='w-auto h-auto text-xl sm:text-3xl my-2 font-bold'>
              Node.js
            </div>
            <div className='w-4/5 h-auto text-base sm:text-base my-2'>
              <p>웹 페이지 내의 기능을 구현 할 때 사용한 언어이다.</p>
              <p>밑의 토이 프로젝트를 진행 할 때랑 예제 등을 제작할 때 사용하였다.</p>
              <p></p>
            </div>
          </div>

          <div id = 'sd' className = "w-full h-full hidden flex-col items-center"> 
            <div className='w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" className="h-[63px] w-[64px]"><g clipPath="url(#prefix__clip0)"><path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"  /></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>
            </div>
            <div className='w-auto h-auto text-xl sm:text-3xl my-2 font-bold'>
              Tailwand
            </div>
            <div className='w-4/5 h-auto text-base sm:text-base my-2'>
              <p>최근 css 대신 애용하고 있는 css 라이브러리다.</p>
              <p></p>
            </div>
          </div>

        </div>

          

          

        </div>
      </div>
  )
}

export default HeaderComp;
import React, { useEffect, useState } from 'react';

const HeaderComp = () => {
  const clickA = () => {
    let a = document.getElementById('a') as HTMLElement
    let b = document.getElementById('b') as HTMLElement
    let c = document.getElementById('c') as HTMLElement

    let a_b = document.getElementById('a_btt') as HTMLElement
    let b_b = document.getElementById('b_btt') as HTMLElement
    let c_b = document.getElementById('c_btt') as HTMLElement

    a.style.display = "flex";
    b.style.display = "none";
    c.style.display = "none";

    a_b.style.opacity = "1";
    a_b.style.backgroundColor = "#a9b5cf";
    b_b.style.opacity = ".5";
    b_b.style.backgroundColor = "";
    c_b.style.opacity = ".5";
    c_b.style.backgroundColor = "";
  }

  const clickB = () => {
    let a = document.getElementById('a') as HTMLElement
    let b = document.getElementById('b') as HTMLElement
    let c = document.getElementById('c') as HTMLElement

    let a_b = document.getElementById('a_btt') as HTMLElement
    let b_b = document.getElementById('b_btt') as HTMLElement
    let c_b = document.getElementById('c_btt') as HTMLElement

    a.style.display = "none";
    b.style.display = "flex";
    c.style.display = "none";

    a_b.style.opacity = ".5";
    a_b.style.backgroundColor = "";
    b_b.style.opacity = "1";
    b_b.style.backgroundColor = "#a9b5cf";
    c_b.style.opacity = ".5";
    c_b.style.backgroundColor = "";
  }

  const clickC = () => {
    let a = document.getElementById('a') as HTMLElement
    let b = document.getElementById('b') as HTMLElement
    let c = document.getElementById('c') as HTMLElement

    let a_b = document.getElementById('a_btt') as HTMLElement
    let b_b = document.getElementById('b_btt') as HTMLElement
    let c_b = document.getElementById('c_btt') as HTMLElement

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "flex";

    a_b.style.opacity = ".5";
    a_b.style.backgroundColor = "";
    b_b.style.opacity = ".5";
    b_b.style.backgroundColor = "";
    c_b.style.opacity = "1";
    c_b.style.backgroundColor = "#a9b5cf";
  }

  useEffect(() => {
    clickA()
  }, [])

  return (
      <div className = "w-full h-auto text-[#121316] py-3 sm:py-4 border-b-[1.5px] border-b-[#BEC0D7] flex flex-col items-center">
        <div id = "S1" className = 'dark:text-[#F9F9FB] text-3xl sm:text-5xl my-2 sm:my-5 font-["JetBrains_Mono"] font-bold w-[auto] h-auto duration-200'>Profile</div>

        <div className = "bg-[#E1E3EC] w-[90%] max-w-[720px] h-[200px] sm:h-[300px] mt-5 mb-10 rounded-md">
          <div className = "w-full h-[70px] sm:h-[90px] font-['JetBrains_Mono'] font-light flex items-center justify-center"> 
            <div id = 'a_btt' className = "w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#a9b5cf] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => {clickA()}}> Birth </div>
            <div id = 'b_btt' className = "w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#a9b5cf] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => {clickB()}}> Contact </div>
            <div className = "w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#a9b5cf] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => { window.open('https://github.com/kongsanggun'); return false }}> <img src='img/GitHub-Mark-64px.png' alt="깃헙 바로가기"/> </div>
            <div id = 'c_btt' className = "w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#a9b5cf] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => {clickC()}}> Etc </div>
          </div>
          <div className = "w-full h-[130px] sm:h-[210px] text-xl sm:text-3xl bg-[#a9b5cf] text-[#121316] font-['Nanum_Gothic'] font-bold rounded-b-md"> 
            <div id = 'a' className='w-full h-full hidden flex-col items-center justify-center'>
              <p className='mb-2'> 공상현 </p>
              <p className='mb-2'> Kong Sang Hyean</p>
              <p> 1997.12.24 </p>
            </div>
            <div id = 'b' className='w-full h-full hidden flex-col items-center justify-center'>
              <p className='mb-2'> Phone : 010-3193-7133 </p>
              <p> E-mail : dodoi77@naver.com </p>
            </div>
            <div id = 'c' className='w-full h-full hidden flex-col items-center justify-center'>
              <p className='text-xl sm:text-2xl mb-3'>저를 간단히 정의하자면?</p>
              <p className='text-base sm:text-lg'>계획적인 생활 및 꾸준함</p>
              <p className='text-base sm:text-lg'>여러 프로젝트 경험</p>
              <p className='text-base sm:text-lg'>여러가지 언어를 배우려는 자세</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeaderComp;
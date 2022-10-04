import React, { useEffect, useState } from 'react';

const HeaderComp = () => {
  const clickA = () => {
    let a = document.getElementById('a') as HTMLElement
    let b = document.getElementById('b') as HTMLElement

    let a_b = document.getElementById('a_btt') as HTMLElement
    let b_b = document.getElementById('b_btt') as HTMLElement

    a.style.display = "flex";
    b.style.display = "none";

    a_b.style.opacity = "1";
    a_b.style.backgroundColor = "#E1E3EC";
    b_b.style.opacity = ".5";
    b_b.style.backgroundColor = "";
  }

  const clickB = () => {
    let a = document.getElementById('a') as HTMLElement
    let b = document.getElementById('b') as HTMLElement

    let a_b = document.getElementById('a_btt') as HTMLElement
    let b_b = document.getElementById('b_btt') as HTMLElement

    a.style.display = "none";
    b.style.display = "flex";

    a_b.style.opacity = ".5";
    a_b.style.backgroundColor = "";
    b_b.style.opacity = "1";
    b_b.style.backgroundColor = "#E1E3EC";
  }

  useEffect(() => {
    clickA()
  }, [])

  return (
      <div className = "w-full h-auto text-[#121316] py-6 sm:py-8 border-b-[1.5px] border-b-[#E1E3EC] flex flex-col items-center">
        <div id = "S1" className = 'dark:text-[#F9F9FB] text-3xl sm:text-5xl my-2 sm:my-5 font-["JetBrains_Mono"] font-bold w-[auto] h-auto duration-200'>Profile</div>

        <div className = "w-[90%] max-w-[720px] h-[175px] sm:h-[300px] mt-5 mb-10 rounded-md border-[3px] border-[#E1E3EC] bg-[#F9F9FB] dark:bg-[#a9b5cf] ">
          <div className = "w-full h-[45px] sm:h-[90px] font-['JetBrains_Mono'] text-[9px] sm:text-lg font-light flex items-center justify-center"> 
            <div id = 'a_btt' className = "w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#E1E3EC] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => {clickA()}}> Birth </div>
            <div id = 'b_btt' className = "w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#E1E3EC] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => {clickB()}}> Contact </div>
            <div className = "w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] opacity-50 hover:bg-[#E1E3EC] hover:opacity-80 flex items-center justify-center duration-150" onClick={() => { window.open('https://github.com/kongsanggun'); return false }}><img src='img/GitHub-Mark-64px.png' alt="git_action" className="h-[32px] w-[32px] sm:h-[64px] sm:w-[64px]" /></div>

          </div>
          <div className = "w-full h-[124px] sm:h-[204px] text-lg sm:text-2xl bg-[#E1E3EC] font-['Nanum_Gothic'] font-bold"> 
            <div id = 'a' className='w-full h-full hidden flex-col items-center justify-center duration-200'>
              <p className='mb-2'> Kong Sang Hyean</p>
              <p> 1997.12.24 </p>
            </div>
            <div id = 'b' className='w-full h-full hidden flex-col items-center justify-center duration-200'>
              <p className='mb-2'> Phone : 010-3193-7133 </p>
              <p> E-mail : dodoi77@naver.com </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeaderComp;
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderComp = () => {

  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  return (
    <div className="w-full h-auto text-[#F9F9FB] dark:text-[#121316] font-extrabold py-6 sm:py-8 flex flex-col items-center select-none">
      <div id="S4" className='text-[#060607] dark:text-[#F9F9FB] text-3xl sm:text-5xl my-2 sm:my-5 font-["JetBrains_Mono"] font-bold w-[auto] h-auto duration-200'>Projects</div>

      <Link to= "/project1" className="relative w-[90%] max-w-[720px] h-[150px] sm:h-[200px] mt-5 mb-2 rounded-xl font-['Nanum_Gothic'] text-xl sm:text-3xl" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} data-modal-toggle="medium-modal">
        <div className="absolute w-full h-full bg-[#121316] dark:bg-[#F9F9FB] opacity-75 hover:opacity-[.45] duration-150 rounded-xl" />
        <img className="w-full h-full rounded-xl" src='./img/project_1_1.jpeg' alt="깃헙 바로가기" />
        {!isShown && (<div className='absolute bottom-[calc(50%-14px)] left-[calc(50%-105px)] sm:bottom-[calc(50%-18px)] sm:left-[calc(50%-157.5px)]'> Face Accessary Studio </div>)}
        {isShown && (<div className='absolute bottom-[calc(26.5%)] left-[7px] sm:bottom-[calc(50%-25px)] sm:left-[calc(50%-230.5px)] text-sm sm:text-base font-semiblod'> 원하는 액세사리를 골라 얼굴을 인식하여 얼굴에 따라서 출력 시킵니다. <br /> 또한 출력된 화면을 캡쳐하여 이미지 형태로 저장하는 사이트입니다. </div>)}
      </Link>

      <Link to= "/project2" className="relative w-[90%] max-w-[720px] h-[150px] sm:h-[200px] mt-5 mb-2 rounded-xl font-['Nanum_Gothic'] text-xl sm:text-3xl" onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}>
        <div className="absolute w-full h-full bg-[#121316] dark:bg-[#F9F9FB] opacity-75 hover:opacity-[.45] duration-150 rounded-xl" />
        <img className="w-full h-full rounded-xl" src='./img/project_2_1.jpg' alt="깃헙 바로가기" />
        {!isShown2 && (<div className='absolute bottom-[calc(50%-14px)] left-[calc(50%-80px)] sm:bottom-[calc(50%-18px)] sm:left-[calc(50%-120px)]'> Special Function </div>)}
        {isShown2 && (<div className='absolute bottom-[calc(26.5%)] left-[7px] sm:bottom-[calc(50%-25px)] sm:left-[calc(50%-230.5px)] text-sm sm:text-base font-semiblod'> Special function은 서버를 프로비저닝 하거나 구축하지 않고도 <br /> 코드를 실행 할 수 있는 컴퓨팅 서비스 입니다. </div>)}
      </Link>

      <Link to= "/project3" className="relative w-[90%] max-w-[720px] h-[150px] sm:h-[200px] mt-5 mb-12 rounded-xl font-['Nanum_Gothic'] text-xl sm:text-3xl" onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}>
        <div className="absolute w-full h-full bg-[#121316] dark:bg-[#F9F9FB] opacity-75 hover:opacity-[.45] duration-150 rounded-xl" />
        <img className="w-full h-full rounded-xl" src='./img/project_3_1.jpg' alt="깃헙 바로가기" />
        {!isShown3 && (<div className='absolute bottom-[calc(50%-14px)] left-[calc(50%-66.6px)] sm:bottom-[calc(50%-18px)] sm:left-[calc(50%-100px)]'> 태고 서열표 웹 </div>)}
        {isShown3 && (<div className='absolute bottom-[calc(26.5%)] left-[7px] sm:bottom-[calc(50%-25px)] sm:left-[calc(50%-230.5px)] text-sm sm:text-base font-semiblod'> ‘태고의 달인’이라는 게임의 비공식 서열표를 나타내고, <br /> 사용자의 기록을 토대로 자동으로 갱신하여 나타내는 웹사이트 입니다. </div>)}
      </Link>
    </div>
  )
}

export default HeaderComp;
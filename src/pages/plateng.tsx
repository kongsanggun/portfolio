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

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const detail1 = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] pt-10 sm:pt-12 sm:pb-8 flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:ml-[20%] mb-5 sm:mb-0 sm:mr-5'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>개요</p>
          <p className='text-xs sm:text-sm font-thin mb-1'>준비 기간 : 2022.11.10 -2022.12.01 </p>
        </div>
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:mr-[20%]'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>설명</p>
          <p className='text-xs sm:text-sm font-thin'>Platform Enginnering를 주제로 IT 세미나 자료 조사 및 발표를 준비하게 되면서 Platform Enginnering과 관련된 지식을 알아가는 계기가 되었습니다.</p>
        </div>
      </div>
    )
  }

  const links = () => {
    return (
      <div className="w-full h-auto text-[#121316] dark:text-[#F9F9FB] py-5 sm:py-8 flex flex-col items-center justify-center">
        <div className='w-[80%] sm:w-[60%] h-auto flex flex-col justify-center'>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>관련 URL</p>
          <p className='text-xs sm:text-lg font-thin mb-1'> 조사한 자료 🖥 : <a className = 'break-words hover:cursor-pointer hover:bg-[#b8bbc7] dark:hover:bg-[#7d879c]' href='https://florentine-peripheral-023.notion.site/IT-Platform-Engineering-b58a892c0633438db301bffce6d5513b'> 조사한 발표 자료 링크는 이쪽을 클릭해주세요. </a> </p>
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
            - 일단 주제가 정말 어려운 주제였던 만큼 개발자가 아닌 사람들에게 풀어서 설명을 해주는 것이 부족했던 것 같았습니다. 다음에 설명해줄 때는 좀 더 이해하기 쉽도록 설명을 해주는 노력이 필요할 것 같습니다. 
          </p>
          <p className='text-xs sm:text-sm font-thin mb-[6px]'> 
            - 자료를 조사하면서 실제 개발 환경과는 잘못된 정보를 수집한 것이 아쉬웠습니다. 예를 들어 관련 URL를 기준으로 DevOps의 한계를 설명하는 내용이 원래는 DevOps를 개발하는 잘못된 사실이라는 정보로 잘못 설명한 점이 있습니다. (발표 본문 1-1)
          </p>
          <p className='text-xs sm:text-sm font-thin mb-[6px]'> 
            - 위에서 나오듯이 조사한 주제가 어려운 주제라서 자료를 수집할 때 한정된 영문 문장으로 나와서 조사한 저도 이해하기 어려웠던 점이 있었습니다.
          </p>
        </div>
        <div className='w-[80%] sm:w-[calc(45%-10px)] h-auto sm:mr-[20%] '>
          <p className='text-lg sm:text-2xl mb-3 font-bold'>후기</p>
          <p className='text-xs sm:text-sm font-thin'>
            위 활동을 C;lve 3기 인턴쉽을 진행하게 되면서 준비하게 된 IT 세미나입니다.<br/>
            Platform Enginnering이라는 생각보다 어려운 주제를 선택하여 발표를 조사하는 데 생각보다 난항을 겪게 되었습니다.<br/>
            비교적 새로 나온 키워드라서 그런지 영문으로 검색을 해보아도 문서로 된 자료가 적어서 강의를 들으면서 필기를 한 기억이 있었습니다.<br/>
            그렇지만 중간에 멘토링을 하게 되면서 위의 주제를 통하여 어떠한 방향을 가져야 되는지, 무엇을 설명해야 하는지 알게 되었습니다.<br/>
            비록 마지막에 팀원이 사정이 생겨 저 혼자 자료를 정리하고 발표를 준비하게 되었지만, 제 입장에서는 큰 경험이라고 생각해서 열심히 준비하였습니다.<br/>
            세미나를 준비하게 되면서 나중에 기회가 생긴다면 좀 더 이해하기 쉽게 Platform Enginnering을 발표하는 날이 왔음 좋겠습니다.<br/>
            또한 DevOps 분야와 관련 플랫폼을 함께 조사하게 되면서 DevOps에 대해 관심을 가지게 된 계기가 되었습니다. 관련 피드백을 받았던 만큼 언젠가 위 분야에 대해 스터티 및 조사를 행할 예정입니다.<br/>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-[#F9F9FB] dark:bg-[#232438] duration-200 min-h-screen'>
      <Header Name={"IT 세미나 - Platform Enginnering"} />
      {detail1()}
      {links()}
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

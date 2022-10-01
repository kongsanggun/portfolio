import React from 'react';

import Header from '../components/header'
import Intro from '../components/intro'
import Me from '../components/me'
import Skill from '../components/skill'
import Time from '../components/time'
import Project from '../components/project'
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

  return (
    <div className='bg-[#F9F9FB] dark:bg-[#232438] duration-200'>
      <Header />
      <Intro />
      <Me />
      <Skill />
      <Time />
      <Project />
      <Footer />
      <div id = "dark_mode" className="fixed bottom-3 sm:bottom-5 left-3 sm:left-5 bg-[#232438] hover:bg-[#b8bbc7] dark:bg-[#F9F9FB] dark:hover:bg-[#a9b5cf] rounded-full h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] px-2 py-2 duration-200" onClick={() => {Darkmode()}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-[24px] w-[24px] sm:h-[43px] sm:w-[43px] fill-[#F9F9FB] dark:fill-[#232438]">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderComp = (props: { Name: string }) => {

    const { Name } = props;

    return (
        <header>
            <div className="w-full h-20 sm:h-28 flex items-center justify-between border-b-[1.5px] border-b-[#BEC0D7]">
                <div className='w-auto h-full ml-8 sm:ml-10 text-[#121316] dark:text-[#F9F9FB] text-xl sm:text-3xl flex items-center justify-center font-["Nanum_Gothic"] font-extrabold duration-200'>
                    {Name}
                </div>
                <div className='w-auto h-full mr-8 sm:mr-10 text-[#121316] dark:text-[#F9F9FB] text-xl sm:text-3xl flex items-center justify-center font-["Nanum_Gothic"] font-extrabold duration-200'>
                    <Link to='/' className='w-auto h-full flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 sm:w-12 sm:h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderComp; 
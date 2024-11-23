'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../../public/logo.png";
import { IoIosArrowDown } from 'react-icons/io';
import { CompulsoryData } from '@/data/main/compulsory';
import { tracks } from '@/data/main/tracks';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';

const navLinks = [
    { title: "home", link: "/", id: "1" },
    { title: "apply", link: "/apply", id: "2" },
    { title: "jobs", link: "/jobs", id: "3" },
    { title: "result", link: "/result", id: "4" },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <>
            <div className='sticky top-0 z-30 w-full bg-main backdrop-blur-3xl print:hidden'>
                <div className='flex items-center justify-between p-4'>
                    <div className='flex items-center space-x-2'>
                        <Image 
                            src='/01_javed_pic.png'
                            alt='01_javed-pic'
                            width={70}
                            height={90}
                            className='w-20 h-20 rounded-full'
                        />
                        <h1 className='text-lg md:text-2xl font-[math] font-bold text-white'>
                            Javed Ali
                        </h1>
                    </div>
                    <Link href={"/"}>
                        <Image 
                            src={Logo}
                            alt='logo'
                            width={90}
                            className='mt-2 w-[70px] sm:w-[80px] md:w-[90px]'
                        />   
                    </Link>
                </div>
                <div className="flex items-center justify-between p-4">
                    <h1 className='text_shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl-text-2xl'>
                        Tuition Free Education Program on Latest Technologies
                    </h1>
                    <h1 className="text_shadow text-[1.125rem] font-extrabold text-[#b9d8f3] lg:hidden">
                        Tuition Free Programming
                    </h1>
                    <div className="hidden items-center gap-5 text-[#FaF9F6] sm:flex lg:gap-10">
                        {navLinks.map((item) => (
                            <Link href={item.link} key={item.id}> 
                                <div className="capitalize">
                                    {item.title}
                                </div>
                            </Link>
                        ))}
                        <div className='relative cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
                            <div className='flex items-center capitalize'>
                                Courses <IoIosArrowDown className='pl-2 size-5' />
                            </div>
                            {showMenu && (
                                <div className='absolute right-3 mt-2 w-80 rounded-lg bg-white text-black shadow-lg'>
                                    <div className='bg-zinc-50 p-4 overflow-y-auto'>
                                        <h1 className='text-left text-lg font-bold text-black pb-3'>
                                            Core Course
                                        </h1>
                                        {CompulsoryData.map((val) => (
                                            <Link href={`/compulsory/${val.id}`} key={val.id}>
                                                <div className='py-1 text-sm text-black hover:text-main'>{val.text}</div>
                                            </Link>
                                        ))}
                                        <h1 className='mt-5 text-left text-lg font-bold text-black border-t border-zinc-300 pt-5'>
                                            Advance Courses
                                        </h1>
                                        {tracks.map((val) => (
                                            <Link href={`/tracks/${val.id}/4`} key={val.id}>
                                                <div className='py-1 text-sm text-black hover:text-main'>{val.name}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='block sm:hidden'>
                        <FiMenu size={24} className='text-white' onClick={() => setOpen(true)} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed left-0 top-0 z-40 h-full w-full bg-main print:hidden ${!open && "hidden"}`}>
                <div className='absolute right-5 top-5'>
                    <RxCross1 className='text-white' size={25} onClick={() => setOpen(false)} />
                </div>
                <div className='m-auto mt-20 flex w-[90%] flex-col text-base font-normal text-white'>
                    {navLinks.map((item) => (
                        <Link href={item.link} onClick={() => setOpen(false)} key={item.id}>
                            <div className='border-b border-[#1468a5] py-5 capitalize'>{item.title}</div>
                        </Link>
                    ))}
                    <div className={`py-5 ${!showMenu && "border-b"} border-[#1468a5]`} onClick={() => setShowMenu(!showMenu)}>
                        <div className='flex items-center justify-between'>
                            Courses
                            <IoIosArrowDown size={16} />
                        </div>
                        <div className={`overflow-auto rounded-xl bg-white ${showMenu ? "h-auto" : "h-0 overflow-hidden"}`}>
                            <h1 className='mt-3 px-2 text-left text-lg font-bold text-zinc-800'>Core Courses</h1>
                            {CompulsoryData.map((val) => (
                                <Link onClick={() => setOpen(false)} key={val.id} href={`/compulsory/${val.id}`}>
                                    <div className='py-3 pl-2 text-sm text-zinc-600 sm:text-base hover:text-main'>{val.text}</div>
                                </Link>
                            ))}
                            <h1 className='mt-3 px-2 text-left text-lg font-bold text-zinc-800 border-t border-zinc pt-5'>Advanced Courses</h1>
                            {tracks.map((val) => (
                                <Link onClick={() => setOpen(false)} key={val.id} href={`/tracks/${val.id}`}>
                                    <div className='py-3 pl-2 text-sm text-zinc-600 sm:text-base hover:text-main'>{val.name}</div>
                                </Link>
                             ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
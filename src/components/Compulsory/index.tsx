import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Compulsory = () => {
    return (
        <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
            <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10">
                Core Courses
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-5 mt-10">

                <Link href="/compulsory/1" className="hover:scale-105 duration-200 transition-all">
                    <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
                        <Image alt="Programming Fundamentals" src="/programming_fundamentals.jpg" className="object-cover w-full" height={300} width={500} />
                        <div className="px-4 flex justify-center items-center h-[70px]">
                            Programming Fundamentals
                        </div>
                    </div>
                </Link>

                <Link href="/compulsory/2" className="hover:scale-105 duration-200 transition-all">
                    <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
                        <Image alt="Web2 Using NextJS" src="/nextjs.jpg" className="object-cover w-full" height={300} width={500} />
                        <div className="px-4 flex justify-center items-center h-[70px]">
                            Web2 Using NextJS
                        </div>
                    </div>
                </Link>

                <Link href="/compulsory/3" className="hover:scale-105 duration-200 transition-all">
                    <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
                        <Image alt="Earn as You Learn" src="/earn_as_you_learn.jpg" className="object-cover w-full" height={300} width={500} />
                        <div className="px-4 flex justify-center items-center h-[70px]">
                            Earn as You Learn
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Compulsory;
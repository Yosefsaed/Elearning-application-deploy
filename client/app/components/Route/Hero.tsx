import React, { FC } from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import headerImg from "../../../public/assets/landing.png";
import vector1 from "../../../public/assets/vector1.png";

type Props = {}

const Hero: FC<Props> = (props: Props) => {
    return (<>
        <div className="home h-full">
            <div className="Container1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
                        <div className="info">
                            <h2 className="text-2xl dark:text-white text-black">Develop your skills in a new and unique way</h2>
                            <p className="dark:text-white text-black ">Explore a transformative approach to skill development on our online learning platform. Uncover a new realm of learning experiences and elevate your expertise in unique ways.</p>
                            <div className="Btn mt-4">
                                <div className="btn-enroll">
                                    <button className="bg-[#B671FF] hover:bg-blue-700 dark:text-white text-black font-bold py-2 px-4 rounded">Enroll Now</button>
                                </div>
                                <div className="play ml-4">
                                    <div className="">
                                        <Image src={vector1} alt="" />
                                    </div>
                                    <button className="bg-blue-500 hover:bg-blue-700 dark:text-white text-black font-bold py-2 px-4 rounded">What’s Etech?</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
                        <div className="img img-fluid">
                            <Image className="" src={headerImg} alt="Hero Image" width={1200} height={1200} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
        {/* <label
            className="mx-auto mt-40 relative  min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
        >
            <input id="search-bar" placeholder="your keyword here" className="px-6 py-2 w-full rounded-md flex-1 outline-none "></input>

            <button
                className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">

                <div className="relative">


                    <div
                        className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                        <svg className="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                stroke-width="4"></circle>
                            <path className="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                    </div>

                    <div className="flex items-center transition-all opacity-1 valid:"><span
                        className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                        Search
                    </span>
                    </div>

                </div>

            </button>
        </label>
 */}

    </>
    )
}

export default Hero;

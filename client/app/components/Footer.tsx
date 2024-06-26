"use client";
import Image from "next/image";
import numImg from "../../public/assets/num.jpg"
import { FC, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

import Link from "next/link";
interface Props { 
}

const Footer: FC<Props> = () => {
    
    return (

        <div className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto ">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 ">
                        <h4 className="text-3xl font-semibold dark:text-white text-black"> Lets keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 dark:text-white text-black">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button className=" dark:text-white text-black font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">

                                <Link href="https://www.facebook.com">
                                    <FaFacebook className="  dark:text-white text-black" size={25} />
                                </Link>
                            </button>
                            <button className=" dark:text-white text-black font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <Link href="https://www.github.com"> <FaGithub className="  dark:text-white text-black" size={25} href="https://www.github.com" /></Link>
                            </button>
                            <button className=" dark:text-white text-black font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <Link href="https://www.dribbble.com"><FaDribbble className="  dark:text-white text-black" size={25} /></Link>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 ">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12  ml-auto">
                                <span className="block uppercase dark:text-white text-black text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link className="dark:text-white text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="about">About Us</Link>
                                    </li>

                                    <li>
                                        <Link className="dark:text-white text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com">Github</Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 ">
                                <span className="block uppercase dark:text-white text-black text-sm font-semibold mb-2">Other Resources</span>
                                <ul className="list-unstyled">

                                    <li>
                                        <Link className="dark:text-white text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link className="dark:text-white text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link className="dark:text-white text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12   text-center">
                        <div className="text-sm dark:text-white text-black font-semibold py-1">
                            Copyright © <span id="get-current-year">2024</span> by
                            <Link href="https://www.creative-tim.com?ref=njs-profile" className="dark:text-white text-black hover:text-blueGray-800"> Support team</Link>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

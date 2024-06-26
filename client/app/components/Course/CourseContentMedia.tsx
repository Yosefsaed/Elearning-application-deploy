import { styles } from "@/app/styles/style";
import CoursePlayer from "@/app/utils/CoursePlayer";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import Model3d from "../../utils/Model3d"
type Props = {
    data: any
    id: string
    activeVideo: number
    setActiveVideo: (activeVideo: number) => void
}
const CourseContentMedia: FC<Props> = ({ data, id, activeVideo, setActiveVideo }) => {
    const [activeBar, setActiveBar] = useState(0)
    const [open3d, setOpen3d] = useState(false)
    console.log(data[activeVideo].title)
    return (
        <div className="w-[95%] 800px:w-[86%] py-4 m-auto">
            <CoursePlayer title={data[activeVideo]?.title} videoUrl={data[activeVideo]?.videoUrl} />
            <div className="w-full flex items-center justify-between my-3">
                <div className={`${styles.button} text-white !w-[unset] !min-h-[40px] !py-[unset] ${activeVideo === 0 && " !cursor-no-drop opacity-[0.8]"
                    }`} onClick={() => setActiveVideo(activeVideo === 0 ? 0 : activeVideo - 1)}>
                    <AiOutlineArrowLeft className="mr-2" />
                    Prev
                </div >
                <div className={`${styles.button} text-white  !w-[unset] !min-h-[40px] !py-[unset] ${data.length - 1 === activeVideo && " !cursor-no-drop opacity-[0.8]"}`} onClick={() => setActiveVideo(activeVideo < data.length - 1 ? activeVideo + 1 : activeVideo)}>
                    Next
                    <AiOutlineArrowRight className="ml-2" />
                </div>
            </div>
            <h1 className="pt-2 txt-[25px] font-[600] dark:text-white text-black ">{data[activeVideo].title}</h1>
            <br />
            <div className="w-full p-4 flex items-center justify-between bg-slate-500 bg-opacity-20 backdrop-blur shadow-[bg-slate-700] rounded shadow-inner">
                {
                    ["Overview", "Resources", "3D model"].map((text, index) => (
                        <h5 key={index} className={`800px:text-[20px] cursor-pointer  ${activeBar === index ? 'text-red-500' : "dark:text-white text-black "}`} onClick={() => setActiveBar(index)}>
                            {text}
                        </h5>
                    ))
                }
            </div>
            <br />
            {
                activeBar === 0 && (
                    <p className="text-[18px] whitespace-pre-line mb-3 dark:text-white text-black ">
                        {data[activeVideo]?.description}
                    </p>
                )
            }
            {
                activeBar === 1 && (
                    <div>
                        {
                            data[activeVideo]?.links.map((item: any, index: number) => (
                                <div key={index} className="mb-5">
                                    <h2 className="800px:text-[20px] 800px:inline-block dark:text-white text-black">{item.title && item.title + " :"}</h2>
                                    <a href={item.url} className="inline-block text-[#4395c4] 800px:text-[20px] 800px:pl-2">
                                        {item.url}
                                    </a>
                                </div>
                            ))
                        }

                    </div>
                )
            }
            {
                activeBar === 2 && (
                    <div className="w-full h-[full] bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center">
                        <div className="w-full min-h-screen rounded-xl sha p-3">
                            <div className="w-full flex justify-end">
                                <IoCloseOutline size={40} className="dark:text-white text-black cursor-pointer" onClick={() => setActiveBar(activeBar - 2)} />
                            </div>
                            <div className="w-full">
                                <Model3d />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )

}
export default CourseContentMedia
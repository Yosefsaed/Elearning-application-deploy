import { useGetCourseContentQuery } from "@/redux/features/courses/coursesApi";
import React, { FC, useState } from "react";
import Loader from "../Loader/loader";
import Heading from "@/app/utils/Heading";
import CourseContentMedia from "./CourseContentMedia"
import Header from "../Header";
import CourseContentList from "./CourseContentList";
type Props = {
    id: string
}
const CourseContent: FC<Props> = ({ id }) => {
    const { data: contentData, isLoading } = useGetCourseContentQuery(id)
    const [open, setOpen] = useState(false)
    const [route, setRoute] = useState('Login')
    const data = contentData?.content
    const [activeVideo, setActiveVideo] = useState(0)
    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <Header activeItem={1} open={open} setOpen={setOpen} route={route} setRoute={setRoute} />
                        <div className="w-full h-screen" >
                            <div className=" w-[92%] grid 800px:grid-cols-10">
                                <Heading title={data[activeVideo]?.title} description="write something" keywords={data[activeVideo]?.tags} />

                                <div className="col-span-7">
                                    <CourseContentMedia data={data} id={id} activeVideo={activeVideo} setActiveVideo={setActiveVideo} />
                                </div>
                                <div className="hidden 800px:block 800px:col-span-3">
                                    <CourseContentList setActiveVideo={setActiveVideo} data={data} activeVideo={activeVideo} />
                                </div>
                            </div>
                        </div>

                    </>
                )
            }
        </>
    )

}
export default CourseContent
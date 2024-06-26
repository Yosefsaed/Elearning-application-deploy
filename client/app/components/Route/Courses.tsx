import { useGetUserAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import CourseCard from "../Course/CourseCard"
type Props = {}
const Page = (props: Props) => {
    const { data, isLoading } = useGetUserAllCoursesQuery({})
    const [courses, setCourses] = useState<any[]>([])
    useEffect(() => {
        setCourses(data?.courses)
    }, [data])
    return (
        <div  >
            <div className="py-5  w-[90%] !important">
                <div className="Container1">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="card-head1 ">
                                <div className="py-5-head bg-white dark:bg-[#111827]">
                                    <h2 className="dark:text-white text-black !important">Our Popular Courses</h2>
                                </div>
                                <div className="para">
                                    <p className="lead fw-normal text-muted mb-5 text-center dark:text-white text-black !important">Discover our most sought-after
                                        courses,
                                        carefully
                                        curated to
                                        meet the demand of today’s leaners. Dive into angaging
                                        content crafted for success in every step of your educational journey.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
            <div className={`w-[90%] 800px:w-[80%] m-auto`}>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0 ">
                    {courses &&
                        courses.map((item: any, index: number) => (
                            <CourseCard item={item} key={index} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
export default Page
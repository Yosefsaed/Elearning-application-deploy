'use client'
import Loader from "@/app/components/Loader/loader";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { redirect } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import CourseContent from "../../components/Course/CourseContent"
type Props = {
    params: any
}
const Page: FC<Props> = ({ params }) => {
    const id = params.id
    const { isLoading, error, data } = useLoadUserQuery(undefined, {})
    useEffect(() => {
        if (data) {
            const isPurchased = data.user.courses.find((item: any) => item._id === id)
            if (!isPurchased) {
                redirect("/")
            }
            if (error) {
                redirect("/")
            }
        }
    }, [data, error])
    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <CourseContent id={id} />
                )
            }
        </>
    )

}
export default Page
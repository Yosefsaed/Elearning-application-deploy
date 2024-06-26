'use client'
import React from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar"
import AdminProtected from "../hooks/adminProtected";
import DashboardHero from "../components/Admin/DashboardHero"
type Props = {}
const Page = (props: Props) => {
    return (

        <div>
            <AdminProtected>
                <Heading title="Elearning - Admin" description="Discover the future of learning with our e-learning site, featuring captivating 3D models that bring subjects to life. Engage with interactive lessons like never before!" keywords="Programming,3D models,Design,Accounting,Marketing,Data Science" />

                <div className="flex h-screen">
                    <div className=" 1500px:w-[10%] w-1/2 block">
                        <AdminSidebar />
                    </div>
                    <div className="w-[85%]">
                        <DashboardHero isDashboard={true} />
                    </div>
                </div>
            </AdminProtected>
        </div >

    )
}
export default Page
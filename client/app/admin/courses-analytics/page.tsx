"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../../app/utils/Heading";
import CourseAnalytics from "../../components/Admin/Analytics/CourseAnalytics";
import DashboardHeader from "../../../app/components/Admin/DashboardHeader";
import AdminProtected from "@/app/hooks/adminProtected";
type Props = {};
const page = (props: Props) => {
  return (
    <AdminProtected>
      <div>
        <Heading
          title="Elearning - Admin"
          description="Discover the future of learning with our e-learning site, featuring captivating 3D models that bring subjects to life. Engage with interactive lessons like never before!"
          keywords="Programming,3D models,Design,Accounting,Marketing,Data Science"
        />
        <div className="flex">
          <div className="1500:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHeader open={false} />
            <CourseAnalytics />
          </div>
        </div>
      </div>
    </AdminProtected>
  );
};
export default page;

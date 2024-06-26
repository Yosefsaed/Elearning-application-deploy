"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero"
import Courses from "./components/Route/Courses"
import Reviews from "./components/Route/Reviews"
import Footer from "./components/Footer"
interface Props { }

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login")
  return (
    <div >
      <Heading
        title="Elearning"
        description="Discover the future of learning with our e-learning site, featuring captivating 3D models that bring subjects to life. Engage with interactive lessons like never before!"
        keywords="Programming,3D models,Design,Accounting,Marketing,Data Science"
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
      <Hero />
      <Courses />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Page;

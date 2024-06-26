"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import About from "./About";
import Footer from "../components/Footer";
type Props = {};
const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <>
      <Heading
        title="About us - Elearning"
        description="Discover the future of learning with our e-learning site, featuring captivating 3D models that bring subjects to life. Engage with interactive lessons like never before!"
        keywords="Programming,3D models,Design,Accounting,Marketing,Data Science"
      />
      <Header
        route={route}
        setRoute={setRoute}
        open={open}
        setOpen={setOpen}
        activeItem={2}
      />
      <About />
      <Footer />
    </>
  );
};
export default Page;

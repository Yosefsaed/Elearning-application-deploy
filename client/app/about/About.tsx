import React from "react";
import { styles } from "../styles/style";

type Props = {};
const About = (props: Props) => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className=" text-blue-500">Elearning?</span>
      </h1>
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Welcome to our learning website! We use cool 3D models to help you
          understand things better. Whether it&apos;s science, history, or
          anything else, our models make learning fun and easy. Explore them to
          learn more about the world around you.
          <br />
          <br />
          We believe learning should be fun and easy for everyone. That&apos;s
          why our website has lots of 3D models to help you learn in your own
          way. Whether you like to see things visually or listen to
          explanations, our models have something for everyone.
          <br />
          <br />
          Our website is here to help everyone learn, no matter where they are.
          Whether you&apos;re a student in a big city or a teacher in a small
          town, our 3D models are here to help you learn and teach. Let&apos;s
          learn together and discover new things every day.
          <br />
          <br />
          Education should be accessible to all, regardless of where you are or
          your background. That&apos;s why our website is available to anyone
          with an internet connection, providing a wealth of educational
          resources at your fingertips. Whether you&apos;re a curious student
          eager to expand your knowledge or a dedicated educator looking for
          innovative teaching tools, our 3D models are here to support you every
          step of the way. Join our community today and embark on a journey of
          endless learning possibilities.
          <br />
          <br />
          We understand that everyone learns differently, which is why our
          website is designed to cater to all learning styles. Whether you
          prefer hands-on exploration or listening to detailed explanations, our
          3D models offer something for everyone. With just a click, you can
          interact with our models and learn at your own pace, making learning
          both enjoyable and effective.
          <br />
          <br />
        </p>
        <br />
        <div className="flex">
          <span className=" text-[22px]">Yousef Yasser</span>
          <h5 className="text-[18px] font-Poppins">Software engineer</h5>
          <span className=" text-[22px]">Yousef Yasser</span>
          <h5 className="text-[18px] font-Poppins">Software engineer</h5>
          <span className=" text-[22px]">Yousef Yasser</span>
          <h5 className="text-[18px] font-Poppins">Software engineer</h5>
          <span className=" text-[22px]">Yousef Yasser</span>
          <h5 className="text-[18px] font-Poppins">Software engineer</h5>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default About;

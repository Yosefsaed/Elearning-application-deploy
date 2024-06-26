import Image from "next/image";
import React from "react";
import businessImg from "../../../public/assets/rectangle140.jpeg"
import { styles } from "@/app/styles/style";
import ReviewCard from "../Review/ReviewCard"
type Props = {}
export const reviews = [
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambridge University",
        comment: "I've been using this eLearning platform for a few months now, and I must say it's been a game-changer for me. The courses are well-structured, and the instructors are highly knowledgeable. Definitely recommend!"
    },
    {
        name: "Laura Garcias",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        profession: "Software Engineer",
        comment: "The variety of courses available on this website is impressive. Whether you're a beginner or an expert looking to upgrade your skills, there's something for everyone. The user interface is intuitive, making it easy to navigate through the content."
    },
    {
        name: "Emily Chang",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        profession: "Data Analyst",
        comment: "I appreciate the flexibility this eLearning platform offers. Being able to learn at my own pace and from anywhere has been invaluable. Plus, the option to interact with other learners and instructors through forums adds an extra layer of engagement."
    },
    {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        profession: "Entrepreneur",
        comment: "The quality of content on this website surpasses my expectations. The videos are crisp, the quizzes are challenging yet rewarding, and the supplementary materials provided are incredibly helpful. Kudos to the team behind this platform!"
    },
]
const Reviews = (props: Props) => {
    return (
        <div className="w-[90%] 800px:w-[85%] m-auto">
            <div className="w-full 800px:flex items-center">
                <div className="800px:w-[50%] w-full mb-12">
                    <Image src={businessImg} alt="business" width={700} height={700} />
                </div>
                <div className="800px:w-[50%] w-full">
                    <h3 className={`${styles.title} 800px:!text-[40px]`}>
                        Our Students Are <span className="text-gradient  text-blue-500">Our Strength</span>{" "}
                        <br />
                        See What They Say About Us
                    </h3>
                    <br />
                    <p className={styles.label}>Our students are the backbone of our institution. Discover firsthand accounts of their experiences with us.

                        Education is more than just acquiring knowledge; its about shaping futures and fostering growth. Hear directly from our students as they share their transformative journeys with us.

                        From overcoming challenges to achieving milestones, our students stories reflect the essence of our commitment to excellence. Join us in celebrating their achievements and aspirations.</p>
                </div>
                <br />
                <br />
            </div>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0 ">
                {
                    reviews && reviews.map((i, index) => <ReviewCard item={i} key={index} />)
                }
            </div>
        </div>
    )
}
export default Reviews
import { styles } from "@/app/styles/style";
import React, { FC } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import toast from "react-hot-toast";
type Props = {
    benefits: { title: string }[]
    setBenefits: (benefits: { title: string }[]) => void
    prerequisites: { title: string }[]
    setPreRequisites: (prerequisites: { title: string }[]) => void
    active: number
    setActive: (active: number) => void
}
const CourseData: FC<Props> = ({ benefits, setBenefits, prerequisites, setPreRequisites, active, setActive }) => {
    const handelBenefitChange = (index: number, value: any) => {
        const updateBenefits = [...benefits]
        updateBenefits[index].title = value
        setBenefits(updateBenefits)
    }
    const handleAddBenefits = () => {
        setBenefits([...benefits, { title: '' }])
    }
    const handelPrerequisitesChange = (index: number, value: any) => {
        const updatePrerequisites = [...prerequisites]
        updatePrerequisites[index].title = value
        setPreRequisites(updatePrerequisites)
    }
    const handleAddPrerequisites = () => {
        setPreRequisites([...prerequisites, { title: '' }])
    }
    const prevButton = () => {
        setActive(active - 1)
    }
    const handleOptions = () => {
        if (benefits[benefits.length - 1]?.title !== '' && prerequisites[prerequisites.length - 1]?.title !== '') {
            setActive(active + 1)
        } else {
            toast.error("Please fill the fields for next step!")
        }
    }
    return (
        <div className="w-[80%] m-auto mt-24 block">
            <div>
                <label htmlFor="email" className={`${styles.label} text-[20px] dark:text-white text-black`}>What are the benefits for students in this course?</label>
                <br />
                {
                    benefits.map((benefit: any, index: number) => (
                        <input type="text" key={index} name="Benefit" placeholder="write here benefits" required className={`${styles.input} my-2`} value={benefit.title} onChange={(e) => handelBenefitChange(index, e.target.value)} />
                    ))
                }
                <AddCircleIcon style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }} className="dark:text-white text-black" onClick={handleAddBenefits} />
            </div>
            <div>
                <label htmlFor="email" className={`${styles.label} text-[20px] dark:text-white text-black`}>What are the prerequisites for starting this course ? </label>
                <br />
                {
                    prerequisites.map((prerequisites: any, index: number) => (
                        <input type="text" key={index} name="prerequisites" placeholder="write here prerequisites" required className={`${styles.input} my-2`} value={prerequisites.title} onChange={(e) => handelPrerequisitesChange(index, e.target.value)} />
                    ))
                }
                <AddCircleIcon style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }} className="dark:text-white text-black" onClick={handleAddPrerequisites} />
            </div>
            <div className="w-full flex items-center justify-between">
                <div className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer" onClick={() => prevButton()}>
                    Prev
                </div>
                <div className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer" onClick={() => handleOptions()}>
                    Next
                </div>
            </div>
        </div>
    )
}
export default CourseData
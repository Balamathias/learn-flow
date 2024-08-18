import { Link } from "react-router-dom"
import { formatToUSD } from "../../lib/format-currency"
import { Course } from "../../types/course"
import { Separator } from "../ui/separator"

const CourseItem = ({ course }: { course: Course }) => {
    return (
        <Link to={`/dashboard/all-courses/${course.id}`} className="hover:opacity-70 bg-card hover:transition-all rounded-none flex flex-col gap-y-4 gap-x-2.5 p-0 rounded-tl-2xl rounded-tr-2xl shadow-none border-none cursor-pointer">
            <img src={course?.image} alt={course?.title} className="h-72 w-full object-cover rounded-tl-2xl rounded-tr-2xl" />

            <div className="flex p-3.5 md:p-6 flex-col gap-y-3">
                <h2 className="font-bold text-lg md:text-xl">{course?.title}</h2>
                <p className="text-muted-foreground ">{course?.description}</p>

                <Separator />
                <div className="flex flex-row justify-between w-full py-2.5">
                  <h2 className="text-lg">By <span className="font-bold">{"Ato"}</span></h2>
                  <p className="font-bold">{formatToUSD(course.price)}</p>
                </div>
            </div>
        </Link>
    )
}

export default CourseItem
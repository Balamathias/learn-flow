import { Link } from "react-router-dom"
import { useGetCourses } from "../../firebase/api/course"
import CourseCardsSkeleton from "../skeletons/course-card-skeleton"
import CourseItem from "./course-item"

const CourseCards = () => {
  const { data: courses, isPending } = useGetCourses(4, 'created_at', 'asc')

  if (isPending) return <CourseCardsSkeleton />

  return (
    <div className="flex flex-col gap-y-2 py-8">
        <h2 className="text-xl font-bold">Language Courses</h2>
        <p className="font-semibold text-muted-foreground text-lg">Choose from many of our courses and learn with Industry experts.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {
                courses?.map(course => (
                    <CourseItem key={course?.id} course={course} />
                ))
            }
        </div>

        <div className="mt-6 flex items-center justify-center">
          <Link 
            to={'all-courses'}
            className="px-4 py-2.5 rounded-2xl bg-yellow-500 font-bold hover:bg-secondary hover:transition-all"
          >
            View All Courses
          </Link>
        </div>
    </div>
  )
}

export default CourseCards
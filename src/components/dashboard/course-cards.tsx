import { Link } from "react-router-dom"
import { useGetCourses } from "../../firebase/api/course"
import CourseCardsSkeleton from "../skeletons/course-card-skeleton"
import CourseItem from "./course-item"
import Error from "../error"

const CourseCards = () => {
  const { data: courses, isPending, isError, error } = useGetCourses(4, 'created_at', 'asc')

  if (isPending) return <CourseCardsSkeleton />

  if (isError) {
    return <Error description={error?.message} />
  }

  return (
    <div className="flex flex-col gap-y-2 py-8">
        <h2 className="text-xl font-bold">Language Courses</h2>
        <p className="text-muted-foreground text-lg">Choose from many of our courses and learn with Industry experts.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-8">
            {
                courses?.map(course => (
                    <CourseItem key={course?.id} course={course} />
                ))
            }
        </div>

        <div className="mt-6 flex items-center justify-center">
          <Link 
            to={'all-courses'}
            className="px-4 py-2.5 rounded-2xl bg-yellow-500 font-bold hover:bg-yellow-600 hover:transition-all"
          >
            View All Courses
          </Link>
        </div>
    </div>
  )
}

export default CourseCards
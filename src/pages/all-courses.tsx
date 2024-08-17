import { Separator } from "@radix-ui/react-separator"
import MaxWidthWrapper from "../components/max-width-wrapper"
import { useGetCourses } from "../firebase/api/course"
import CourseItem from "../components/dashboard/course-item"
import CourseCardsSkeleton from "../components/skeletons/course-card-skeleton"

const AllCourses = () => {
  const { data: courses, isPending } = useGetCourses(20, 'created_at', 'desc')

  if (isPending) return <CourseCardsSkeleton />

  return (
    <MaxWidthWrapper className="max-w-7xl gap-y-4 md:gap-y-6 md:mx-0 w-full justify-start">
      <div className="flex flex-col gap-y-3 mb-7">
        <h2 className="text-2xl md:text-3xl font-bold py-2">Courses</h2>
        <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste nemo aliquid, nostrum, aperiam sequi ipsum voluptatem maxime cupiditate quasi ipsa architecto rerum id porro necessitatibus magni! Hic dolore laborum eaque aperiam sed vero rerum rem cumque eius? Enim dolor libero voluptates optio beatae porro.</p>
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {
                courses?.map(course => (
                    <CourseItem key={course?.id} course={course} />
                ))
            }
        </div>
    </MaxWidthWrapper>
  )
}

export default AllCourses
import { useNavigate, useParams } from "react-router-dom"
import MaxWidthWrapper from "../components/max-width-wrapper"
import { useGetCourse } from "../firebase/api/course"
import { LucideArrowLeft } from 'lucide-react'
import { Button } from "../components/ui/button"
import CourseDetailSkeleton from "../components/skeletons/course-detail-skeleton"
import { Card, CardContent, CardTitle } from "../components/ui/card"
import { Separator } from "../components/ui/separator"

const CourseDetail = () => {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const { data: course, isPending } = useGetCourse(courseId!)

  if (isPending) return <CourseDetailSkeleton />

  return (
    <MaxWidthWrapper className="!max-w-7xl gap-y-4 md:gap-y-4 !md:mx-0 w-full justify-start">
      <div>
        <Button variant={'ghost'} onClick={() => navigate('/dashboard/all-courses')} className="flex flex-row gap-x-2 gap-y-3 mb-2 text-xl font-bold py-2">
            <LucideArrowLeft size={20}/>
            <h2 className="">Back to Courses</h2>
        </Button>
      </div>

      <div className="flex flex-col">
        <img src={course?.image} className="w-full h-96 md:h-[420px] rounded-2xl object-cover" alt={course?.title} />
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-4 py-6 md:py-8 md:gap-8">

        <div className="flex flex-col md:basis-[60%] gap-y-3">
            <h2 className="text-2xl font-bold">{course?.title}</h2>
            <p className="">{course?.description}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem consectetur sequi cumque accusamus totam quis saepe nisi autem omnis eum, quisquam enim perspiciatis quod ut, iure veritatis tenetur! Velit quisquam quo vel sequi vero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nisi sint esse id nostrum, nam saepe amet repellendus laborum harum natus eum mollitia! Ab accusamus eos blanditiis minima et omnis maxime ipsum, ducimus, sed voluptate modi rem quos doloribus, alias quod expedita nam!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nisi sint esse id nostrum, nam saepe amet repellendus laborum harum natus eum mollitia! Ab accusamus eos blanditiis minima et omnis maxime ipsum, ducimus, sed voluptate modi rem quos doloribus, alias quod expedita nam!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nisi sint esse id nostrum, nam saepe amet repellendus laborum harum natus eum mollitia! Ab accusamus eos blanditiis minima et omnis maxime ipsum, ducimus, sed voluptate modi rem quos doloribus, alias quod expedita nam!</p>
        </div>

        <div className="flex flex-col gap-y-2 w-full md:basis-[40%]">
            <Card className="p-4 rounded-2xl">
                <CardContent className="flex flex-col gap-y-2">
                    <CardTitle className="font-semibold py-2.5">Course Details</CardTitle>
                    <div className="flex justify-between items-center">
                        <p>Author</p>
                        <p>ATO Productions</p>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                        <p>Level</p>
                        <p>Beginner</p>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                        <p>Lessons</p>
                        <p>14</p>
                    </div>
                    <Separator />

                    <Button className="w-full rounded-full bg-yellow-500 hover:bg-gray-100 hover:transition-all mt-3 font-bold py-3" variant={'secondary'}>Buy Now</Button>
                </CardContent>
            </Card>

            <div className="flex py-2 items-center justify-center">
                <Button variant={'outline'} className="w-full rounded-full mt-3 py-3 shadow-none bg-gray-200 border">Next Course</Button>
            </div>
        </div>
      </div>

    </MaxWidthWrapper>
  )
}

export default CourseDetail
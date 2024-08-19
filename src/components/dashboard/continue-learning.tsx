import { useGetCourses } from "../../firebase/api/course"
import { Course } from "../../types/course"
import ContinueLearningSkeleton from "../skeletons/continue-learning-skeleton"
import { Card } from "../ui/card"
import { Progress } from "../ui/progress"
import { trimString } from "../../lib/trim-string"

const ContinueLearning = () => {
  const { data: courses, isPending } = useGetCourses(2, "created_at", "desc")

  if (isPending) return <ContinueLearningSkeleton />

  return (
    <div className="flex flex-col gap-y-2">
        <p className="font-semibold text-muted-foreground text-lg">Let&quot;s continue learning.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {
                courses?.map(lesson => (
                    <LessonItem key={lesson?.id} lesson={lesson} />
                ))
            }
        </div>
    </div>
  )
}

const LessonItem = ({ lesson }: { lesson: Course }) => {
    return (
        <Card className="hover:opacity-70 hover:transition-all flex flex-row items-center gap-x-2.5 p-0 rounded-2xl shadow-none border-none cursor-pointer">
            <div className="relative h-full w-40">
                <img src={lesson?.image} alt={lesson?.title} className="object-cover rounded-tl-2xl rounded-bl-2xl h-full w-full" />
                <img src="/icons/play.png" className="w-8 h-8 rounded-full object-contain absolute top-[40%] left-[37%]" />
            </div>

            <div className="flex md:p-4 p-2.5 flex-col gap-y-2">
                <h2 className="font-semibold text-lg">{lesson?.title}</h2>
                <p className="text-muted-foreground text-sm md:text-base">{trimString(lesson?.description, 64)}</p>

                <Progress value={40 * 100 * Math.random()} className="bg-gray-100" />
            </div>
        </Card>
    )
}


export default ContinueLearning
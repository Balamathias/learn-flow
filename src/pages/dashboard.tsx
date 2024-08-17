import ContinueLearning from "../components/dashboard/continue-learning"
import CourseCards from "../components/dashboard/course-cards"
import MaxWidthWrapper from "../components/max-width-wrapper"
import { Separator } from "../components/ui/separator"


const Dashboard = () => {
  return (
    <MaxWidthWrapper className="max-w-7xl gap-y-4 md:gap-y-6 md:mx-0 w-full justify-start">
      <div className="flex flex-col gap-y-3 mb-7">
        <h2 className="text-2xl md:text-3xl font-bold py-2">Welcome to LearnFlow</h2>
        <p className="font-semibold text-balance md:text-lg">Learn at LearnFlow at your own Pace.</p>
      </div>

      <Separator />

      <ContinueLearning />
      <CourseCards />
    </MaxWidthWrapper>
  )
}

export default Dashboard
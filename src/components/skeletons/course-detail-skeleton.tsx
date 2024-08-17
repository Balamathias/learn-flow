import { Skeleton } from "../ui/skeleton"

const CourseDetailSkeleton = () => {
    return (
        <div className="flex flex-col gap-y-2 my-8">
            <Skeleton className="h-6 w-full max-w-60" />
            <Skeleton className="h-96 w-full rounded-2xl" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <Skeleton className="h-72 w-full rounded-2xl" />
                <Skeleton className="h-60 w-full rounded-2xl" />
            </div>
        </div>
    )
}

export default CourseDetailSkeleton
import { Skeleton } from "../ui/skeleton"

const CourseCardsSkeleton = () => {
    return (
        <div className="flex flex-col gap-y-2 my-8">
            <Skeleton className="h-6 w-full max-w-60" />
            <Skeleton className="h-6 w-full max-w-96" />

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-8">
                {
                    [0,1, 3, 4].map(item => (
                        <Skeleton key={item} className="h-72 w-full rounded-2xl" />
                    ))
                }
            </div>
        </div>
    )
}

export default CourseCardsSkeleton
import { Skeleton } from "../ui/skeleton"

const ContinueLearningSkeleton = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <Skeleton className="h-6 w-full max-w-72" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {
                    [0,1].map(item => (
                        <Skeleton key={item} className="h-24 w-full rounded-lg" />
                    ))
                }
            </div>
        </div>
    )
}

export default ContinueLearningSkeleton
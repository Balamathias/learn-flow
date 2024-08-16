import { ReactNode } from "react"
import { cn } from "../lib/utils"

const MaxWidthWrapper = ({ children, className }: { children?: ReactNode, className?: string }) => {
  return (
    <div className={cn('flex max-w-5xl mx-auto py-2 flex-col gap-2.5', className)}>
        { children }
    </div>
  )
}

export default MaxWidthWrapper
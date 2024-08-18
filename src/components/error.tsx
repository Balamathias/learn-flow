import { cn } from "../lib/utils"

interface ErrorProps {
    title?: string,
    description?: string
    className?: string
}

/**
 * 
 * @param param0 An error component that accepts a title, description and a className (though all optional. They all aim at displaying certain errors that a user might encounter while using this application. The goal is to neatly display the kind of error it is and the possible ways to resolve it.)
 * @returns a neatly styled JSX representation of the error.
 */
const Error = ({ description, title, className }: ErrorProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-y-3 py-8 px-6", className)}>
        <h2 className="text-2xl text-red-500">{title || "An Error occured!"}</h2>
        <p className="text-muted-foreground tracking-tight">{description || "An unknown error has occured, please make sure you are connected to the internet... You could also reload the page. If the error persists, perhaps you may have to ensure you are accessing the site with the right credentials."}</p>
    </div>
  )
}

export default Error
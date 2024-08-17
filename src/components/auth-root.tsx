import { Navigate, Outlet } from "react-router-dom"
import MaxWidthWrapper from "./max-width-wrapper"
import { useStore } from "../hooks/useStore"

const AuthRoot = () => {
  const user = useStore(state => state.currentUser)

  // Redirect user to /dashboard if he/she is logged in
  if (user) return <Navigate to={'/dashboard'} />

  return (
    <MaxWidthWrapper className="flex flex-col-reverse md:flex-row w-full gap-4 min-h-screen items-center justify-center max-w-6xl">
        <div className="md:basis-1/2 w-full p-4">
            <Outlet />
        </div>
        <div className="">
            <img
                className="aspect-square object-contain"
                alt="Small team discussing ideas"
                aria-label="Theme discussing ideas Image"
                src="/small-team-discussing-ideas.png"
            />
        </div>
    </MaxWidthWrapper>
  )
}

export default AuthRoot
import { Outlet, useNavigate } from "react-router-dom"
import MaxWidthWrapper from "./max-width-wrapper"
import { auth } from "../firebase/config"
import { useEffect } from "react"

const AuthRoot = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (auth?.currentUser?.uid) {
      navigate('/dashboard')
    }
  }, [])

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
import { Link } from "react-router-dom"

const ExpandYourSkills = () => {
  return (
    <div className="flex flex-col gap-y-12 py-12 md:py-16 p-4">
        <div className="w-full flex flex-col md:flex-row gap-x-8 md:gap-x-0 md:gap-y-8 items-center justify-center max-w-5xl mx-auto p-4 md:p-8 rounded-2xl bg-yellow-500/80 relative">
            <div className="flex flex-col gap-y-4 md:gap-y-8 justify-between">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                    Expand your skills &
                    <br />
                    knowledge at any time.
                </h2>
                <p className="">Learn at your own pace with lifetime access on Mobile and Desktop.</p>
                <Link to={'/auth/sign-up'} className="rounded-2xl fon-bold shadow-sm bg-primary py-3.5 px-8 hover:bg-[#555] hover:transition-all font-semibold w-fit flex items-center justify-center text-gray-50">
                    Get Started
                </Link>
            </div>

            <div className="ml-4 hidden md:flex">
                <img
                    src="/hero-section.png"
                    alt="Hero Section Image"
                    className="rounded-2xl object-cover w-full h-[300px] -rotate-[7deg]"
                />
            </div>
        </div>
    </div>
  )
}

export default ExpandYourSkills
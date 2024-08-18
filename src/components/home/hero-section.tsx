import { Link } from "react-router-dom"
import { Avatar, AvatarImage } from "../ui/avatar"
import { cn } from "../../lib/utils"

const HeroSection = () => {
  return (
    <div className="w-full py-8 md:py-10 flex flex-col gap-y-6 items-center justify-center bg-[#222] text-center !pb-0">

      <h2 className="md:text-6xl text-3xl font-bold text-white leading-normal tracking-wide">
        The free, fun and effective <br />
        way to learn a language
      </h2>

      <p className="text-base md:text-lg text-gray-200">
        Learn at your own pace with lifetime access on mobile and desktop.
      </p>

      <Link to={'/auth/sign-up'} className="rounded-2xl fon-bold shadow-sm bg-yellow-500 py-3.5 px-4 hover:bg-blue-600 hover:transition-all font-semibold">
        Start a new course!
      </Link>

      <div className="flex flex-row items-center -space-x-2">
        {[0, 4, 7].map(n => (
          <Avatar key={n}>
            <AvatarImage src={"/user.png"} className={cn("peer")} alt="Hosts"/>
          </Avatar>
        ))}
      </div>

      <p className="text-base md:text-lg text-gray-200">
        Join thousands of students to start coding now!
      </p>

      <div className="flex flex-col">
        <img 
          src="/hero-section.png"
          className="object-contain rounded-tr-2xl rounded-tl-2xl"
          alt="Hero Section"
        />
      </div>
    </div>
  )
}

export default HeroSection
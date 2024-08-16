import MaxWidthWrapper from "../components/max-width-wrapper"
import Navbar from "../components/navbar"

const LandingPage = () => {
  return (
    <div className="min-w-screen">
      <div className="bg-[url('/Hero.png')] bg-cover bg-no-repeat min-h-screen w-full">
        <Navbar />
      </div>
      <img src="/logo-slide.png" />

      <div className="flex flex-col items-center justify-center py-8 md:py-12">
        <MaxWidthWrapper className="gap-y-6 items-center justify-center !max-w-7xl">
          <h2 className="text-4xl font-bold text-center leading-normal py-6">
            Special Features that makes our<br />online courses the best
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 md:gap-8">
            {
              Array.from([0, 1, 2]).map(item => (
                <img src="/row.png" className="" key={item} />
              ))
            }
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}

export default LandingPage

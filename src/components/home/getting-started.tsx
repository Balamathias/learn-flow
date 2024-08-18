import { Link } from "react-router-dom"

const GettingStarted = () => {
  return (
    <section className="flex flex-col py-8 md:py-10 gap-y-16 md:gap-y-12 max-w-7xl mx-auto items-center justify-center p-4">
        <div className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 items-center">
            <div>
                <img 
                    src="/person-on-call.png"
                    alt="Person Making Call"
                    className="rounded-2xl object-cover h-[420px]"
                />
            </div>
            <div className="flex flex-col gap-y-4 md:gap-y-10 justify-between">
                <h2 className="font-bold text-2xl md:text-4xl tracking-wide">Collaborate & Learn with Our platform.</h2>
                <p className="text-muted-foreground text-base md:text-lg">
                    We offer a wide range of language courses taught by experienced and qualified instructors, who are passionate about teaching, and dedicated to helping you achieve your goals.
                </p>
                <Link to={'/auth/sign-up'} className="rounded-2xl fon-bold shadow-sm bg-yellow-500 py-3.5 px-8 hover:bg-blue-600 hover:transition-all font-semibold w-fit flex items-center justify-center">
                    Get Started
                </Link>
            </div>
        </div>

        <div className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 items-center max-sm:flex max-sm:flex-col-reverse max-sm:w-full">
            <div className="flex flex-col gap-y-4 md:gap-y-10 justify-between">
                <h2 className="font-bold text-2xl md:text-4xl tracking-wide">Propel your career & increase your knowledge base.</h2>
                <p className="text-muted-foreground text-base md:text-lg">
                    LearnFlow is an online course class that provides various categories of programming courses, ranging from System Engineering, Devops, Backend development, Frontend development, FullStack development, ML and AI.
                </p>
                <Link to={'/auth/sign-up'} className="rounded-2xl fon-bold shadow-sm bg-yellow-500 py-3.5 px-8 hover:bg-blue-600 hover:transition-all font-semibold w-fit flex items-center justify-center">
                    Get Started
                </Link>
            </div>
            <div>
                <img 
                    src="/girl-with-hair.png"
                    alt="Girl with so much Hair"
                    className="rounded-2xl object-cover h-[420px]"
                />
            </div>
        </div>
    </section>
  )
}

export default GettingStarted
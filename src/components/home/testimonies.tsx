
// Dummy Testimonies
const testimonies = [
  {
    name: "John Doe",
    title: "Software Engineer",
    testimony: "I have been able to learn so much from the courses on this platform. I have been able to improve my skills and become a better software engineer. I am so grateful for this platform.",
    image: '/user.png'
  },
  {
    name: "Jane Doe",
    title: "UX Designer",
    testimony: "I have been able to learn so much from the courses on this platform. I have been able to improve my skills and become a better UX designer. I am so grateful for this platform.",
    image: '/user.png'
  },
  {
    name: "James Doe",
    title: "Data Scientist",
    testimony: "I have been able to learn so much from the courses on this platform. I have been able to improve my skills and become a better data scientist. I am so grateful for this platform.",
    image: '/user.png'
  },
  {
    name: "Jenny Doe",
    title: "Frontend Developer",
    testimony: "I have been able to learn so much from the courses on this platform. I have been able to improve my skills and become a better frontend developer. I am so grateful for this platform.",
    image: '/user.png'
  },
  {
    name: "Josh Doe",
    title: "Backend Developer",
    testimony: "I have been able to learn so much from the courses on this platform. I have been able to improve my skills and become a better backend developer. I am so grateful for this platform.",
    image: '/user.png',
  },
  {
    name: "Jude Doe",
    title: "Fullstack Developer",
    testimony: "I have been able to learn so much from the courses on this platform. I have been able to improve my skills and become a better fullstack developer. I am so grateful for this platform.",
    image: '/user.png'
  },
  {
    name: "Jasper Doe",
    title: "Machine Learning Engineer",
    testimony: "I have been able to learn so much from the courses on this platform. I have been able to improve my skills and become a better machine learning engineer. I am so grateful for this platform.",
    image: '/user.png'
  },
  {
    name: "Jen Doe",
    title: "Artificial Intelligence Engineer",
    testimony: "I have been able to learn so much from the courses on this platform. I have been able to improve my skills and become a better artificial intelligence engineer. I am so grateful for this platform.",
    image: '/user.png'
  },
  {
    name: "Jaspera Doe",
    title: "Machine Learning Engineer",
    testimony: "I have been able to learn so much from the courses on this platform. I have been able to improve my skills and become a better machine learning engineer. I am so grateful for this platform.",
    image: '/user.png'
  },
  {
    name: "Jenadine Doe",
    title: "Artificial Intelligence Engineer",
    testimony: "I have been able to learn so much from the courses on this platform. I have been able to improve my skills and become a better artificial intelligence engineer. I am so grateful for this platform.",
    image: '/user.png'
  },
  {
    name: "Jasp Doe",
    title: "Machine Learning Engineer",
    testimony: "I have been able to learn so much from the courses on this platform. I have been able to improve my skills and become a better machine learning engineer. I am so grateful for this platform.",
    image: '/user.png'
  },
  {
    name: "Jenet Doe",
    title: "Artificial Intelligence Engineer",
    testimony: "I have been able to learn so much from the courses on this platform. I have been able to improve my skills and become a better artificial intelligence engineer. I am so grateful for this platform.",
    image: '/user.png'
  },
]

const Testimonies = () => {
  return (
    <section className="bg-[#222] w-full py-12">
      <div aria-label="Testimonial Section" className="flex flex-col py-8 md:py-10 gap-y-16 md:gap-y-12 max-w-7xl mx-auto items-center justify-center p-4">
        <h2 className="font-bold text-3xl md:text-4xl tracking-wide text-gray-100 text-center">
          Learners like you achieve their goals through our Courses
        </h2>
        <p className="text-gray-200 text-base md:text-lg text-center">
            We believe everyone has something to give, and everyone has something to learn. <br />
            Our platform is designed to help you achieve your goals, and to help you become the best version of yourself.
        </p>

        <div className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
          {
            testimonies.map(testimony => (
              <div className="flex flex-col gap-y-4 md:gap-y-10 justify-between rounded-2xl p-4 md:p-8 shadow-sm border border-[#444]" key={testimony.name}>
                <div className="flex gap-x-2 items-center">
                  <img src={testimony.image} className="w-14 h-14 object-contain" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-100">{testimony.name}</h2>
                    <p className="text-gray-400 text-base">{testimony.title}</p>
                  </div>
                </div>
                <p className="text-gray-200 text-base">{testimony.testimony}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Testimonies
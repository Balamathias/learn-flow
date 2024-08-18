const features = [
    {
        title: "Made by Experts",
        description: "Our programming lessons are meticulously crafted by our experts, who brings in their years of teaching and practical experience to impact knowledge that matches world standard.",
        icon: '/vuesax/bold/teacher.png'
    },
    {
        title: "Pragmatic approach",
        description: "We generally adopt a model we refer to as the 'pragmatic' approach which involves project based learning that involves solving real-world problems.",
        icon: '/vuesax/bold/briefcase.png'
    },
    {
        title: "Easy to Understand",
        description: "Whether you are a beginner, and entirely new to the field of programming, or whether you are a booming expert who wants to level up his/her skills. Our courses are designed to match your varying needs.",
        icon: '/vuesax/bold/teacher.png'
    },
]

const SpecialFeatures = () => {
  return (
    <section className="flex flex-col gap-y-6 md:gap-y-12 py-8 md:py-16 items-center justify-center max-w-7xl mx-auto p-4">
        <h2 className="text-4xl tracking-wide font-bold leading-relaxed text-center">Special Features that makes our<br />online courses the best</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {
                features.map(feature => (
                    <div className="flex flex-col gap-y-2 md:gap-3 rounded-2xl p-4 md:p-8 shadow-sm bg-secondary/90 justify-between">
                        <h2 className="text-xl font-bold">{feature.title}</h2>
                        <p className="text-muted-foreground text-base">{feature.description}</p>
                        <div className="flex justify-end">
                            <img src={feature.icon} className=" w-14 h-14 object-contain justify-end float-right" />
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default SpecialFeatures
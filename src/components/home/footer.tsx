import Branding from "../branding"

const Footer = () => {
  return (
    <div className="bg-[#222]">
        <div className="flex flex-col py-12 md:py-16 gap-y-16 md:gap-y-12 max-w-7xl mx-auto items-center justify-center p-4">
        <section>
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex flex-col gap-y-3">
                    <Branding invert isLink />
                    <p className="text-gray-200">Top learning experiences that creates more talents in the world.</p>
                </div>

                <div className="flex flex-row gap-x-4">
                    <div className="flex flex-col gap-y-2"></div>
                </div>
            </div>
        </section>
        <section></section>
    </div>
    </div>
  )
}

export default Footer
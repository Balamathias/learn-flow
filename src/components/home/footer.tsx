import { LucideFacebook, LucideInstagram, LucideLinkedin, LucideTwitter } from "lucide-react"
import Branding from "../branding"
import { Separator } from "../ui/separator"

const Footer = () => {
  return (
    <footer className="bg-[#222] w-full">
        <div className="w-full flex flex-col py-12 md:py-16 gap-y-16 md:gap-y-12 max-w-7xl mx-auto items-center justify-center p-4">
            <section className="flex flex-col w-full">
                <div className="flex flex-col md:flex-row justify-between gap-4 w-full items-start">
                    <div className="flex flex-col gap-y-3">
                        <Branding invert isLink />
                        <p className="text-gray-200">Top learning experiences that creates more talents <br className="hidden md:block" />in the world.</p>
                    </div>

                    <div className="flex flex-row gap-x-4">
                        <div className="flex flex-col gap-y-2">
                            <h3 className="text-gray-200 font-bold">Links</h3>
                            <ul className="flex flex-col gap-y-1">
                                <li className="text-gray-200">Home</li>
                                <li className="text-gray-200">Courses</li>
                                <li className="text-gray-200">About</li>
                                <li className="text-gray-200">Contact</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h3 className="text-gray-200 font-bold">Social</h3>
                            <ul className="flex flex-col gap-y-1">
                                <li className="text-gray-200">Facebook</li>
                                <li className="text-gray-200">Twitter</li>
                                <li className="text-gray-200">Instagram</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <h3 className="text-gray-200 font-bold">Legal</h3>
                            <ul className="flex flex-col gap-y-1">
                                <li className="text-gray-200">Terms & Conditions</li>
                                <li className="text-gray-200">Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Separator className="w-full bg-gray-600/70" />
        <section className="py-4 max-w-7xl mx-auto flex justify-between flex-col md:flex-row gap-3 p-4">
            <p className="text-gray-200">&copy; {new Date().getFullYear()} LearnFlow. The Programmers University, All rights reserved.</p>

            <div className="flex gap-x-2 items-center text-gray-200 cursor-pointer">
                <LucideFacebook size={24} />
                <LucideInstagram size={24} />
                <LucideTwitter size={24} />
                <LucideLinkedin size={24} />
            </div>
        </section>
    </footer>
  )
}

export default Footer
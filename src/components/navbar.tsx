import { Link, useNavigate } from "react-router-dom"
import Branding from "./branding"
import MaxWidthWrapper from "./max-width-wrapper"
import { Button } from "./ui/button"

const links = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Features',
    href: '/features',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
]

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="w-full flex h-16 bg-[#222] z-10 px-3 md:h-20">
      <MaxWidthWrapper className="!flex-row items-center justify-between w-full !max-w-7xl">
        <Branding isLink invert />

        <div className="hidden md:flex gap-x-5 items-center flex-row text-lg">
          {
            links.map(link => (
              <Link className="hover:text-yellow-500 hover:underline hover:transition-all text-white" to={link.href} key={link.label}>{link.label}</Link>
            ))
          }
        </div>

        <div>
          <Button onClick={() => navigate('/auth/sign-up')} className="rounded-full text-xs text-yellow-500 hover:text-primary font-bold hover:bg-yellow-500 border-yellow-500 border hover:transition-all hover:duration-300 bg-transparent" variant={'secondary'}>{"Let's"} start your learning journey</Button>
        </div>

      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
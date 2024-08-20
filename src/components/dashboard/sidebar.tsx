import { NavLink } from "react-router-dom"
import Branding from "../branding"
import { useState } from "react"
import SignOutDialog from "./sign-out-dialog"
import { cn } from "../../lib/utils"


const links = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: '/vuesax/outline/dashboard.png',
  },
  {
    title: 'All Courses',
    href: '/dashboard/all-courses',
    icon: '/vuesax/outline/book.png',
  },
  {
    title: 'Course Builder',
    href: '/dashboard/course-builder',
    icon: '/vuesax/outline/edit.png',
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: '/vuesax/outline/setting-2.png',
  },
  {
    title: 'Logout',
    href: '#logout',
    icon: '/logout.png',
  },
]

const Sidebar = () => {

  const [openLogoutModal, setOpenLogoutModal] = useState(false)

  return (
    <nav className="md:flex w-[220px] z-30 fixed min-h-screen flex-col gap-y-4 scroll-auto p-5 hidden border-r border-r-secondary items-start bg-background">
      <Branding isLink />

      <div className="flex flex-col gap-y-6 py-8">
        <h2 className="text-muted-foreground">MENU</h2>
        {
          links.map(link => (
            <NavLink 
              to={link.href} 
              className={({isActive}) => cn("flex flex-row items-center p-2 py-2 gap-x-2 rounded-md hover:transition-all hover:duration-300 hover:text-primary px-3.5 relative hover:bg-secondary", {"bg-primary hover:bg-primary/90 hover:opacity-75 hover:transition-all text-gray-100 hover:text-gray-200": isActive && link?.title !== 'Logout'})} 
              key={link.title}
              end={link?.href === '/dashboard'}
              onClick={link?.title === 'Logout' ? (e) => {
                setOpenLogoutModal(true)
                e.preventDefault()
              } : undefined}
            >
              {({isActive}) => (
                <>
                  <img src={link.icon} className={cn("pointer-events-auto", {"invert pointer-events-auto": isActive && link?.title !== 'Logout'})} />
                  <span className="pointer-events-auto">{link.title}</span>
                  {isActive && link?.title !== 'Logout' && <span className="absolute -left-5 h-full w-1 bg-primary rounded-sm" />}
                </>
              )}
            </NavLink>
          ))
        }
      </div>
      {
        openLogoutModal && (
          <SignOutDialog open={openLogoutModal} onOpenChange={setOpenLogoutModal} />
        )
      }
    </nav>
  )
}

export default Sidebar
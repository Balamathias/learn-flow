import { NavLink } from "react-router-dom"
import Branding from "../branding"
import clsx from "clsx"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "../ui/dialog"
import { Button } from "../ui/button"
import { useSignOut } from "../../firebase/api/auth"


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
    href: '/dashboard/#logout',
    icon: '/logout.png',
  },
]

const Sidebar = () => {

  const [openLogoutModal, setOpenLogoutModal] = useState(false)
  const { mutate: signOut, isPending: isLoggingOut } = useSignOut()

  return (
    <nav className="md:flex w-[220px] z-20 fixed min-h-screen flex-col gap-y-4 scroll-auto p-5 hidden border-r border-r-secondary items-start bg-background">
      <Branding isLink />

      <div className="flex flex-col gap-y-6 py-8">
        {
          links.map(link => (
            <NavLink 
              to={link.href} 
              className={({isActive}) => clsx("flex flex-row items-center p-2 py-2 gap-x-2 rounded-md hover:transition-all hover:bg-secondary hover:duration-300 hover:text-primary px-3.5", {"bg-primary hover:bg-primary/90 hover:opacity-75 hover:transition-all text-gray-100": isActive})} 
              key={link.title}
              end
              onClick={link?.title === 'Logout' ? () => {setOpenLogoutModal(true)} : undefined}
            >
              {({isActive}) => (
                <>
                  <img src={link.icon} className={clsx("pointer-events-auto", {"invert hover:invert-0 pointer-events-auto": isActive})} />
                  <span className="pointer-events-auto">{link.title}</span>
                </>
              )}
            </NavLink>
          ))
        }
      </div>
      {
        openLogoutModal && (
          <Dialog open={openLogoutModal} onOpenChange={setOpenLogoutModal}>
            <DialogContent>
              <DialogTitle className="font-bold py-2">Logout?</DialogTitle>
              <DialogDescription>
                You are about to logout of <b className="font-bold">LearnFlow</b>, Do you wish to proceed?
              </DialogDescription>
              <DialogFooter>
                <Button onClick={() => signOut()} disabled={isLoggingOut}>{isLoggingOut ? 'Processing' : 'Proceed'}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )
      }
    </nav>
  )
}

export default Sidebar
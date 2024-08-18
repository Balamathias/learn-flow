import { LucideMenu } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { NavLink } from "react-router-dom"
import { cn } from "../../lib/utils"
import { useState } from "react"
import SignOutDialog from "./sign-out-dialog"

const mobileLinks = [
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

/**
 * May accept props in the future
 * @returns JSX representation of mobile sidebar
 */
const MobileSidebar = () => {
  const [openLogoutModal, setOpenLogoutModal] = useState(false)
  const [openSheet, setOpenSheet] = useState(false)
  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger>
            <Button variant={'ghost'} size={'icon'}>
                <LucideMenu size={28}/>
            </Button>
        </SheetTrigger>
        <SheetContent className="w-full max-w-[250px] h-full">
            <div className="flex flex-col gap-y-4 py-6 md:py-8">
                {
                    mobileLinks.map(link => (
                        <NavLink 
                          to={link.href} 
                          className={({isActive}) => cn("flex flex-row items-center p-2 py-2 gap-x-2 rounded-md hover:transition-all hover:bg-secondary hover:duration-300 hover:text-primary px-3.5", {"bg-primary hover:opacity-75 text-gray-100": isActive && link?.title !== 'Logout'})} 
                          key={link.title}
                          end={link?.href === '/dashboard'}
                          onClick={link?.title === 'Logout' ? () => {
                            setOpenLogoutModal(true)
                            setOpenSheet(false)
                          } : () => {
                            setOpenSheet(false)
                          }}
                        >
                          {({isActive}) => (
                            <>
                              <img src={link.icon} className={cn("pointer-events-auto", {"invert hover:invert-0 pointer-events-auto": isActive && link?.title !== 'Logout'})} />
                              <span className="pointer-events-auto">{link.title}</span>
                            </>
                          )}
                        </NavLink>
                      ))
                }
            </div>
        </SheetContent>
        {
            openLogoutModal && (
                <SignOutDialog open={openLogoutModal} onOpenChange={setOpenLogoutModal} />
            )
        }
    </Sheet>
  )
}

export default MobileSidebar
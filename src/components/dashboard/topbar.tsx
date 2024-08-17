import { AvatarFallback } from "@radix-ui/react-avatar"
import { Avatar, AvatarImage } from "../ui/avatar"
import { auth } from "../../firebase/config"
import Branding from "../branding"

const Topbar = () => {
  
  return (
    <nav className='bg-background h-16 w-full flex flex-row items-center justify-between sticky top-0 p-4'>
        <div>
            <div className="md:hidden flex">
                <Branding isLink />
            </div>
        </div>

        <div className="flex flex-row items-center gap-x-2 gap-y-1">
            <div className="md:flex flex-col hidden">
                <h2 className="font-bold">{"Amarachi"}</h2>
                <p className="text-muted-foreground -mt-1">Learner</p>
            </div>
            <Avatar>
                <AvatarImage src="/user.png" />
                <AvatarFallback>
                    {auth?.currentUser?.email}
                </AvatarFallback>
            </Avatar>
        </div>
    </nav>
  )
}

export default Topbar
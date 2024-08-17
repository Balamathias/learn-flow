import { Outlet, useNavigate } from "react-router-dom"

import Sidebar from "./dashboard/sidebar"
import { useEffect } from "react"
import Topbar from "./dashboard/topbar"
import { auth } from "../firebase/config"

const Root = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth?.currentUser) {
      navigate('/auth/sign-in')
    }
  }, [])

  return (
    <div className="min-h-screen relative bg-gray-100 w-full">
        <Sidebar />
        <main className="flex flex-col gap-y-4 w-full overflow-y-auto relative">
            <Topbar />
            <div className="md:ml-[220px] p-4 md:p-10">
              <Outlet />
            </div>
        </main>
    </div>
  )
}

export default Root
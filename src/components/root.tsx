import { Outlet } from "react-router-dom"

import Sidebar from "./dashboard/sidebar"
import { useEffect } from "react"

const Root = () => {

  useEffect(() => {}, [])

  return (
    <div className="min-h-screen relative bg-gray-100 w-full">
        <Sidebar />
        <main className="flex flex-col gap-y-4 p-2 md:p-5 w-full overflow-y-auto">
            <div className="md:ml-[220px]">
              <Outlet />
            </div>
        </main>
    </div>
  )
}

export default Root
import { Navigate, Outlet } from "react-router-dom"

import Sidebar from "./dashboard/sidebar"
import Topbar from "./dashboard/topbar"
import { useStore } from "../hooks/useStore"

const Root = () => {

  const user = useStore(state => state.currentUser)
  
  // Redirect user to /auth/sign-in
  if (!user) return <Navigate to={'/auth/sign-in'} />

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
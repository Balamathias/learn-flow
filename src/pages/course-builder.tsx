import { PlusIcon } from "@radix-ui/react-icons"
import { Card } from "../components/ui/card"
import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog"
import AddCourse from "../components/dashboard/forms/add-course"

const CourseBuilder = () => {
  const [openModal, setModal] = useState(false)
  return (
    <div className="flex flex-col min-h-screen">
        <div className="!max-w-7xl flex flex-col items-start justify-start py-8 gap-y-5 max-sm:mx-auto">
            <h2 className="font-bold text-xl md:text-2xl">Create a new Course</h2>
            <Card onClick={() => setModal(true)} className="p-5 h-60 w-96 rounded-lg flex items-center justify-center bg-background shadow-none border-none cursor-pointer hover:opacity-75">
                <span className="bg-primary w-8 h-8 flex rounded-full items-center justify-center">
                    <PlusIcon className="text-white" fontSize={18}/>
                </span>
            </Card>
            {
              openModal && (
                <Dialog
                  open={openModal}
                  onOpenChange={setModal}
                >
                  <DialogContent>
                    <DialogTitle>Add New Course</DialogTitle>
                    <AddCourse closeModal={() => setModal(false)} />
                  </DialogContent>
                </Dialog>
              )
            }
        </div>
    </div>
  )
}

export default CourseBuilder
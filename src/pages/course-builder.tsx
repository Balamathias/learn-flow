import { PlusIcon } from "@radix-ui/react-icons"
import { Card } from "../components/ui/card"
import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog"
import AddCourse from "../components/dashboard/forms/add-course"
import { useMetadata } from "../hooks/useMetadat"

const CourseBuilder = () => {
  useMetadata({title: "Add a new course"})
  const [openModal, setModal] = useState(false)
  return (
    <div className="flex flex-col min-h-screen">
        <div className="!max-w-7xl flex flex-col items-start justify-start py-8 gap-y-5">
            <h2 className="font-bold text-xl md:text-2xl">Create a new Course</h2>
            <Card onClick={() => setModal(true)} className="p-5 h-60 md:w-96 w-full rounded-lg flex items-center justify-center bg-background shadow-none border-none cursor-pointer hover:opacity-75">
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
                  <DialogContent className="rounded-xl">
                    <DialogTitle className="py-2 tracking-tight font-semibold">Add New Course</DialogTitle>
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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form"
import { Input } from "../../ui/input"
// import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { addCourseSchema } from "../../../schema/course"
import { useAddCourse } from "../../../firebase/api/course"
import { useState } from "react"

interface AddCourseProps {
  closeModal?: () => void
}

const AddCourse = ({closeModal}: AddCourseProps) => {
  const { mutate: addCourse, isPending } = useAddCourse()
  // const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const form = useForm<z.infer<typeof addCourseSchema>>({
      resolver: zodResolver(addCourseSchema),
      defaultValues: {
        title: "",
        description: "",
        image: selectedFile ?? "",
        price: 0
      },
    })
    
    const onSubmit = (values: z.infer<typeof addCourseSchema>) => {
      console.log(values)
      addCourse({ ...values, image: selectedFile }, {
        onSuccess: () => {
          toast.success("New Course added successfully.")
          closeModal?.()
        }
      })
    }
  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Title</FormLabel>
                <FormControl>
                  <Input placeholder="Course Title..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course description</FormLabel>
                <FormControl>
                  <Input placeholder="Course description" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={() => (
              <FormItem>
                <FormLabel>Course Image</FormLabel>
                <FormControl>
                  <Input placeholder="Upload course image" accept="image/*" type="file" 
                     onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setSelectedFile(e.target.files[0]);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Price</FormLabel>
                <FormControl>
                  <Input placeholder="Course Price..." type="text" 
                  {...field} 
                  onChange={e => form.setValue("price", parseInt(e.target.value || "0"))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" disabled={isPending} className="w-full" size={'lg'}>{isPending ? 'Processing...' : 'Save'}</Button>
        </form>
      </Form>
    </div>
  )
}

export default AddCourse
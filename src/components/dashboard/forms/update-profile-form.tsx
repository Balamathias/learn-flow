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
import { updateProfileSchema } from "../../../schema/course"
import { useStore } from "../../../hooks/useStore"
import { useUpdateProfile } from "../../../firebase/api/profile"
import { Profile } from "../../../types/profile"

const UpdateProfileForm = ({ profile }: { profile: Profile | null | undefined }) => {
  const { mutate: updateProfile, isPending } = useUpdateProfile()
  
  const currentUser = useStore(state => state.currentUser)

  console.log(profile)

  const form = useForm<z.infer<typeof updateProfileSchema>>({
      resolver: zodResolver(updateProfileSchema),
      defaultValues: {
        first_name: profile?.first_name ?? "",
        last_name: profile?.last_name ?? "",
        nickname: profile?.nickname ?? "",
        current_password: "",
        account_email: currentUser?.email || "",

        new_password: "",
        confirm_password: ""
      },
    })
    
    const onSubmit = (values: z.infer<typeof updateProfileSchema>) => {

      if (values?.new_password?.trim() !== values?.confirm_password?.trim()) {
        form.setError('confirm_password', {message: "Passwords do not match!"})
        form.setError('new_password', {message: "Passwords do not match!"})
        return
      }

      updateProfile({...values}, {
        onSuccess: () => {
          toast.success('Account details updated successfully')
          form.reset()
        }
      })
    }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <section className="flex flex-col gap-y-3 p-2.5 md:p-4 rounded-xl my-3 bg-card">
            <h2 className="text-xl font-bold">Account Information</h2>
            <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                    <Input placeholder="First Name..." {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            
            <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                    <Input placeholder="Last Name" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="nickname"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Nickname</FormLabel>
                    <FormControl>
                    <Input placeholder="Nickname" type="text" 
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
          </section>

          <section className="flex flex-col gap-y-3 p-2.5 md:p-4 rounded-xl my-3 bg-card">
            <h2 className="text-xl font-bold">Login Information</h2>
            <FormField
                control={form.control}
                name="current_password"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                    <Input 
                    type="password" 
                    {...field} 
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
          </section>


          <section className="flex flex-col gap-y-3 p-2.5 md:p-4 rounded-xl my-3 bg-card">
            <h2 className="text-xl font-bold py-2.5">Update Account Information</h2>
            <FormField
                control={form.control}
                name="account_email"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Account Email</FormLabel>
                    <FormControl>
                    <Input 
                        {...field} 
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="new_password"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                    <Input 
                        {...field} 
                        type="password"
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                    <Input 
                        {...field} 
                        type="password"
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
          </section>
          
          <footer className="py-2">
            <Button type="submit" variant={'secondary'} disabled={isPending} className="py-3 px-3.5 bg-yellow-500 text-primary text-pretty w-full rounded-full hover:bg-yellow-600 hover:transition-all" size={'lg'}>{isPending ? 'Processing...' : 'Save'}</Button>
          </footer>
        </form>
      </Form>
    </div>
  )
}

export default UpdateProfileForm
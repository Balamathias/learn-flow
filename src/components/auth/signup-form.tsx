"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { signUpSchema } from "../../schema/auth"
import { Input } from "../ui/input"
import { useSignUp } from "../../firebase/api/auth"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

/**
 * Sign Up component
 * @returns React.JSX
 */
export default function SignUpForm() {

  const { mutate: signUp, isPending } = useSignUp()
  const navigate = useNavigate()


    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
          email: "",
          username: "",
          password: "",
          confirm_password: ""
        },
      })
     
      const onSubmit = (values: z.infer<typeof signUpSchema>) => {
        const { email, password, username } = values
        if (password.trim() !== values?.confirm_password.trim()) {
          form.setError('confirm_password', {message: "Passwords do not match!"})
          form.setError('password', {message: "Passwords do not match!"})
          return
        }

        signUp({ email, password, username }, {
          onSuccess: () => {
            toast.success("Signed up successfully.")
            navigate('/dashboard');
          }
        })
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription className="hidden">
                This is your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username..." {...field} />
              </FormControl>
              <FormDescription className="hidden">
                This is your username.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Your password..." type="password" {...field} />
              </FormControl>
              <FormDescription className="hidden">
                This is your password.
              </FormDescription>
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
                <Input placeholder="Confirm password..." type="password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full" size={'lg'}>{isPending ? 'Processing...' : 'Register'}</Button>
      </form>
    </Form>
  )
}

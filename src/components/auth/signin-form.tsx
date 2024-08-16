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
import { signInSchema } from "../../schema/auth"
import { Input } from "../ui/input"
import { Checkbox } from "../ui/checkbox"
import { Link, useNavigate } from "react-router-dom"
import { useSignIn } from "../../firebase/api/auth"
import { toast } from "sonner"

/**
 * Sign Up component
 * @returns React.JSX
 */
export default function SignInForm() {
  const { mutate: signIn, isPending } = useSignIn()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof signInSchema>>({
      resolver: zodResolver(signInSchema),
      defaultValues: {
        email: "",
        password: "",
        remember: false
      },
    })
    
    const onSubmit = (values: z.infer<typeof signInSchema>) => {
      const { email, password } = values

      signIn({ email, password }, {
        onSuccess: () => {
          toast.success("Signed in successfully.")
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your password..." type="password" {...field} />
              </FormControl>
              <FormDescription className="hidden">
                This is your password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex flex-row gap-x-1.5 flex-wrap items-center">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-2"
                  />
                </FormControl>
                <FormLabel className="py-0 my-0">Remember Me</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link to={'/auth/forgot-password'} className="text-muted-foreground hover:underline hover:transition-all">Forgot password?</Link>
        </div>
        
        <Button type="submit" disabled={isPending} className="w-full" size={'lg'}>{isPending ? 'Processing...' : 'Login'}</Button>
      </form>
    </Form>
  )
}

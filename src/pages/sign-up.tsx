import { Link } from "react-router-dom"
import SignUpForm from "../components/auth/signup-form"
import Branding from "../components/branding"
import { Card } from "../components/ui/card"
import { useMetadata } from "../hooks/useMetadat"

const SignUp = () => {
  useMetadata({title: "Sign up | LearnFlow"})
  return (
    <div className="flex flex-col gap-y-3">
      <Branding isLink />
      <Card className="p-3 md:p-5 rounded-md border py-6 md:py-8 flex flex-col gap-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Welcome!</h2>
        <p className="text-muted-foreground">Sign up to LearnFlow right now.</p>
        <SignUpForm />

        <p className="text-muted-foreground text-center">
          Already have an account? 
          <Link to={'/auth/sign-in'} className="font-bold"> Login</Link>.
        </p>
      </Card>
    </div>
  )
}

export default SignUp
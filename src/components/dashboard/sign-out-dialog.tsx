import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "../ui/dialog"
import { Button } from "../ui/button"
import { useSignOut } from "../../firebase/api/auth"

const SignOutDialog = ({onOpenChange, open}: {open?: boolean, onOpenChange?: (bool: boolean) => void }) => {
  const { mutate: signOut, isPending: isLoggingOut } = useSignOut()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="rounded-xl max-[364px]:max-w-[320px]">
            <DialogTitle className="font-bold py-2">Logout?</DialogTitle>
            <DialogDescription>
            You are about to logout of <b className="font-bold">LearnFlow</b>, Do you wish to proceed?
            </DialogDescription>
            <DialogFooter>
            <Button onClick={() => signOut()} disabled={isLoggingOut}>{isLoggingOut ? 'Processing' : 'Proceed'}</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default SignOutDialog
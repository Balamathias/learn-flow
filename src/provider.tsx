import { PropsWithChildren, useEffect } from "react"
import { useStore } from "./hooks/useStore"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/config"

export function Provider({ children }: PropsWithChildren) {

  const setCurrentUser = useStore(state => state.setCurrentUser)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    })
    
    return unsubscribe
  }, [])

  return (
    <>
      {children}
    </>
  )
}

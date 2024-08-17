import { useMutation, useQuery } from '@tanstack/react-query'
import { auth, db } from '../config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { toast } from 'sonner'
import { QUERY_KEYS } from './query-keys'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { Profile } from '../../types/profile'

const profileRef = collection(db, "profile")

export const useSignIn = () => useMutation({
    mutationKey: [QUERY_KEYS['sign-in']],
    mutationFn: async ({email, password}: { email: string, password: string }) => {
        await signInWithEmailAndPassword(auth, email, password)
    },
    onError: (err) => toast.error(err?.message),
})


export const useSignUp = () => useMutation({
    mutationKey: [QUERY_KEYS['sign-up']],
    mutationFn: async ({email, password, username}: { email: string, password: string, username: string }) => {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        /** Add a user's profile on Sign up. */
        await addDoc(profileRef, {
            email,
            username,
            user_id: user?.user?.uid,
            created_at: new Date().toISOString()
        })
    },
    onError: (err) => toast.error(err?.message)
})


export const useSignOut = () => {
    const navigate = useNavigate()

    return useMutation({
            mutationKey: [QUERY_KEYS.sign_out],
            mutationFn: async () => {
                await signOut(auth)
            },
            onSuccess: () => {
                toast.success('Signed out successfully.')
                navigate('/auth/sign-in')
            },
            onError: (err) => toast.error(err?.message),
        })
}

/**
 * @description Get User Profile
 * @returns Profile
 */
export const useGetProfile = () => useQuery({
    queryKey: [QUERY_KEYS.get_profile],
    queryFn: async () => {
        if (!auth.currentUser?.uid) return
        const q = query(collection(db, "profile"), where("user_id", "==", auth.currentUser.uid))
        const data = await getDocs(q)
        console.log(data)
        return data.docs.map(doc => ({...doc.data(), id: doc.id}))[0] as Profile
    }
})

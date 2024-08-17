import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "./query-keys";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config";
import { useGetProfile } from "./auth";
import { toast } from "sonner";
import { updateEmail, updatePassword } from "firebase/auth";

export const useUpdateProfile = () => {
    const { data: profile } = useGetProfile()
    const user = auth?.currentUser

    return useMutation({
        mutationKey: [QUERY_KEYS.update_profile],
        mutationFn: async (data : Record<string, string>) => {
            console.log(profile)
            if (!profile?.id) return

            if (data?.account_email && (user?.email !== data?.account_email)) {
                await updateEmail(user!, data?.account_email)
            }

            if (data?.new_password) {
                if (data?.new_password.length < 5) {
                    throw new Error("Password character must exceed 5 characters")
                }
                await updatePassword(user!, data?.new_password)
            }
            
            const profileRef = doc(db, 'profile', profile.id)
            await updateDoc(profileRef, {
                first_name: data?.first_name,
                last_name: data?.last_name,
                nickname: data?.nickname,
                updated_at: new Date().toISOString(),
            })
        },
        onError: err => toast.error(err?.message)
    })
}
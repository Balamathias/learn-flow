import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "./query-keys";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config";
import { useGetProfile } from "./auth";
import { toast } from "sonner";

export const useUpdateProfile = () => {
    const { data: profile } = useGetProfile()

    return useMutation({
        mutationKey: [QUERY_KEYS.update_profile],
        mutationFn: async (data : Record<string, unknown>) => {
            console.log(profile)
            if (!profile?.id) return
            
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
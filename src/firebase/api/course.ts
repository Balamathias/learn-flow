import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { QUERY_KEYS } from "./query-keys";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, storage } from "../config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Course } from "../../types/course";


const courseRef = collection(db, "courses")

/**
 * @title string - course title
 * @description string - course description
 * @image File - The Image file to upload
 * @price float | number - Price
 * @description This hook exposes a *mutate function*, use it to initiate course adding functionality <br />
 * You can also check for *pending* and *error* states. Rename it to whatever you may.
 * @returns Course Data
 */
export const useAddCourse = () => useMutation({
    mutationKey: [QUERY_KEYS.add_course],
    mutationFn: async (data: {title: string, description: string, image?: File | null, price: number}) => {
        if (!data?.image || !data?.image?.name) return
        const courseImageStorageRef = ref(storage, 'course_images/'+ data?.image?.name)

        const uploadRef = await uploadBytes(courseImageStorageRef, data.image!)
        const url = await getDownloadURL(uploadRef.ref)
        await addDoc(courseRef, {
            title: data.title,
            description: data.description,
            image: url,
            price: data.price
        })
    },
    onError: (err) => toast.error(err?.message)
})

export const useGetCourses = () => useQuery({
    queryKey: [QUERY_KEYS.get_courses],
    queryFn: async () => {
        const data = await getDocs(courseRef)
        return data?.docs?.map(doc => ({...doc.data(), id: doc.id} as Course))
    }
})
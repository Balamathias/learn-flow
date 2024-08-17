import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { QUERY_KEYS } from "./query-keys";
import { addDoc, collection, doc, getDoc, getDocs, limit, orderBy, query } from "firebase/firestore";
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

        /**
         * Save Image to FireStorage
         * Save the image link to courses accordingly.
         */
        const uploadRef = await uploadBytes(courseImageStorageRef, data.image!)
        const url = await getDownloadURL(uploadRef.ref)
        await addDoc(courseRef, {
            title: data.title,
            description: data.description,
            image: url,
            price: data.price,
            created_at: new Date().toISOString()
        })
    },
    onError: (err) => toast.error(err?.message)
})

/**
 * 
 * @param count - Number of items to query at a time - optional but defaults to "10"
 * @param ordering - Order by a particular field - optional - defaults to "created_at"
 * @param order - Whether it should be in 'asc' or 'desc' order - optional - defaults to "asc"
 * @returns type ```Course[]```
 */
export const useGetCourses = (count?: number, ordering?: keyof Course, order?: 'asc' | 'desc') => useQuery({
    queryKey: [QUERY_KEYS.get_courses, count ?? 10, ordering ?? 'created_at', order ?? 'asc'],
    queryFn: async () => {
        const q = query(courseRef, orderBy(ordering || 'created_at', order ?? 'asc'), limit(count || 10))
        const data = await getDocs(q)
        return data?.docs?.map(doc => ({...doc.data(), id: doc.id} as Course))
    },
})

/**
 * @description Get User Profile
 * @returns Profile
 */
export const useGetCourse = (id: string) => useQuery({
    queryKey: [QUERY_KEYS.get_course, id],
    queryFn: async () => {
        const docRef = doc(db, "courses", id);
        const docSnap = await getDoc(docRef);
        return {...docSnap.data(), id: docSnap.id} as Course
    }
})
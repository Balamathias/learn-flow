import { useGetProfile } from "../../firebase/api/auth"
import Error from "../error"
import { Skeleton } from "../ui/skeleton"
import UpdateProfileForm from "./forms/update-profile-form"

const UpdateProfile = () => {
    const { data: profile, isPending: loadingProfile, error, isError } = useGetProfile()

    if (loadingProfile) {
        return (
            <div className="flex flex-col gap-y-6 w-full">
                {[1,2,3].map(sk => (
                    <Skeleton className="w-full h-60" key={sk} />
                ))}
            </div>
        )
    }
  return (
    <div className="flex flex-col gap-y-3">
        {isError && <Error title={error?.message} description=""/>}
        <h2 className="text-2xl md:text-3xl font-bold py-2 border-b-2 border-primary w-fit">Edit Profile</h2>
        <UpdateProfileForm profile={profile}/>
    </div>
  )
}

export default UpdateProfile
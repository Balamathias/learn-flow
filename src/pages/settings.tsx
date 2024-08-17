import UpdateProfile from "../components/dashboard/update-profile"
import MaxWidthWrapper from "../components/max-width-wrapper"

const Settings = () => {
  return (
    <MaxWidthWrapper className="!max-w-3xl gap-y-4 md:gap-y-6 md:mx-0 w-full justify-start">
        <UpdateProfile />
    </MaxWidthWrapper>
  )
}

export default Settings
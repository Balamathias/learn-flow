import UpdateProfile from "../components/dashboard/update-profile"
import MaxWidthWrapper from "../components/max-width-wrapper"
import { useMetadata } from "../hooks/useMetadat"

const Settings = () => {
  useMetadata({title: "Settings | Update Account Info"})
  return (
    <MaxWidthWrapper className="!max-w-3xl gap-y-4 md:gap-y-6 md:mx-0 w-full justify-start">
        <UpdateProfile />
    </MaxWidthWrapper>
  )
}

export default Settings
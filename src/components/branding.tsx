import clsx from "clsx"
import { Link } from "react-router-dom"

const Branding = ({ isLink=false, invert=false }: { isLink?: boolean, invert?: boolean }) => {
  return isLink ? (
    <Link to={'/'} className="hover:opacity-65 hover:transition-all cursor-pointer">
      <img alt="LearnFlow" src="/Logo.png" className={clsx("w-32 h-10 object-contain", invert && 'invert')}/>
    </Link>
  ): (
    <img src="/Logo.png" alt="LearnFlow" className={clsx("w-32 h-10 object-contain", invert && 'invert')}/>
  )
}

export default Branding
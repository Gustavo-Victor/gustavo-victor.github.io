import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";


export default function NavBar() {
  return (

    <nav className="w-full mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-10"
          src={logo} alt="Logo" />
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        <FaLinkedin />
        <FaInstagram />
        <FaGithub />
      </div>
    </nav>
  )
}

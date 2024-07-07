import logo from "../assets/logo-removebg-preview.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function NavBar() {
  return (
    <header id="main-header" className="w-full">
      <nav id="navbar" className="w-full mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img
            className="mx-2 w-10"
            width={60}
            style={{height: "100%"}}
            src={logo} alt="Logo" />
        </div>
        <div className="ml-8 my-8 flex items-center gap-4 text-2xl">
          <a 
            className="hover:text-white"
            href="https://linkedin.com/in/gustavovictor/" 
            target="_blank"><FaLinkedin /></a>
          <a
            className="hover:text-white" 
            href="https://github.com/Gustavo-Victor" 
            target="_blank"><FaGithub /></a>          
          {/* <a 
            href="https://instagram.com/gustav0_vbs" 
            target="_blank"><FaInstagram /></a> */}
        </div>
      </nav>
    </header>
  )
}

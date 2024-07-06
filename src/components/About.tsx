import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../data/info";


export default function About() {
    return (
        <div className="border-b border-neutral-900 pb-4 ">
            <h2 className="my-20 text-4xl text-center">
                About
                <span className="text-neutral-500">Me</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImage} alt="about-image" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

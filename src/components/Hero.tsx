import { HERO_CONTENT } from "../data/info";
import profilePicture from "../assets/kevinRushProfile.png";


export default function Hero() {
    return (
        <section id="hero" className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Gustavo Victor</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent">Estudante de programação</span>
                        <p className="my-2 max-w-xl py-6 font-tight tracking-tighter">{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center">
                        <img style={{maxWidth: "400px"}} src={profilePicture} alt="profile-picture" />
                    </div>
                </div>
            </div>
        </section>
    )
}

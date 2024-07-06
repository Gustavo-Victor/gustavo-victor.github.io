import {
    RiReactjsLine,
    RiHtml5Line,
    RiCss3Line,
    RiJavascriptLine,
    RiNodejsLine,
} from "react-icons/ri";
import { SiMongodb, SiPostgresql } from "react-icons/si"



export default function Technologies() {
    return (
        <div className="border-b border-neutral-800 pb-24 ">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiHtml5Line className="text-7xl text-orange-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiCss3Line className="text-7xl text-blue-300" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptLine className="text-7xl text-yellow-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNodejsLine className="text-7xl text-lime-800" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-600" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPostgresql className="text-7xl text-sky-900" />
                </div>
            </div>
        </div>
    )
}

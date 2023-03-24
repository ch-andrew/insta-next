import Image from "next/image";
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
        <nav className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
            {/* Left */}
            <div className={"cursor-pointer h-24 w-24 relative hidden lg:inline-grid"}>
                {/* <h1>Instanext</h1> */}
                <Image
                    alt="logo of Instagram"
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"}
                    fill={true}
                    className={"object-contain"}
                />
            </div>
            <div className={"cursor-pointer h-24 w-10 relative lg:hidden"}>
                {/* <h1>Instanext</h1> */}
                <Image
                    alt="logo of Instagram"
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"}
                    fill={true}
                    className={"object-contain"}
                />
            </div>
            {/* Middle */}
            <div className={"relative mt-1"}>
                <div className="absolute top-2 left-2">
                    <MagnifyingGlassIcon className={"h-5 text-gray-500"}/>
                </div>
                <input type="text" placeholder="Search" className={"bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"}/>
            </div>

            {/* Right */}
            <div className={"flex space-x-4 items-center"}>
                <HomeIcon className={"hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200"}/>
                <PlusCircleIcon className={"h-6 cursor-pointer hover:scale-125 transition-transform duration-200"}/>
                <div className={"p-3 bg-yellow-300 rounded-full cursor-pointer hover:scale-125 transition-transform duration-200"}></div>
            </div>
        </nav>
    </div>
  )
}

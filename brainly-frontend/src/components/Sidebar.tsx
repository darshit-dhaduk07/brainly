import { BrainIcon } from "../icon/BrainIcon";
import { Documents } from "../icon/Documents";
import { Links } from "../icon/Links";
import { Tags } from "../icon/Tags";
import { TwitterIcon } from "../icon/TwitterIcon";
import { YoutubeIcon } from "../icon/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="h-screen bg-white fixed left-0 top-0 p-2 w-80">
        <div className="flex gap-2 items-center text-2xl font-bold text-gray-700">
            <div><BrainIcon/></div>
            Second Brain
        </div>
        <div className="pt-8 pl-4">
            <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <SidebarItem text="Documents" icon={<Documents />} />
            <SidebarItem text="Links" icon={<Links />} />
            <SidebarItem text="Tags" icon={<Tags />} />
        </div>
    </div>
}
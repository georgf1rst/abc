import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"

export const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="hidden md:flex py-[11.5px] justify-center">
                <Logo />
            </div>
            <div className="flex flex-col w-full pt-2">
                <SidebarRoutes />
            </div>
        </div>
    )
}
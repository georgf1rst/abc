import { NavbarRoutes } from "@/components/navbar-routes"
import { ModileSidebar } from "./modile-sidebar"

export const Navbar = () => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
            <ModileSidebar/>
            <NavbarRoutes/>
        </div>
    )
}
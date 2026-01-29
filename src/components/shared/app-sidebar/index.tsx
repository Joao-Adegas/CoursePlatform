import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { ComponentProps } from "react";
import Link from "next/link";
import Logo from "@/assets/logo.svg"

type AppSidebarProps = ComponentProps<typeof Sidebar>

export const AppSidebar = ({...props}: AppSidebarProps) => {
    return(
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="py-4">
                <Link href="/"> <Logo/> </Link>
            </SidebarHeader>
            <SidebarContent>
                <p>Sidebar content</p>
            </SidebarContent>
            <SidebarFooter>
                <p>Sidebar footer</p>
            </SidebarFooter>
            <SidebarRail/> 
        </Sidebar>
    )
}
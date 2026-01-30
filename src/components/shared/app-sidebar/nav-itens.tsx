import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { BookOpen, BookUp2, ChartArea, MessageCircle, SquareDashedBottomCode, Trophy, Users } from "lucide-react"
import { NavItem } from "@/app/types/navItens"
import Link from "next/link"
import { Separator } from "@radix-ui/react-separator"

export const NavItens = () => {
    const navItems = [
        {
            label: "Cursos",
            path: "/",
            icon: SquareDashedBottomCode
        },
        {
            label: "Meus Cursos",
            path: "/my-courses",
            icon: BookUp2
        },
        {
            label: "Ranking",
            path: "/ranking",
            icon: Trophy
        }
    ]

    const adminNavItens = [
        {
            label: "Estatisticas",
            path: "/admin",
            icon: ChartArea
        },
        {
            label: "Gerenciar Cursos",
            path: "/admin/courses",
            icon: BookOpen
        },
        {
            label: "Gerenciar Usuários",
            path: "/admin/users",
            icon: Users
        },
        {
            label: "Gerenciar Comentários",
            path: "/admin/comments",
            icon: MessageCircle
        }
    ]

    const renderNavItems = (items: NavItem[]) => {
        return items.map((a) =>(
            <SidebarMenuItem key={a.label}>
                <SidebarMenuButton asChild tooltip={a.label}>
                    <Link href={a.path}>
                        <a.icon className="text-primary group-data-[collapsible=icon]:text-white hover:text-primary transition-all"> </a.icon>
                        <span>{a.label}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        ))
    }

    return <SidebarGroup>
        <SidebarMenu>
            {renderNavItems(navItems)}
            <Separator className="my-2"/>
            {renderNavItems(adminNavItens)}
        </SidebarMenu>
    </SidebarGroup>
}
"use client"

import Link from "next/link"
import { House, Route, Shapes, Folder } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { LangToggle } from "@/components/lang-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import {useTranslations} from 'next-intl';

export function Navbar() {
  const t = useTranslations('NavBar');
  return (
    <header className="flex justify-center w-full pt-6 z-20 relative">
      <NavigationMenu>
        <NavigationMenuList className="flex-wrap justify-center">
          <NavItem href="/" icon={<House />} label={t('home')} />
          <NavItem href="/trajectory" icon={<Route />} label={t('trajectory')} />
          <NavItem href="/skills" icon={<Shapes />} label={t('skills')} />
          <NavItem href="/projects" icon={<Folder />} label={t('projects')} />
          
          <NavigationMenuItem className="mx-2">
            <ModeToggle />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <LangToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href={href} className="flex items-center gap-2">
          {icon}
          <span className="hidden md:inline text-sm">{label}</span>
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}
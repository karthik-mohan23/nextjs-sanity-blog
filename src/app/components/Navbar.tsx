"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import NextThemeSwitch from "./ThemeSwitch";

const mobileLinks = ["Home", "About", "Projects", "Contact", "Blog"];
const desktopLinks = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "About",
  },
  {
    href: "#",
    label: "Projects",
  },
  {
    href: "#",
    label: "Contact",
  },
  {
    href: "#",
    label: "Blog",
  },
];

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <h2 className="font-bold text-inherit">KARTHIK</h2>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {desktopLinks.map(({ href, label }) => {
          return (
            <NavbarItem key={label}>
              <Link color="foreground" href={href}>
                {label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <NextThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            social media icons
          </Link>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {mobileLinks.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === mobileLinks.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

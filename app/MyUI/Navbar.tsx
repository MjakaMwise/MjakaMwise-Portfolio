"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import {  IconBrandGithubFilled, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsappFilled } from "@tabler/icons-react";
import { useState } from "react";
export function NavBar() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <IconBrandGithubFilled className="h-5 w-5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" />
            <IconBrandInstagram className="h-5 w-5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" />
            <IconBrandLinkedin className="h-5 w-5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" />
            <IconBrandWhatsappFilled className="h-5 w-5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex items-center gap-4">
            <IconBrandGithubFilled className="h-5 w-5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" />
            <IconBrandInstagram className="h-5 w-5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" />
            <IconBrandLinkedin className="h-5 w-5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" />
            <IconBrandWhatsappFilled className="h-5 w-5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" />
          </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}

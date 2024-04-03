"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import ROUTES from "@/utils/routes";
import { useState } from "react";

const LINKS = [
  { name: "Work", href: ROUTES.HOME_WORK_SECTION },
  { name: "Leadership", href: ROUTES.HOME_LEADERSHIP_SECTION },
  { name: "Strategy", href: ROUTES.HOME_STRATEGY_SECTION },
  { name: "Collaboration", href: ROUTES.HOME_COLLABORATION_SECTION },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center py-3 opacity-0 animate-fadeIn">
      <Link href={ROUTES.HOME}>
        <span className="uppercase text-[0.7rem] font-[500] tracking-[0.15em]">
          Leon Nwankwo [Chike]
        </span>
      </Link>
      <DesktopLinks />
      <MobileMenu />
    </header>
  );
}

function DesktopLinks() {
  return (
    <div className="hidden md:flex space-x-8 lg:space-x-12">
      {LINKS.map((link) => (
        <Link key={link.name} href={link.href}>
          <span className="uppercase text-[0.7rem] font-[400] tracking-[0.15em]">
            {link.name}
          </span>
        </Link>
      ))}
    </div>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <MobileMenuButton isOpen={isOpen} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0" />
        <Dialog.Content className="fixed top-[62px] left-0 right-0 bottom-0 bg-white p-8">
          <MobileLinks closeMenu={() => setIsOpen(false)} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function MobileLinks({ closeMenu }: { closeMenu: () => void }) {
  return (
    <nav className="flex flex-col">
      {LINKS.map((link) => (
        <Link href={link.href} key={link.name}>
          <span
            onClick={closeMenu}
            className="block uppercase text-[1.5rem] font-[400] tracking-[0.15em] mb-6"
          >
            {link.name}
          </span>
        </Link>
      ))}
    </nav>
  );
}

const MobileMenuButton = ({ isOpen }: { isOpen: boolean }) => (
  <button className="focus:outline-none">
    <div className="relative w-5 h-5">
      <div
        className={`absolute top-1/2 left-0 w-full h-0.5 bg-primary-dark transform transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
        }`}
      ></div>
      <div
        className={`absolute top-1/2 left-0 w-full h-0.5 bg-primary-dark transform transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div
        className={`absolute top-1/2 left-0 w-full h-0.5 bg-primary-dark transform transition-transform duration-300 ${
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
        }`}
      ></div>
    </div>
  </button>
);

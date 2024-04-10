"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import ROUTES from "@/utils/routes";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { WidthWrapper } from "@/components/ui/layout";

const LINKS = [
  { name: "Work", href: ROUTES.HOME_WORK_SECTION },
  { name: "Leadership", href: ROUTES.HOME_LEADERSHIP_SECTION },
  { name: "Strategy", href: ROUTES.HOME_STRATEGY_SECTION },
  // { name: "Collaboration", href: ROUTES.HOME_COLLABORATION_SECTION },
  { name: "About", href: ROUTES.HOME_ABOUT_SECTION },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      id="main-header"
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300 backdrop-blur-sm",
        isOpen
          ? "bg-primary-dark text-primary-white"
          : "bg-primary-white-90 text-primary-dark"
      )}
    >
      <WidthWrapper>
        <div className="flex justify-between items-center py-3 opacity-0 animate-fadeIn300">
          <Link href={ROUTES.HOME} className="leading-0 block">
            <span className="uppercase text-[0.65rem] font-[500] tracking-[0.15em] leading-0 block">
              Leon Nwankwo [Chike]
            </span>
          </Link>
          <DesktopLinks />
          <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </WidthWrapper>
    </header>
  );
}

function DesktopLinks() {
  return (
    <div className="hidden md:flex space-x-8 lg:space-x-10">
      {LINKS.map((link) => (
        <Link key={link.name} href={link.href} className="leading-0 block">
          <span className="uppercase text-[0.65rem] font-[400] tracking-[0.15em] leading-0 block">
            {link.name}
          </span>
        </Link>
      ))}
    </div>
  );
}

function MobileMenu({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  const [headerHeight, setHeaderHeight] = useState(54);

  useEffect(() => {
    // This code runs after the component mounts, ensuring `document` is defined
    const calculatedHeight =
      document.getElementById("main-header")?.clientHeight;
    if (calculatedHeight) {
      setHeaderHeight(calculatedHeight);
    }
  }, []);

  return (
    <Dialog.Root open={isOpen} onOpenChange={toggleMenu}>
      <Dialog.Trigger asChild>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-primary-dark opacity-0 animate-fadeIn750" />
        <Dialog.Content
          className={clsx(
            `top-[${headerHeight}px]`,
            "fixed left-0 right-0 bottom-0 bg-primary-dark text-primary-white p-8 opacity-0 animate-fadeIn750"
          )}
        >
          <MobileLinks closeMenu={toggleMenu} />
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

const MobileMenuButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="md:hidden focus:outline-none" onClick={onClick}>
    <div className="relative w-5 h-5">
      <div
        className={clsx(
          "absolute top-1/2 left-0 w-full h-0.5 transform transition-transform duration-300",
          isOpen
            ? "bg-primary-white rotate-45 translate-y-0"
            : "bg-primary-dark -translate-y-1.5"
        )}
      ></div>
      <div
        className={clsx(
          "absolute top-1/2 left-0 w-full h-0.5 transform transition-opacity duration-300",
          isOpen ? "bg-primary-white opacity-0" : "bg-primary-dark opacity-100"
        )}
      ></div>
      <div
        className={clsx(
          "absolute top-1/2 left-0 w-full h-0.5 transform transition-transform duration-300",
          isOpen
            ? "bg-primary-white -rotate-45 translate-y-0"
            : "bg-primary-dark translate-y-1.5"
        )}
      ></div>
    </div>
  </div>
);

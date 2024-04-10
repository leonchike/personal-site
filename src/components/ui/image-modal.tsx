/* eslint-disable @next/next/no-img-element */
"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { CloseIcon } from "@/components/ui/custom-icons";

export default function ImageModal({
  title,
  subtitle,
  imgUrl,
  children,
}: {
  title: string;
  subtitle: string;
  imgUrl: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[#2c2c2e] opacity-0 animate-fadeIn750 z-[51] isolate" />
        <Dialog.Content className="fixed inset-0 bg-[#2c2c2e] text-primary-white opacity-0 animate-fadeIn750 z-[51]">
          <Content
            title={title}
            subtitle={subtitle}
            imgUrl={imgUrl}
            // close={Dialog.Close}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Content({
  title,
  subtitle,
  imgUrl,
}: // close,
{
  title: string;
  subtitle: string;
  imgUrl: string;
  // close: React.ComponentType;
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="px-8 pt-12">
        <h2 className="font-[550]">{title}</h2>
        <p className="text-sm lg:max-w-[50%]">{subtitle}</p>
        <Dialog.Close
          className="absolute top-4 right-4 text-white cursor-pointer opacity-70 hover:opacity-100 
          transition-opacity duration-300 focus:outline-none
          "
        >
          <CloseIcon fill="#2c2c2e" />
        </Dialog.Close>
      </header>
      <div className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-full max-h-full flex items-center justify-center">
          <img
            src={imgUrl}
            alt=""
            className="max-w-full max-h-[calc(100vh-200px)] object-contain"
          />
        </div>
      </div>
    </main>
  );
}

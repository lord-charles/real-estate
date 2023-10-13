import React, { ReactNode } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import Link from "next/link";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <main
      className={
        " fixed  z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          "w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <article className="relative w-270 max-w-lg pb-10 flex flex-col space-y-6 h-full">
          <header className="p-4 flex items-center justify-between">
            <Link href="/">
              <Image
                src={"/rifthomes-logo.jpeg"}
                alt="Courses-Logo"
                width={500}
                height={500}
                className="object-contain w-[200px]"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </Link>
            <XMarkIcon
              className="block h-6 w-6"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </header>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {children}
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;

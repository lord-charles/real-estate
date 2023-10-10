import React, { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "Listing", href: "/listing", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "Agents", href: "/Agents", current: false },
  { name: "FAQ", href: "/faq", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "About us ", href: "/about", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto h-screen">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-black hover:opacity-100"
                    : "hover:text-black hover:opacity-100",
                  "py-1 text-lg font-normal opacity-75 block"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}

            <div className="relative top-[4vh]">
              <button className="bg-white w-full text-Blueviolet border border-semiblueviolet font-medium py-2 px-4 rounded">
                Log In
              </button>
              <button className="bg-semiblueviolet w-full hover:bg-Blueviolet hover:text-white text-Blueviolet font-medium my-2 py-2 px-4 rounded">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;

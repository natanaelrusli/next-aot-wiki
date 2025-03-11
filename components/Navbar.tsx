import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              alt="Logo"
              src="/logo.png"
              width={200}
              height={100}
              className="w-32"
            />
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/episodes"
              className="flex items-center text-base font-medium transition-colors hover:text-primary"
            >
              Browse Episodes
            </Link>
            <Link
              href="#"
              className="flex items-center text-base font-medium transition-colors hover:text-primary"
            >
              Characters
            </Link>
            <Link
              href="#"
              className="flex items-center text-base font-medium transition-colors hover:text-primary"
            >
              Titans
            </Link>
            <Link
              href="#"
              className="flex items-center text-base font-medium transition-colors hover:text-primary"
            >
              Locations
            </Link>
            <Link
              href="#"
              className="flex items-center text-base font-medium transition-colors hover:text-primary"
            >
              Organizations
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center space-x-4 sm:justify-end">
          <div className="flex-1 sm:grow-0 md:flex">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-md bg-background pl-8 md:w-[200px] lg:w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import { BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <p className="text-lg font-medium">AoT Wiki</p>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} AoT Wiki. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Terms & Conditions
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

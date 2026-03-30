"use client"

import Link from "next/link"; // ✅ FIXED
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-gray-900 text-white flex justify-center px-4">
      {children}
    </nav>
  );
}

export function NavLink(
  props: Omit<ComponentProps<typeof Link>, "className">
) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-gray-700 hover:text-white",
        pathname === props.href && "bg-white text-black"
      )}
    />
  );
}
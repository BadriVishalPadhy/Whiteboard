"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-6 bg-green-500">
      <div className="hidden lg:flex lg:flex-1 bg-yellow-400">Search</div>
      <UserButton />
    </div>
  );
};

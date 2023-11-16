"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="flex bg-gray-300 mr-5 p-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      <Link href="/admin" className="mr-5">
        Admin
      </Link>
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="mr-5">
          Login
        </Link>
      )}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-5">
            Sign out
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

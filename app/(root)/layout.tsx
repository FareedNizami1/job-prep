import { isAuthenticated } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUerAuthenticated = await isAuthenticated()
  if(!isUerAuthenticated) {
    redirect("/sign-in");
  }

  return (
    <div>
      <nav className="root-layout">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100" >JobPrep</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;

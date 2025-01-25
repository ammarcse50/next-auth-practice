"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const session = useSession();

   const router = useRouter();

   const handlerSignIn= ()=>{

        router.push('/api/auth/signin')

   }

  console.log("client side session",session);
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
          <li><a>About</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><Link href={"/about"}>About</Link></li>
      <li><Link href={"/dashboard"}>Dashboard</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
    {session.status === "authenticated" ? (
        <button onClick={()=> signOut()} className="btn btn-primary ">sign out</button>
      ) : (
        <button  onClick={handlerSignIn} className="btn btn-primary ">sign in</button>
      )} <br />
   
    </div>
 <h6> <br /> {session.data?.user?.name}</h6>
  </div>
  );
};

export default Navbar;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";


export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  const signin = `/account/signin`;
  const signup = `/account/signup`;
  const profile = `/account/profile`;
  

  return (
    <div>
      
       <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg
          w-[140px]"

       >
        <Link 
          href={signin} 
          id="wd-course-home-link"
          className={
            /* ===: equal and same type*/
            pathname === signin
            /*if*/
            /**/
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          Signin
        </Link>
        <Link 
          href={signup} 
          id="wd-course-home-link"
          className={
            /* ===: equal and same type*/
            pathname === signup
            /*if*/
            /**/
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          Signup
        </Link>
        <Link 
          href={profile} 
          id="wd-course-home-link"
          className={
            /* ===: equal and same type*/
            pathname === profile
            /*if*/
            /**/
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          Profile
        </Link>
      </div>
    </div>
    
  );
}
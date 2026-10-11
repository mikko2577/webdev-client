import Link from "next/link";
import {FaRegCircleUser} from "react-icons/fa6";
import {AiOutlineDashboard} from "react-icons/ai";
import {IoCalendarOutline} from "react-icons/io5";
import {LiaBookSolid,LiaCogSolid} from "react-icons/lia";
import {FaInbox} from "react-icons/fa6";
import {FaUserGroup} from "react-icons/fa6";
import {FaCircleQuestion} from "react-icons/fa6";


export default function KambazNavigation() {
  return (
    <nav
      id="wd-kambaz-navigation"
      //z: z index, priority layer is 20 / 
      //hidden:this block is hidden by default (small screen)
      //appear:if the screen over md: middle size
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        //py: padding located y axis 3px
        rel="noreferrer" className="block bg-black py-3 text-center"
      >
        <img
          src="/images/NEU.png"
          width={75}
          height={75}
          alt="Northeastern University"
          className="mx-auto"
        />
      </a>

      <br />
      {/*link functionable & appearence is a parent of below elements*/}
      <Link href="/account" id="wd-account-link" className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        {/*circle pic*/}
        <FaRegCircleUser className="inline-block text-3xl text-white" />
        <br />
          Account
      </Link>
      <br />
      <Link href="/dashboard" id="wd-dashboard-link" className="block bg-white py-3 text-center text-sm text-red-600 no-underline"
      >
      <AiOutlineDashboard className="inline-block text-3xl text-red-600" />

        <br />
        Dashboard
      </Link>
      <br />
      <Link
        href="/dashboard"
        id="wd-course-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <LiaBookSolid className="inline-block text-3xl text-red-600" />
        <br />
        Courses
      </Link>
      <Link
        href="/group"
        id="wd-group-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      > 
        {/*inline block: horizontal block
           block: vertical block*/}
        <FaUserGroup className="inline-block text-3xl text-red-600" />
        <br />
        Group
      </Link>
      <br />
      <Link
        href="/calendar"
        id="wd-calendar-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <IoCalendarOutline className="inline-block text-3xl text-red-600" />
        <br />
        Calendar
      </Link>
      <Link
        href="/inbox"
        id="wd-inbox-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaInbox className="inline-block text-3xl text-red-600" />
        <br />
        Inbox
      </Link>
      <Link
        href="/labs"
        id="wd-labs-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <LiaCogSolid className="inline-block text-3xl text-red-600" />
        <br />
        Labs
      </Link>
      <Link
        href="/labs"
        id="wd-ai-nav-help"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaCircleQuestion className="inline-block text-3xl text-red-600" />
        <br />
        Help
      </Link>
    </nav>
  );
}
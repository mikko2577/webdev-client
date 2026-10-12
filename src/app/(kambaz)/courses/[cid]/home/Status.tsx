import { FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaFileImport } from "react-icons/fa";
import { FcImport } from "react-icons/fc";
import { GiTargetDummy } from "react-icons/gi";
import { RiBarChart2Fill } from "react-icons/ri";
import { GrAnnounce } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaStar } from "react-icons/fa";



export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
          <button type="button"
            className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
          >
            <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" />
            Unpublish
          </button> 
          <button
            type="button"
            className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
            >
            <FaCheckCircle className="me-1 shrink-0 text-base" />
            Publish
          </button>
      </div>

        {/* Complete the remaining status actions on your own */}
        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <FaFileImport className="text-base shrink-0 me-1"/>
          Import Existing Content 
        </button>

        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <FcImport className="text-base shrink-0 me-1"/>
          Import From Commons
        </button>

        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <GiTargetDummy className="text-base shrink-0 me-1"/>
          Choose Home Page
        </button>

        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <RiBarChart2Fill className="text-base shrink-0 me-1"/>
          View Course Stream
        </button>

        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <GrAnnounce className="text-base shrink-0 me-1"/>
          New Announcement
        </button>

        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <SiGoogleanalytics className="text-base shrink-0 me-1"/>
          New Analytics
        </button>

        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <MdOutlineNotificationsActive className="text-base shrink-0 me-1"/>
          View Course Notifications
        </button>

        <button
          id="wd-ai-status"
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <FaStar className="text-base shrink-0 me-1"/>
          Sample action
        </button>

    </div>
  );
}
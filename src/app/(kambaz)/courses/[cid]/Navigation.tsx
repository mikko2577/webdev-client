"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

const LINKS = [
  { segment: "home", id: "wd-course-home-link", label: "Home" },
  { segment: "modules", id: "wd-course-modules-link", label: "Modules" },
  { segment: "piazza", id: "wd-course-piazza-link", label: "Piazza" },
  { segment: "zoom", id: "wd-course-zoom-link", label: "Zoom" },
  { segment: "assignments", id: "wd-course-assignments-link", label: "Assignments" },
  { segment: "quizzes", id: "wd-course-quizzes-link", label: "Quizzes" },
  { segment: "grades", id: "wd-course-grades-link", label: "Grades" },
  { segment: "people/table", id: "wd-course-people-link", label: "People" },
  { segment: "announcements", id: "wd-course-announcements-link", label: "Announcements" },
] as const;


export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const inCourse = pathname.startsWith(`/courses/${cid}`);
  // const home = `/courses/${cid}/home`;
  // const modules = `/courses/${cid}/modules`;
  // const piazza = `/courses/${cid}/piazza`;
  // const zoom = `/courses/${cid}/zoom`;
  // const assignments = `/courses/${cid}/assignments`;
  // const quizzes = `/courses/${cid}/quizzes`;
  // const grades = `/courses/${cid}/grades`;
  // const people = `/courses/${cid}/people/table`;

  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg
      w-[140px]"

    >
      {LINKS.map(({segment, id, label}) =>
        {
          const href = `/courses/${cid}/${segment}`;
          const active = inCourse ? pathname === href ||
          (segment !== "home" && pathname.startsWith(href)) : segment === "home";
          return (
            <Link
              key={id}
              href={href}
              id={id}
              className={active
              ? "list-group-item active border-0"
              : "list-gourp-item border-0 text-red-600"
            }
          >
            {label}
          </Link>
          )

        }
    )}
      {/*<Link 
        href={home} 
        id="wd-course-home-link"
        className={
          /* ===: equal and same type
          pathname === home
          /*if
          /*
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Home
      </Link>*/}
     
      {/*<Link href={modules} id="wd-course-modules-link"
      className={
          /* ===: equal and same type
          pathname === modules
          /*if
            ? "list-group-item active border-0"
            /*else
            : "list-group-item border-0 text-red-600"
        }
      >

        Modules
      </Link>
     
      <Link href={piazza} id="wd-course-piazza-link"
      className={
          /* ===: equal and same type
          pathname === piazza
          /*if
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Piazza
      </Link>
      
      <Link href={zoom} id="wd-course-zoom-link"
      className={
          /* ===: equal and same type
          pathname === zoom
          /*if
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Zoom
      </Link>
      
      <Link href={assignments} id="wd-course-assignments-link"
      className={
          /* ===: equal and same type
          pathname === assignments || pathname.startsWith(assignments+"/")
          /*if
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Assignments
      </Link>
      
      <Link href={quizzes} id="wd-course-quizzes-link"
      className={
          /* ===: equal and same type
          pathname === quizzes
          /*if
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Quizzes
      </Link>
      
      <Link href={grades} id="wd-course-grades-link"
      className={
          /* ===: equal and same type
          pathname === grades
          /*if
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Grades
      </Link>
      
      <Link href={people} id="wd-course-people-link"
      className={
          /* ===: equal and same type
          pathname === people
          /*if
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        People
      </Link>

      <Link href={home} id="wd-course-ai-link"
      className={
          /* ===: equal and same type
          pathname === home
          /*if
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Sample
      </Link>*/}

    </div>
  );
}

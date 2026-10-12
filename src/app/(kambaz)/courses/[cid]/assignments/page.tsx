import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      {/* search input, + Group, + Assignment */}
      {/* h3 wd-assignments-title */}
    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
      <div className="relative">
      <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
      <input 
        id="wd-search-assignment" 
        placeholder="Search for Assignments" 
        className="rounded border py-1.5 pr-3 pl-9 text-sm"
      />
      </div>

      <button 
        id="wd-assignments-button1">+group</button>
      <button 
        id="wd-assignments-button2">+Assignment</button>
    <h3
      id="wd-assignments-title"
      className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
      >
      <span>ASSIGNMENTS 40% of Total</span>
      <button
        type="button"
        className="rounded border bg-white px-2 py-0.5 text-sm"
      >
        <FaPlus />
      </button>
    </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {/* at least three AssignmentItems using cid */}
        <AssignmentItem 
          cid={cid} 
          aid="a1" 
          title="A1 - ENV + HTML"
          details="Multiple Modules | Not available until May 6 at 12:00am |
          Due september 30 at 11:59 100pts">
        </AssignmentItem>
        <AssignmentItem 
          cid={cid} 
          aid="a2" 
          title="A2 - CSS + TAILWIND"
          details="Multiple Modules | Not available until May 13 at 12:00am |
          Due september 30 at 11:59 100pts">
        </AssignmentItem>
        <AssignmentItem 
          cid={cid} 
          aid="a3" 
          title="A3 - JAVASCRIPT + REACT"
          details="Multiple Modules | Not available until May 20 at 12:00am |
          Due september 30 at 11:59 100pts">
        </AssignmentItem>

        <AssignmentItem
          cid={cid}
          aid="a3"
          title="A4 - My + ASSIGNMENT"
          details="Multiple Modules | Not available until May 20 at 12:00am |
          Due september 30 at 11:59 100pts">
        </AssignmentItem>
        <AssignmentItem
          cid={cid}
          aid="ai-a"
          title="A9 - Sample assignment"
          details="Multiple Modules | Not available until May 6 at 12:00am |
          Due september 30 at 11:59 100pts">
        </AssignmentItem>
      </ul>
    </div>
  </div>
  );
}
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
      <input id="ed-search-assignment" placeholder="Search for Assignments"></input>
      <button id="wd-assignments-button1">+group</button>
      <button id="wd-assignments-button2">+Assignment</button>
      <h2>Assignment 40% of total<button>+</button></h2>
      <ul id="wd-assignment-list">
        {/* at least three AssignmentItems using cid */}
        <AssignmentItem cid={cid} aid="a1" title="A1 - ENV + HTML"
        details="Multiple Modules | Not available until May 6 at 12:00am |
        due september 30 at 11:59 100pts">
        </AssignmentItem>
        <AssignmentItem cid={cid} aid="a2" title="A2 - CSS + TAILWIND"
        details="Multiple Modules | Not available until May 13 at 12:00am |
        due september 30 at 11:59 100pts">
        </AssignmentItem>
        <AssignmentItem cid={cid} aid="a3" title="A3 - JAVASCRIPT + REACT"
        details="Multiple Modules | Not available until May 20 at 12:00am |
        due september 30 at 11:59 100pts">
        </AssignmentItem>
      </ul>
    </div>
  );
}
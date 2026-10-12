import Link from "next/link";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="w-full ">
        <label 
          className="w-full font-semibold" 
          htmlFor="wd-name">Assignment Name
        </label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" 
          className="border border-gray-300 rounded-md w-full p-2 mb-6"
        />
        <textarea 
          id="wd-description"
          className="w-full h-32"
        >
        Hand in A2 on kambaz.dev, not in Canvas: sign in at https://kambaz.dev/assignments/a2Links to an external site. and submit your GitHub repository and Vercel deployment URLs there. Do not submit anything in Canvas; your grade will be posted in Canvas.
        Complete the work listed on the course website assignments page: https://kambaz.dev/assignments/a2Links to an external site.
        Sign in with your school email (the same email on the course roster).
        </textarea>
      </div>
      <div 
        className="grid grid-cols-[30%_70%] mb-4"
      >
        <label className="text-right pe-4 pt-1">
          Points
        </label>
        <input 
          type="text" 
          placeholder="100"
          className="border border-gray-300  rounded-md p-2 w-full min-w-0"
        >  
        </input>
      </div>
      <div 
        className="grid grid-cols-[30%_70%] mb-4"
      >
        <label className="text-right pe-4 pt-1">
          Assignment Group
        </label>
          <select 
            id="wd-group"
            className="border border-gray-300  rounded-md p-2 w-full min-w-0"
          >
            <option>assignments</option>
            <option>quizzes</option>
            <option>exams</option>
            <option>projects</option>
          </select>
          
      </div>
      <div 
        className="grid grid-cols-[30%_70%] mb-4"
      >
        <label className="text-right pe-4 pt-1">
          Display Grade As
        </label>
          <select 
            id="wd-group"
            className="border border-gray-300  rounded-md p-2 w-full min-w-0"
          >
            <option>persentage</option>
            <option>letter</option>
            <option>points</option>
          </select>
      </div>
      <div 
        className="grid grid-cols-[30%_70%] mb-4">
        <label 
          className="text-right pe-4 pt-1"
        >
          Submission Type
        </label>
        <div
          className="border border-gray-300  rounded-md p-2 w-full min-w-0"
        >
          <select
            className="border border-gray-300  rounded-md p-2 w-full min-w-0"
          >
            <option>
              Online
            </option>
            
          </select>
          <h5>Online Entry Options</h5>
          <div 
            className="flex flex-col gap-2">
            <label
              className="flex item-center gap-2"
            >
             <input 
              type="checkbox" 
              className="accent-blue-600"
            />
               Text Entry
            </label>
          <label
              className="flex item-center gap-2"
            >
             <input 
              type="checkbox" 
              className="accent-blue-600"
            />
               Website Url
            </label>
            <label
              className="flex item-center gap-2"
            >
             <input 
              type="checkbox" 
              className="accent-blue-600"
            />
               Media Recordings
            </label>
            <label
              className="flex item-center gap-2"
            >
             <input 
              type="checkbox" 
              className="accent-blue-600"
            />
               Student Annotation
            </label>
            <label
              className="flex item-center gap-2"
            >
             <input 
              type="checkbox" 
              className="accent-blue-600"
            />
               File Upload
            </label>
          </div>
        </div>
      </div>
      <div 
        className="grid grid-cols-[30%_70%] mb-4"
        >
        <label
          className="text-right pr-4 pt-1"
        >
          Assign
        </label>
        <div 
          className="border border-gray-300 rounded-md p-4"
        >
          <label className="font-medium"
          >
            Assign to
          </label>
          <input 
            type="text"
            defaultValue="Everyone"
            className="w-full p-2 border border-gray-300 mb-4"
          >
          </input>

          <label className="font-medium"
          >
            Due
          </label>
          <input 
            type="date"
            value="2026-10-11"
            className="w-full p-2 border border-gray-300"
          >
          </input>
          <div
            className="grid grid-cols-2 gap-4 mt-4"
          >
          <div 
          
          >
          <label className="font-medium"
          >
            Available from
          </label>
          <input 
            type="date"
            value="2026-10-11"
            className=" p-2 border border-gray-300 w-full"
          >
          </input>
          </div>
           <div 
          
          >
          <label className="font-medium"
          >
            Until
          </label>
          <input 
            type="date"
            value="2026-10-11"
            className=" p-2 border border-gray-300 w-full"
          >
          </input>
        </div>
          </div>
        
        </div>
      </div>
      <div id="wd-ai-editor-notes" className="w-full">
        <label
          className="w-full font-semibold"
          htmlFor="wd-ai-notes">Sample notes
        </label>
        <textarea
          id="wd-ai-notes"
          className="border border-gray-300 rounded-md w-full p-2 mb-6 h-32"
        >
        </textarea>
      </div>
      <hr/>
      <div
        className="flex justify-end"
      >

        <a 
          id="wd-cancel" 
          href={`/courses/1234/assignments`}
          className="bg-gray-300 text-black p-2 rounded no-underline"
        >
          Cancel</a>&nbsp;
        <a 
          id="wd-ok" 
          href={`/courses/1234/assignments`}
          className="bg-red-700 text-white p-2 rounded no-underline"
        >
          Save</a>
      </div>
    </div>
  );
}
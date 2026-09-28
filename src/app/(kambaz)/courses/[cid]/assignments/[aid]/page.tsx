export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          {/* Complete on your own — see checklist below */}
          <tr>
          <label htmlFor="wd-group">Assignment group</label>
          <select id="wd-group">
            <option>assignments</option>
            <option>quizzes</option>
            <option>exams</option>
            <option>projects</option>
          </select>
          </tr>
          <tr>
          <label htmlFor="wd-grade">display grade as</label>
          <select id="wd-grade">
            <option>persentage</option>
            <option>letter</option>
            <option>points</option>
          </select>
          </tr>
          <tr>
            <input type="checkbox" id="wd-text-entry">  
            </input>
            <label htmlFor="wd-text-entry">
              Text Entry
            </label>
            <br />
            <input type="checkbox" id="wd-website-url">  
            </input>
            <label htmlFor="wd-website-url">
              Website Url
            </label>
            <br />
            <input type="checkbox" id="wd-media-recordings">  
            </input>
            <label htmlFor="wd-media-recordings">
              Media Recordings
            </label>
            <br />
            <input type="checkbox" id="wd-student-annotation">  
            </input>
            <label htmlFor="wd-student-annotation">
              Student Annotation
            </label>
            <br />
            <input type="checkbox" id="wd-file-upload">  
            </input>
            <label htmlFor="wd-file-upload">
              File Upload
            </label>
            <br />
          </tr>
          <tr>
            <label htmlFor="wd-assign-to">Assign to</label>
            <input id="wd-assign-to" defaultValue="Everyone">
            </input>
            <br />
            <label htmlFor="wd-due">Due</label>
            <input id="wd-due" type="Date">
            </input>
            <br />
            <label htmlFor="wd-avaliable-from">Available from</label>
            <input id="wd-avaliable-from" type="Date">
            </input>
            <br />
             <label htmlFor="wd-untill">Utill</label>
            <input id="wd-untill" type="Date">
            </input>
            <br />
          </tr>
        </tbody>
      </table>
      <a id="wd-cancel" href={`/courses/1234/assignments`}>Cancel</a>&nbsp;
      <a id="wd-ok" href={`/courses/1234/assignments`}>Save</a>
    </div>
  );
}
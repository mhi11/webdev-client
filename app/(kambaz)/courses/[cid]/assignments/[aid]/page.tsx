import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" />
            <br />
            <br />
            <label htmlFor="wd-description">Description</label>
            <br />
            <textarea 
                id="wd-description" 
                defaultValue="The assignment is available online. Submit a link to the landing page." 
            />
            <br />
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
                    <tr>
                        <td align="right">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group" defaultValue="ASSIGNMENTS">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECT">PROJECT</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label htmlFor="wd-display-grade-as">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                                <option value="PERCENTAGE">Percentage</option>
                                <option value="POINTS">Points</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td>
                            <select id="wd-submission-type" defaultValue="ONLINE">
                                <option value="ONLINE">Online</option>
                                <option value="PAPER">On Paper</option>
                                <option value="NONE">No Submission</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <h4>Online Entry Options</h4>
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>

            <h4>Assign</h4>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" defaultValue="Everyone" />
            <br />
            <br />
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" id="wd-due-date" />
            <br />
            <br />
            <label htmlFor="wd-available-from">Available from</label>
            <br />
            <input type="date" id="wd-available-from" />
            <br />
            <br />
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input type="date" id="wd-available-until" />
            <br />
            <br />
            <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
                Cancel
            </Link>
            {" "}
            <Link href={`/courses/${cid}/assignments`} id="wd-save">
                Save
            </Link>
        </div>
    );
}
import Link from "next/link";
import * as db from "../../../../database";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue={assignment?.title ?? ""} /> <br /><br />
      <textarea
        id="wd-description"
        defaultValue={assignment?.description ?? ""}
        rows={8}
        className="w-full"
      /> <br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={assignment?.points ?? 100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-due-date"
                defaultValue={assignment?.due}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                defaultValue={assignment?.available}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mb-4">
        <label
          htmlFor="wd-group"
          className="mb-1 block text-sm font-medium"
        >
          Assignment Group
        </label>

        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="wd-display-grade-as"
          className="mb-1 block text-sm font-medium"
        >
          Display Grade as
        </label>

        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="wd-submission-type"
          className="mb-1 block text-sm font-medium"
        >
          Submission Type
        </label>

        <select
          id="wd-submission-type"
          defaultValue="ONLINE"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="ONLINE">Online</option>
          <option value="PAPER">On Paper</option>
          <option value="NONE">No Submission</option>
        </select>
      </div>

      <div className="mb-6">
        <h4 className="mb-2 text-lg font-semibold">
          Online Entry Options
        </h4>

        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">
            Student Annotation
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Uploads</label>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="mb-3 text-lg font-semibold">Assign</h4>

        <div className="mb-4">
          <label
            htmlFor="wd-assign-to"
            className="mb-1 block text-sm font-medium"
          >
            Assign to
          </label>

          <input
            id="wd-assign-to"
            defaultValue="Everyone"
            className="w-full rounded border border-neutral-300 px-3 py-2"
          />
        </div>
      </div>
      <br />
      <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
        Cancel
      </Link>{" "}
      <Link href={`/courses/${cid}/assignments`} id="wd-save">
        Save
      </Link>
    </div>
  );
}
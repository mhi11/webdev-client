import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label
          htmlFor="wd-name"
          className="mb-1 block text-sm font-medium"
        >
          Assignment Name
        </label>

        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="wd-description"
          className="mb-1 block text-sm font-medium"
        >
          Description
        </label>

        <textarea
          id="wd-description"
          defaultValue="The assignment is available online. Submit a link to the landing page."
          rows={5}
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="wd-points"
          className="mb-1 block text-sm font-medium"
        >
          Points
        </label>

        <input
          id="wd-points"
          defaultValue={100}
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

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

        <div className="mb-4">
          <label
            htmlFor="wd-due-date"
            className="mb-1 block text-sm font-medium"
          >
            Due Date
          </label>

          <input
            type="date"
            id="wd-due-date"
            className="w-full rounded border border-neutral-300 px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="wd-available-from"
            className="mb-1 block text-sm font-medium"
          >
            Available from
          </label>

          <input
            type="date"
            id="wd-available-from"
            className="w-full rounded border border-neutral-300 px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="wd-available-until"
            className="mb-1 block text-sm font-medium"
          >
            Until
          </label>

          <input
            type="date"
            id="wd-available-until"
            className="w-full rounded border border-neutral-300 px-3 py-2"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 border-t border-neutral-300 pt-4">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-black no-underline"
        >
          Cancel
        </Link>

        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
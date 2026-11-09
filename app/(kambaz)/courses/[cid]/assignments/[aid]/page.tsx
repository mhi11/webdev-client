
"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{
    cid: string;
    aid: string;
  }>();

  const router = useRouter();

  const assignments = useAssignmentsStore(
    (state) => state.assignments
  );
  const addAssignment = useAssignmentsStore(
    (state) => state.addAssignment
  );
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment
  );

  const existingAssignment = assignments.find(
    (a) => a._id === aid && a.course === cid
  );

  const isNew = aid === "new";

  const [assignment, setAssignment] = useState<Assignment>(
    () =>
      existingAssignment ?? {
        _id: "",
        title: "",
        description: "",
        points: 100,
        due: "",
        available: "",
        until: "",
        course: cid,
      }
  );

  const updateField = (changes: Partial<Assignment>) => {
    setAssignment((previous) => ({
      ...previous,
      ...changes,
    }));
  };

  const saveAssignment = () => {
    if (!assignment.title.trim()) {
      alert("Please enter an assignment name.");
      return;
    }

    if (isNew) {
      addAssignment({
        title: assignment.title.trim(),
        description: assignment.description,
        points: assignment.points,
        due: assignment.due,
        available: assignment.available,
        until: assignment.until,
        course: cid,
      });
    } else {
      updateAssignment({
        ...assignment,
        title: assignment.title.trim(),
        course: cid,
      });
    }

    router.push(`/courses/${cid}/assignments`);
  };

  const cancel = () => {
    router.push(`/courses/${cid}/assignments`);
  };

  if (!isNew && !existingAssignment) {
    return <p>Assignment not found.</p>;
  }

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        Assignment Name
      </label>
      <input
        id="wd-name"
        className="rounded border border-neutral-300 px-3 py-2"
        value={assignment.title}
        onChange={(e) =>
          updateField({ title: e.target.value })
        }
      />

      <br />
      <br />

      <textarea
        id="wd-description"
        rows={8}
        className="w-full rounded border border-neutral-300 p-2"
        value={assignment.description}
        onChange={(e) =>
          updateField({ description: e.target.value })
        }
      />

      <br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">
                Points
              </label>
            </td>
            <td>
              <input
                id="wd-points"
                type="number"
                className="rounded border p-2"
                value={assignment.points}
                onChange={(e) =>
                  updateField({
                    points: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">
                Due
              </label>
            </td>
            <td>
              <input
                type="date"
                id="wd-due-date"
                className="rounded border p-2"
                value={assignment.due}
                onChange={(e) =>
                  updateField({ due: e.target.value })
                }
              />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">
                Available from
              </label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                className="rounded border p-2"
                value={assignment.available}
                onChange={(e) =>
                  updateField({
                    available: e.target.value,
                  })
                }
              />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">
                Available until
              </label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-until"
                className="rounded border p-2"
                value={assignment.until ?? ""}
                onChange={(e) =>
                  updateField({ until: e.target.value })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mb-4 mt-4">
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
          <label htmlFor="wd-text-entry">
            Text Entry
          </label>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="wd-website-url">
            Website URL
          </label>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">
            Media Recordings
          </label>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">
            Student Annotation
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">
            File Uploads
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="mb-3 text-lg font-semibold">
          Assign
        </h4>

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

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={cancel}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={saveAssignment}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 font-medium text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}

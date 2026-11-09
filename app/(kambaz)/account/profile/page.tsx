
"use client";

import { useState } from "react";
import { useRouter, redirect } from "next/navigation";
import {
  useAccountContext,
  type User,
} from "../AccountContext";

export default function Profile() {
  const { currentUser, setCurrentUser } = useAccountContext();
  const [profile, setProfile] = useState<User | null>(currentUser);
  const router = useRouter();

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!currentUser) {
    redirect("/account/signin");
  }

  if (!profile) return null;

  return (
    <div id="wd-profile-screen" className="max-w-md">
      <h3 className="mb-3 text-2xl font-semibold">
        Profile
      </h3>

      <label htmlFor="wd-username">Username</label>
      <input
        id="wd-username"
        className="mb-3 block w-full rounded border p-2"
        value={profile.username}
        onChange={(e) =>
          setProfile({
            ...profile,
            username: e.target.value,
          })
        }
      />

      <label htmlFor="wd-password">Password</label>
      <input
        id="wd-password"
        type="password"
        className="mb-3 block w-full rounded border p-2"
        value={profile.password}
        onChange={(e) =>
          setProfile({
            ...profile,
            password: e.target.value,
          })
        }
      />

      <label htmlFor="wd-first-name">First Name</label>
      <input
        id="wd-first-name"
        className="mb-3 block w-full rounded border p-2"
        value={profile.firstName}
        onChange={(e) =>
          setProfile({
            ...profile,
            firstName: e.target.value,
          })
        }
      />

      <label htmlFor="wd-last-name">Last Name</label>
      <input
        id="wd-last-name"
        className="mb-3 block w-full rounded border p-2"
        value={profile.lastName}
        onChange={(e) =>
          setProfile({
            ...profile,
            lastName: e.target.value,
          })
        }
      />

      <label htmlFor="wd-email">Email</label>
      <input
        id="wd-email"
        type="email"
        className="mb-3 block w-full rounded border p-2"
        value={profile.email}
        onChange={(e) =>
          setProfile({
            ...profile,
            email: e.target.value,
          })
        }
      />

      <label htmlFor="wd-role">Role</label>
      <select
        id="wd-role"
        className="mb-3 block w-full rounded border p-2"
        value={profile.role}
        onChange={(e) =>
          setProfile({
            ...profile,
            role: e.target.value,
          })
        }
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="rounded bg-red-600 px-4 py-2 font-medium text-white"
      >
        Sign out
      </button>
    </div>
  );
}

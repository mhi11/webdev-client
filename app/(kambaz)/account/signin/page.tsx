
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as db from "../../database";
import { useAccountContext } from "../AccountContext";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signin = () => {
    const user = db.users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    if (!user) return;

    setCurrentUser(user);
    router.push("/dashboard");
  };

  return (
    <div id="wd-signin-screen" className="max-w-md">
      <h3 className="mb-3 text-2xl font-semibold">
        Sign in
      </h3>

      <input
        placeholder="username"
        id="wd-username"
        className="mb-2 w-full rounded border border-neutral-300 p-2"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            username: e.target.value,
          })
        }
      />

      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className="mb-3 w-full rounded border border-neutral-300 p-2"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
      />

      <button
        type="button"
        onClick={signin}
        id="wd-signin-btn"
        className="mb-3 w-full rounded bg-red-600 px-4 py-2 font-medium text-white"
      >
        Sign in
      </button>

      <Link
        href="/account/signup"
        id="wd-signup-link"
        className="text-blue-600 underline"
      >
        Sign up
      </Link>
    </div>
  );
}

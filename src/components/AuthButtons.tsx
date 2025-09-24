"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm">Hi, {session.user?.name ?? session.user?.email}</span>
        <button
          onClick={() => signOut()}
          className="bg-gray-700 text-white px-3 py-1 rounded"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="bg-blue-600 text-white px-3 py-1 rounded"
    >
      Sign in
    </button>
  );
}
"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signIn");
    }
  });

  return (
    <div>
      {session?.data ? (
        <div className="p-8">
          <div className="text-white">{session?.data?.user?.email}</div>
          <button className="text-white" onClick={() => signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <div className="text-white">You are not logged in</div>
      )}
    </div>
  );
}

Home.requireAuth = true;

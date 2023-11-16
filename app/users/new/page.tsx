"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const newUser = () => {
  const router = useRouter();
  return (
    <div>
      <div>newUser</div>
      <button onClick={() => router.push("/users")} className="btn btn-primary">
        Create
      </button>
    </div>
  );
};

export default newUser;

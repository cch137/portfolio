"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function NotFound({ redirectTo }: { redirectTo?: string }) {
  const router = useRouter();
  const inited = useRef(false);
  useEffect(() => {
    if (inited.current) return;
    inited.current = true;
    router.push("/");
  }, [router, inited]);
  return <></>;
}

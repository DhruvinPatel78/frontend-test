"use client";

import dynamic from "next/dynamic";

const LocationPage = dynamic(() => import("./Location"), { ssr: false });

export default function Home() {
  return <LocationPage />;
}

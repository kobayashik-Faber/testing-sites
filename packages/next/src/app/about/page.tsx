import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About"
};

export default function About() {
  return (
    <main className="px-12 my-12 text-center">
      <p>This page will be displayed at the /about/ route.</p>
    </main>
  );
}

import { ReactNode } from "react";

export default function Section(
  { id, title, children }:{ id:string; title:string; children:ReactNode }
) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 pt-28 pb-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">{title}</h2>
      {children}
    </section>
  );
}

import React from "react";

type SectionHeadingProps = {
  label: string;
  title: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ label, title }) => (
  <header className="mb-8">
    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
      {label}
    </p>
    <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
      {title}
    </h2>
  </header>
);

export default SectionHeading;

import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="top" className="py-20 md:py-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
        Engines · Graphics · Virtual agents
      </p>

      <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
        I build the systems
        <br />
        underneath games.
      </h1>

      <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-body sm:text-base">
        I&apos;m Kjartan Már Andersen, a software engineer in Reykjavík with an
        MSc in Computer Science. I&apos;ve written a game engine from scratch in
        C++, built virtual agents that behave believably around each other, and
        shipped two games in Unity.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-sm bg-accent px-5 py-2.5 font-mono text-xs font-medium tracking-wide text-ink transition-colors hover:bg-white"
        >
          See the work
        </a>
      </div>
    </section>
  );
};

export default Hero;

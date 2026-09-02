import React from "react";

import ConversationCircle from "./ConversationCircle";

const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="grid gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28"
    >
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
          Engines · Graphics · Virtual agents
        </p>

        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
          I build the systems
          <br />
          underneath games.
        </h1>

        <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-body">
          I&apos;m Kjartan Már Andersen, a software engineer in Reykjavík with an
          MSc in Computer Science. I&apos;ve written a game engine from scratch
          in C++, built virtual agents that behave believably around each other,
          and shipped two games in Unity.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-sm bg-accent px-5 py-2.5 font-mono text-xs font-medium tracking-wide text-ink transition-colors hover:bg-white"
          >
            See the work
          </a>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;

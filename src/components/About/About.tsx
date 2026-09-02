import React from "react";

import SectionHeading from "../SectionHeading/SectionHeading";
import portrait from "../../Db/Images/CV/cv_image.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line py-16">
      <SectionHeading label="About" title="Background" />

      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
        <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-body">
          <p>
            I hold a BSc and an MSc in Computer Science from Reykjavík
            University, where I studied computer graphics, virtual environments
            and virtual agents. My master&apos;s thesis built a system for
            socially believable virtual agents on top of the MetaHuman framework
            in Unreal Engine.
          </p>
          <p>
            Outside of that I&apos;ve written a game engine from scratch in C++
            — renderer, scene serialisation, C# scripting and an editor — and
            shipped two games in Unity, working on gameplay systems, physics and
            audio alongside artists and designers.
          </p>
          <p>
            I&apos;ve also worked professionally on data-driven web applications
            at Advania, and spent two years as a teaching assistant for
            Programming I and Operating Systems, which is where I learned to
            explain a technical idea to someone who doesn&apos;t already share
            my assumptions.
          </p>
        </div>

        <img
          src={portrait}
          alt="Kjartan Már Andersen"
          className="order-first h-32 w-32 rounded-sm border border-line object-cover grayscale md:order-none md:h-40 md:w-40"
        />
      </div>
    </section>
  );
};

export default About;

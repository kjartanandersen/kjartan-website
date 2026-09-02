import React from "react";

import { skillCategories } from "../../Db/data";
import SectionHeading from "../SectionHeading/SectionHeading";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line py-16">
      <SectionHeading label="Skills" title="What I work with" />

      <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.name} className="border-t border-line pt-4">
            <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
              {category.name}
            </dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-body">
              {category.skills.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Skills;

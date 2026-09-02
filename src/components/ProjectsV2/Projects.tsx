import React from "react";

import { projects } from "../../Db/data";
import SectionHeading from "../SectionHeading/SectionHeading";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <SectionHeading label="Work" title="Selected projects" />

      {/* Reverse-chronological, so the year rail carries real information. */}
      <ol className="border-t border-line">
        {projects.map((project) => (
          <li
            key={project.id}
            className="group grid gap-x-8 gap-y-3 border-b border-line py-7 last:border-b-0 md:grid-cols-[7rem_1fr]"
          >
            <div className="pt-0.5 font-mono text-xs text-muted">
              {project.year}
            </div>

            <div>
              <h3 className="font-display text-lg font-bold leading-snug text-white transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-1 text-xs italic text-muted">
                {project.context}
              </p>

              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-body">
                {project.summary}
              </p>

              <details className="group/detail mt-3 max-w-2xl">
                <summary className="inline-flex cursor-pointer list-none font-mono text-[11px] tracking-wide text-muted transition-colors hover:text-accent">
                  <span className="mr-2 inline-block transition-transform group-open/detail:rotate-90">
                    ›
                  </span>
                  Technical detail
                </summary>
                <div className="mt-3 space-y-3 border-l border-line pl-4 text-sm leading-relaxed text-body">
                  <p>{project.description}</p>
                  {project.role && (
                    <p>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                        My role
                      </span>
                      <br />
                      {project.role}
                    </p>
                  )}
                </div>
              </details>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-sm border border-line bg-panel px-2 py-1 font-mono text-[10px] text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-accent transition-colors hover:text-white"
                  >
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Projects;

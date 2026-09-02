import React from "react";

import SectionHeading from "../SectionHeading/SectionHeading";

const channels = [
  { key: "Email", label: "kjartan1@live.com", url: "mailto:kjartan1@live.com" },
  {
    key: "GitHub",
    label: "github.com/kjartanandersen",
    url: "https://github.com/kjartanandersen",
  },
  {
    key: "LinkedIn",
    label: "linkedin.com/in/kjartanmarandersen",
    url: "https://www.linkedin.com/in/kjartanmarandersen/",
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-16">
      <SectionHeading label="Contact" title="Get in touch" />

      <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-body">
        I&apos;m open to roles in game, engine and graphics development, and to
        collaborating on interesting technical projects.
      </p>

      <dl className="space-y-3">
        {channels.map((channel) => (
          <div
            key={channel.key}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <dt className="font-mono text-[11px] uppercase tracking-widest text-muted sm:w-24">
              {channel.key}
            </dt>
            <dd>
              <a
                href={channel.url}
                target={channel.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  channel.url.startsWith("mailto:") ? undefined : "noreferrer"
                }
                className="font-mono text-sm text-accent transition-colors hover:text-white"
              >
                {channel.label}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Contact;

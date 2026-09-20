import { projects } from "../../Db/data";
import { education, workExperiences } from "../data";

describe("portfolio projects data", () => {
  it("has unique ids", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every project has the required fields and at least one link", () => {
    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.techStack.length).toBeGreaterThan(0);
      expect(project.links.length).toBeGreaterThan(0);

      for (const link of project.links) {
        expect(link.label).toBeTruthy();
        expect(link.url).toMatch(/^https?:\/\//);
      }
    }
  });
});

describe("education data", () => {
  it("has three entries, each with a subject, institution and dates", () => {
    expect(education).toHaveLength(3);

    for (const entry of education) {
      expect(entry.subject).toBeTruthy();
      expect(entry.name).toBeTruthy();
      expect(entry.dateFrom).toBeTruthy();
      expect(entry.dateTo).toBeTruthy();
    }
  });
});

describe("work experience data", () => {
  it("includes the roles from the CV", () => {
    const occupations = workExperiences.map((job) => job.occupation);
    expect(occupations).toEqual(
      expect.arrayContaining([
        "Teaching Assistant",
        "Software Specialist, Full Time",
        "Programming Assistant, Summer Job",
        "Receptionist",
      ])
    );
  });

  it("leaves the N1 entry without a logo", () => {
    const n1 = workExperiences.find((job) => job.company === "N1");
    expect(n1).toBeDefined();
    expect(n1?.image).toBeUndefined();
  });
});

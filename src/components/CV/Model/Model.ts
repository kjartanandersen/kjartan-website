import { WorkExperienceProp, EducationProp, InfoProp, SkillProp, LanguageProp, ReferenceProp, LinkProp } from "../../../_types/ProfileProps.d";

export interface IExperienceCardProps {
  WorkExperience: WorkExperienceProp,
};

export interface IExperienceAndEducationCardProps {
  WorkExperience: WorkExperienceProp[],
  Education: EducationProp[],
};

export interface IEducationCardProps {
  Education: EducationProp
}

export interface IInfoCardProps {
  Info: InfoProp,
  Skills: SkillProp[],
  Languages: LanguageProp[],
  References: ReferenceProp[],
  Links: LinkProp[],

}
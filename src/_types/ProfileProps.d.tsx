export interface IProps {

}

export interface IState {
    education: EducationProp[]
}

type EducationProp = {
    name: string,
    date_from: string,
    date_to: string,
    subject: string,
    description: string
}

type LanguageProp = {
    name: string,
    proficiency: string
}

type ReferenceProp = {
    name: string,
    email: string,
    phone: string
}

export type SkillProp = {
    name: string,
    proficiency: string
}

type WorkExperienceProp = {
    company_name: string,
    date_from: string,
    date_to: string,
    occupation: string,
    description: string
}

type LinkProp = {
    name: string,
    url: string
}
export type ProfileProp = {
    id: string,
    name: string,
    about_me: string,
    current_residence: string,
    date_of_birth: Date,
    ssn: string,
    phone: string,
    email: string,
    hobbies: string[]
    languages: LanguageProp[],
    skills: SkillProp[],
    references: ReferenceProp[],
    education: EducationProp[],
    work_experiences: WorkExperienceProp[],
    links: LinkProp[]
}



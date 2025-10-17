export interface IProps {

}

export interface IState {
    education: EducationProp[]
}

export type InfoProp = {
    name: string,
    about_me: string,
    current_residence: string,
    date_of_birth: Date,
    ssn: string,
    phone: string,
    email: string,
    image: string,
}

export type EducationProp = {
    name: string,
    date_from: string,
    date_to: string,
    subject: string,
    description: string
    image: string
}

export type LanguageProp = {
    name: string,
    proficiency: string
}

export type ReferenceProp = {
    name: string,
    email: string,
    phone: string
}

export type SkillProp = {
    name: string,
    proficiency: string
}

export type WorkExperienceProp = {
    company_name: string,
    date_from: string,
    date_to: string,
    occupation: string,
    description: string,
    image: string
}

export type LinkProp = {
    name: string,
    url: string
}
export type ProfileProp = {
    id: string,
    name: string,
    about_me: string,
    info: InfoProp,
    hobbies: string[]
    languages: LanguageProp[],
    skills: SkillProp[],
    references: ReferenceProp[],
    education: EducationProp[],
    work_experiences: WorkExperienceProp[],
    links: LinkProp[]
}



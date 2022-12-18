export interface IProps {

}

export interface IState {
    education: EducationProp[]
}

export type EducationProp = {
    id: string,
    name: string,
    date_from: string,
    date_to: string,
    subject: string,
    description: string
}
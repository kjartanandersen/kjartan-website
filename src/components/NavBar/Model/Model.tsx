import { ReactNode } from 'react'

export interface Props {
    gotoHrefFunc: (gotoName: string) => void
    activeComp: String;
    children: ReactNode;
}
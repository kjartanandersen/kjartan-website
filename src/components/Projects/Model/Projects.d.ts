import { ReactNode } from "react";
import { IconType } from "react-icons";
import { DiReact } from "react-icons/di";
import { SiTypescript } from "react-icons/si";


export type Props = {
  title: string;
  descrpition: string;
  technology: ReactNode[];
  image: string;
  link: string;
};


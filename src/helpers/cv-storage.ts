import axios from "axios";
import { EducationProp } from "../_types/EducationTypes.d";

export async function getAllEducation() {
    return axios.create({
        baseURL: "https://localhost:7282/api",
        headers: {
            "content-type": "application/json"
        }
    }).get<Array<EducationProp>>('/Education');
}


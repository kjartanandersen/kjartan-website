import axios from "axios";
import { EducationProp } from "../_types/EducationTypes.d";

const url = "https://localhost:7282/api/Education";

export async function getAllEducation(): Promise<EducationProp[]> {
    try {
        
        const resp = await axios.get<EducationProp[]>(url);
        if (resp.status !== 200) {
            throw new Error("Error getting education document");
        }
        const data: EducationProp[] = await resp.data;

        return data;

    } catch (error) {
        throw error;
    }
}

export async function getAllEducation2() {
    const data = await axios.get<EducationProp[]>(url);
    if (data.status !== 200) {
        throw new Error("Error getting education document");
    }
    return data;
}


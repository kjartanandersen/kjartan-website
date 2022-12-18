import axios from "axios";
import { EducationProp } from "../_types/EducationTypes.d";

export async function getAllEducation(): Promise<EducationProp[]> {
    try {
        const url = "https://localhost:7282/api/Education";
        const resp = await axios.get(url);
        if (resp.status !== 200) {
            throw new Error("Error getting education document");
        }
        const data: EducationProp[] = await resp.data;

        return data;

    } catch (error) {
        throw error;
    }
}

